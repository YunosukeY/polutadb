import type { Page } from '@playwright/test';
import type { RawSinging } from '../src/data/types';
import { artistOf, data, newestFirst, shareTitle, typeIndex, videoOf } from './fixture';
import { expect, menu, open, resultCount, stars, stored, test } from './test';

const total = String(data.singings.length);

const openTop = async (page: Page, url = '/') => {
  await open(page, url);
  await expect(page.getByRole('heading', { name: /^Results?$/ })).toBeVisible();
};

/** 先頭のカードがどの歌唱データか。お気に入りボタンの aria-label で特定する */
const expectFirstCard = (page: Page, singing: RawSinging | undefined) => {
  if (singing === undefined) throw new Error('fixture に該当する歌唱データがない');
  return expect(stars(page).first()).toHaveAccessibleName(`${shareTitle(singing)}をお気に入り登録`);
};

const currentPage = (page: Page, n: number) => page.getByRole('button', { name: `page ${n}`, exact: true });

const selectOption = async (page: Page, label: string, option: string) => {
  await page.getByRole('combobox', { name: label }).click();
  await page.getByRole('option', { name: option, exact: true }).click();
};

const type = '歌枠';
const ofType = data.singings.filter((s) => videoOf(s).type === type);

test('全文検索に入力すると300ms後にURLクエリと結果件数が変わる', async ({ page }) => {
  await page.clock.install();
  await openTop(page);
  await expect(resultCount(page)).toHaveText(total);
  await page.clock.pauseAt(new Date(Date.now() + 60_000));

  const query = '曲10';
  const expected = data.singings.filter((s) => s.song === query).length;

  await page.getByRole('textbox', { name: '全文検索' }).fill(query);
  await page.clock.runFor(290);
  expect(new URL(page.url()).searchParams.get('query')).not.toBe(query);
  await expect(resultCount(page)).toHaveText(total);

  await page.clock.runFor(20);
  await expect.poll(() => new URL(page.url()).searchParams.get('query')).toBe(query);
  await expect(resultCount(page)).toHaveText(String(expected));
  await expect(stars(page)).toHaveCount(expected);
});

test('Autocomplete で選択すると絞り込まれ、クリアすると戻る', async ({ page }) => {
  await openTop(page);
  await expect(resultCount(page)).toHaveText(total);

  await selectOption(page, '動画のタイプ', type);
  await expect(page.getByRole('combobox', { name: '動画のタイプ' })).toHaveValue(type);
  await expect(resultCount(page)).toHaveText(String(ofType.length));
  await expect.poll(() => new URL(page.url()).searchParams.get('type')).toBe(String(typeIndex(type)));

  const combobox = page.getByRole('combobox', { name: '動画のタイプ' });
  await combobox.hover();
  await page.locator('.MuiAutocomplete-root').filter({ has: combobox }).getByRole('button', { name: 'Clear' }).click();
  await expect(combobox).toHaveValue('');
  await expect(resultCount(page)).toHaveText(total);
  await expect.poll(() => new URL(page.url()).searchParams.get('type')).toBe('-1');
});

test('URL直リンクでフォームと結果が復元される', async ({ page }) => {
  await page.clock.install();
  const query = '曲01';
  const expected = ofType.filter((s) => s.song === query);
  expect(expected.length).toBeGreaterThan(0);

  const url = `/?query=${encodeURIComponent(query)}&type=${typeIndex(type)}`;

  await openTop(page, url);

  await expect(page.getByRole('textbox', { name: '全文検索' })).toHaveValue(query);
  await expect(page.getByRole('combobox', { name: '動画のタイプ' })).toHaveValue(type);
  await expect(page.getByRole('combobox', { name: '曲' })).toHaveValue('');
  await expect(resultCount(page)).toHaveText(String(expected.length));
  await expect(stars(page)).toHaveCount(expected.length);
  await expectFirstCard(page, expected.at(-1));

  // 全文検索のデバウンス（300ms）を過ぎても、URLは書き換わらず、復元された状態のまま
  await page.clock.runFor(1000);
  await expect(page).toHaveURL(url);
  await expect(page.getByRole('textbox', { name: '全文検索' })).toHaveValue(query);
  await expect(resultCount(page)).toHaveText(String(expected.length));
});

test('クエリなしで開いたときは、操作するまでURLが書き換わらず、ページ番号も戻らない', async ({ page }) => {
  await page.clock.install();
  await openTop(page);

  // 開いてすぐにページを送っても、1ページ目に巻き戻されない
  await page.getByRole('button', { name: 'Go to page 2' }).click();
  await expect(currentPage(page, 2)).toHaveAttribute('aria-current', 'true');
  await page.clock.runFor(1000);
  await expect(page).toHaveURL('/');
  await expect(currentPage(page, 2)).toHaveAttribute('aria-current', 'true');
});

test('ソートを切り替えると並びが変わり、リロード後も保持される', async ({ page }) => {
  const bySong = newestFirst.find((s) => s.song === '曲01');
  const byArtist = newestFirst.find((s) => artistOf(s) === '');

  await openTop(page);
  await expect(page.getByRole('radio', { name: '時系列順' })).toBeChecked();
  await expectFirstCard(page, newestFirst[0]);

  await page.getByRole('radio', { name: 'アーティスト名順' }).check();
  await expectFirstCard(page, byArtist);

  await page.getByRole('radio', { name: '曲名順' }).check();
  await expectFirstCard(page, bySong);
  await stored(page, 'sortedBy').toBe('1');

  await page.reload();
  await expect(page.getByRole('radio', { name: '曲名順' })).toBeChecked();
  await expectFirstCard(page, bySong);
});

test('1ページの表示件数はPCで20件、モバイルで10件。ページ送りで2ページ目が表示され、絞り込みやページ遷移で1ページ目に戻る', async ({
  page,
  isMobile,
}) => {
  const perPage = isMobile ? 10 : 20;

  await openTop(page);
  await expect(stars(page)).toHaveCount(perPage);
  await expectFirstCard(page, newestFirst[0]);
  await expect(currentPage(page, 1)).toHaveAttribute('aria-current', 'true');
  await expect(page.getByRole('button', { name: /^(Go to )?page \d+$/ })).toHaveCount(
    Math.ceil(data.singings.length / perPage),
  );

  await page.getByRole('button', { name: 'Go to page 2' }).click();
  await expect(currentPage(page, 2)).toHaveAttribute('aria-current', 'true');
  await expectFirstCard(page, newestFirst[perPage]);
  await expect(stars(page)).toHaveCount(perPage);

  // 絞り込みを変えると1ページ目に戻る
  await selectOption(page, '曲', '曲01（アーティストA）');
  const filtered = newestFirst.filter((s) => s.song === '曲01');
  await expect(resultCount(page)).toHaveText(String(filtered.length));
  await expect(currentPage(page, 1)).toHaveAttribute('aria-current', 'true');
  await expectFirstCard(page, filtered[0]);

  // メニューからの遷移でも1ページ目に戻る
  await openTop(page);
  await page.getByRole('button', { name: 'Go to page 2' }).click();
  await expect(currentPage(page, 2)).toHaveAttribute('aria-current', 'true');
  await menu(page, 'Favorites');
  await expect(page).toHaveURL('/favos');
  await menu(page, 'Search');
  await expect(page).toHaveURL('/');
  await expect(currentPage(page, 1)).toHaveAttribute('aria-current', 'true');
  await expectFirstCard(page, newestFirst[0]);
});
