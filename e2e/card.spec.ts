import { data, newestFirst, seconds, shareTitle, shareUrl, videoOf } from './fixture';
import { expect, menu, open, stars, stored, test } from './test';

// 先頭に表示されるカード
const singing = newestFirst[0];
if (singing === undefined) throw new Error('fixture に歌唱データがない');
const video = videoOf(singing);
const title = shareTitle(singing);
// お気に入りは歌唱データのID（古い順の連番）で保存される
const id = data.singings.length - 1;

test('お気に入り登録がリロードとページ遷移の後も保持され、/favos に表示される', async ({ page }) => {
  await open(page, '/');
  await page.getByRole('button', { name: `${title}をお気に入り登録` }).click();
  const unfavo = page.getByRole('button', { name: `${title}をお気に入り解除` });
  await expect(unfavo).toBeVisible();
  await stored(page, 'favos').toBe(JSON.stringify([[id, true]]));

  await page.reload();
  await expect(unfavo).toBeVisible();

  await menu(page, 'Favorites');
  await expect(page).toHaveURL('/favos');
  await expect(page.getByRole('heading', { name: 'Favorite', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: '1', exact: true })).toBeVisible();
  await expect(stars(page)).toHaveCount(1);
  await expect(unfavo).toBeVisible();

  await page.reload();
  await expect(stars(page)).toHaveCount(1);
  await expect(unfavo).toBeVisible();

  await menu(page, 'Search');
  await expect(page).toHaveURL('/');
  await expect(unfavo).toBeVisible();

  // 解除も保持される
  await unfavo.click();
  await expect(unfavo).toHaveCount(0);
  await stored(page, 'favos').toBe(JSON.stringify([[id, false]]));
  await page.reload();
  await expect(page.getByRole('button', { name: `${title}をお気に入り登録` })).toBeVisible();
  await menu(page, 'Favorites');
  await expect(page.getByRole('heading', { name: '0', exact: true })).toBeVisible();
  await expect(stars(page)).toHaveCount(0);
});

test('サムネイルをクリックするとモーダルが開き、iframe の src とサイズが正しい', async ({ page, isMobile }) => {
  await open(page, '/');
  const iframe = page.locator(`iframe[title="${singing.video}"]`);
  await expect(iframe).toHaveCount(0);

  // サムネイルの上にクリックを受ける透明な要素が重なっている
  await page.getByAltText(`${singing.video}のサムネイル`).click({ force: true });
  await expect(iframe).toBeVisible();
  await expect(iframe).toHaveAttribute(
    'src',
    `https://www.youtube-nocookie.com/embed/${video.id}?start=${seconds(singing.start)}&autoplay=1`,
  );

  // md 以下は画面幅いっぱい、それより広ければ 70%。高さは 16:9
  const innerWidth = await page.evaluate(() => window.innerWidth);
  const width = isMobile ? innerWidth : innerWidth * 0.7;
  expect(Number(await iframe.getAttribute('width'))).toBeCloseTo(width, 5);
  expect(Number(await iframe.getAttribute('height'))).toBeCloseTo((width * 9) / 16, 5);

  await page.keyboard.press('Escape');
  await expect(iframe).toHaveCount(0);
});

test('サムネイルにホバーすると再生アイコンの色が変わる', async ({ page }) => {
  await open(page, '/');
  const thumbnail = page.getByAltText(`${singing.video}のサムネイル`);
  const icon = thumbnail.locator('xpath=..').locator('svg');

  await expect(icon).toHaveCSS('color', 'rgb(0, 0, 0)');
  await thumbnail.hover({ force: true });
  await expect(icon).toHaveCSS('color', 'rgb(255, 15, 26)');
});

test('コピーボタンでクリップボードに文言が入り、Copied! が表示される', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await open(page, '/');
  await expect(page.getByText('Copied!')).toHaveCount(0);

  await page.getByRole('button', { name: `${title}のリンクをコピー` }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'Copied!' })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(`${title} ${shareUrl(singing)}`);
});

test('Xのシェアボタンで開くURLに文言、URL、ハッシュタグが含まれる', async ({ page }) => {
  await open(page, '/');

  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: `${title}をXでシェア` }).click();
  const popup = await popupPromise;
  await popup.waitForURL(/^https:\/\/twitter\.com\/intent\/tweet/);

  const url = new URL(popup.url());
  expect(url.origin + url.pathname).toBe('https://twitter.com/intent/tweet');
  expect(url.searchParams.get('text')).toBe(title);
  expect(url.searchParams.get('url')).toBe(shareUrl(singing));
  expect(url.searchParams.get('hashtags')).toBe('ぽるうた,尾丸ポルカ');
});
