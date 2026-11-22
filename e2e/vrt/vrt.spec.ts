import type { Page } from '@playwright/test';
import { newestFirst, shareTitle } from '../fixture';
import { pages } from '../pages';
import { expect, test } from '../test';

// スクリーンショット比較（VRT）。挙動は同じまま見た目だけが崩れる更新を検出する。
// ベースラインは e2e/vrt/screenshots にあり、Playwright 公式のDockerイメージの中で撮る（README を参照）。
//
// 依存を変えていなければ1ピクセルも変わらないように、ブラウザ内の時計を最初から止めておき、
// 必要な分だけ手で進める。
// - カルーセルの自動再生（5秒ごと）: トップページでは、時計を合計5秒より手前までしか進めない
// - MUI の開閉（Drawer、Modal、Snackbar）と amCharts の描画アニメーション: 時計を進めて完了させる
// - CSSのトランジションとアニメーション: 無効にする（noTransition）
// データ、YouTube のサムネイル、Webフォントは E2E と同じく ../test.ts で差し替えている

const NOW = new Date('2026-01-01T00:00:00+09:00');

const first = newestFirst[0];
const second = newestFirst[1];
if (first === undefined || second === undefined) throw new Error('fixture に歌唱データがない');

const name = (path: string) => (path === '/' ? 'top' : path.slice(1));

// CSSのトランジションとアニメーション（MUI の開閉、リップル）は止めた時計と関係なく実時間で進むので、無効にする。
// toHaveScreenshot も撮る直前に最後の状態まで飛ばすが、拡大しながら現れる Snackbar の文字が
// 飛ばす前の状態で描画されたまま残り、数ピクセル変わることがあった
const noTransition = '*, *::before, *::after { transition: none !important; animation: none !important; }';

const open = async (page: Page, path: string) => {
  // install した時点から時計が進み始めるので、少し先の時刻で止める（過去の時刻では止められない）
  await page.clock.install({ time: NOW });
  await page.clock.pauseAt(new Date(NOW.getTime() + 60_000));
  await page.goto(path);
  await page.addStyleTag({ content: noTransition });
  const ready = pages.find((p) => p.path === path)?.ready;
  if (ready === undefined) throw new Error(`${path} は pages に無い`);
  await expect(page.getByRole(ready.role, { name: ready.name, exact: true })).toBeVisible();
  await settle(page);
};

/** 時計を進めて、タイマーと requestAnimationFrame で動くものを完了させ、画像の読み込みを待つ */
const settle = async (page: Page, ms = 1000) => {
  await page.clock.runFor(ms);
  await expect
    .poll(() => page.evaluate(() => Array.from(document.images).every((img) => img.complete && img.naturalWidth > 0)), {
      message: '画像がすべて読み込まれている',
    })
    .toBe(true);
};

/** クリックした場所にポインタが残って hover の見た目になるのを避ける */
const leave = (page: Page) => page.mouse.move(0, 0);

/**
 * ページ全体を撮る。固定表示のヘッダーはスクロール位置に写るので、先頭に戻してから撮る
 */
const expectFullPage = async (page: Page, file: string) => {
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(page).toHaveScreenshot(file, { fullPage: true });
};

for (const { path } of pages) {
  test(`${path}`, async ({ page }) => {
    await open(page, path);
    if (path === '/stats') {
      // 円グラフは別チャンクの読み込み後に作られる。作られてから、描画アニメーションの分だけ時計を進める
      await expect(page.locator('#artist-stats canvas').first()).toBeAttached();
      await expect(page.locator('#song-stats canvas').first()).toBeAttached();
      await settle(page, 5000);
    }
    await expectFullPage(page, `${name(path)}.png`);
  });
}

test('ドロワーを開いた状態', async ({ page }) => {
  await open(page, '/');
  await page.getByRole('button', { name: 'メニュー' }).click();
  await expect(page.getByRole('button', { name: 'Statistics' })).toBeVisible();
  await leave(page);
  await settle(page);
  await expect(page).toHaveScreenshot('top-drawer.png');
});

test('Old Release Notes を開いた状態', async ({ page }) => {
  await open(page, '/releases');
  await page.getByRole('heading', { name: 'Old Release Notes' }).click();
  await expect(page.getByText('・本サイトを公開しました')).toBeVisible();
  await leave(page);
  await settle(page);
  // 開くとページが非常に長くなる（過去のリリースノートすべて）ので、画面に入る範囲だけを撮る
  await expect(page).toHaveScreenshot('releases-old.png');
});

test('お気に入り登録済みのカード', async ({ page }) => {
  await open(page, '/');
  for (const singing of [first, second]) {
    await page.getByRole('button', { name: `${shareTitle(singing)}をお気に入り登録` }).click();
    await expect(page.getByRole('button', { name: `${shareTitle(singing)}をお気に入り解除` })).toBeVisible();
  }
  await leave(page);
  await settle(page);
  await expectFullPage(page, 'top-favorited.png');

  await page.getByRole('button', { name: 'メニュー' }).click();
  await page.getByRole('button', { name: 'Favorites', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Favorites', exact: true })).toBeVisible();
  await leave(page);
  await settle(page);
  await expectFullPage(page, 'favos-favorited.png');
});

test('動画モーダル', async ({ page }) => {
  await open(page, '/');
  // サムネイルの上にクリックを受ける透明な要素が重なっている
  await page.getByAltText(`${first.video}のサムネイル`).click({ force: true });
  await expect(page.locator(`iframe[title="${first.video}"]`)).toBeVisible();
  await leave(page);
  await settle(page);
  await expect(page).toHaveScreenshot('top-modal.png');
});

test('Copied! の表示', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await open(page, '/');
  await page.getByRole('button', { name: `${shareTitle(first)}のリンクをコピー` }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'Copied!' })).toBeVisible();
  await leave(page);
  await settle(page);
  await expect(page).toHaveScreenshot('top-copied.png');
});
