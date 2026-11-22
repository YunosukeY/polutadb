import { type Page, test as base, expect } from '@playwright/test';

// 外部への通信はすべてここで止めて、代わりの応答を返す。
// ここに無い外部ホストへの通信が発生したらテストを失敗させる
const thumbnail =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720"><rect width="1280" height="720" fill="#ccc"/></svg>';
const stubs: { [host: string]: { contentType: string; body: string } } = {
  'img.youtube.com': { contentType: 'image/svg+xml', body: thumbnail },
  'fonts.googleapis.com': { contentType: 'text/css', body: '' },
  // next build が Google Fonts の CSS をHTMLに埋め込むので、フォント本体の取得が発生する
  'fonts.gstatic.com': { contentType: 'font/woff', body: '' },
  'www.googletagmanager.com': { contentType: 'application/javascript', body: '' },
  'www.youtube-nocookie.com': { contentType: 'text/html', body: '<!doctype html><title>stub</title>' },
  'twitter.com': { contentType: 'text/html', body: '<!doctype html><title>stub</title>' },
};

type Fixtures = {
  /** console.error として許可するメッセージ。既知の警告だけを個別に入れる */
  allowedConsoleErrors: RegExp[];
  guard: undefined;
};

export const test = base.extend<Fixtures>({
  allowedConsoleErrors: [[], { option: true }],

  guard: [
    async ({ context, baseURL, allowedConsoleErrors }, use) => {
      const errors: string[] = [];
      const unexpectedRequests: string[] = [];
      const appOrigin = new URL(baseURL ?? '').origin;

      await context.route(
        (url) => url.origin !== appOrigin,
        async (route) => {
          const url = new URL(route.request().url());
          const stub = stubs[url.hostname];
          if (stub === undefined) {
            unexpectedRequests.push(url.href);
            await route.abort();
            return;
          }
          await route.fulfill({ status: 200, ...stub });
        },
      );

      const watch = (page: Page) => {
        page.on('pageerror', (e) => errors.push(`pageerror: ${e.stack ?? e.message}`));
        page.on('console', (msg) => {
          if (msg.type() !== 'error') return;
          const text = msg.text();
          if (allowedConsoleErrors.some((re) => re.test(text))) return;
          errors.push(`console.error: ${text}`);
        });
      };
      context.pages().forEach(watch);
      context.on('page', watch);

      await use(undefined);

      expect(unexpectedRequests, '想定していない外部への通信').toEqual([]);
      expect(errors, 'console.error / pageerror').toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };

/** Layout が ssr: false なので、クライアントで描画されるまで待つ */
export const open = async (page: Page, url: string) => {
  await page.goto(url);
  await expect(page.getByRole('button', { name: 'PolutaDB' })).toBeVisible();
};

/** トップページのURL。表示して300ms後にクエリが付く（topSettled を参照） */
export const topUrl = /^[^?]*\/(\?query=[^/]*)?$/;

/**
 * トップページは表示の300ms後に、全文検索のデバウンスが空の入力で一度発火し、
 * URLを `/?query=&type=-1&...` に書き換えてページ番号を1に戻す。
 * その前に操作すると巻き戻されるので、トップページを開いたらこれを待ってから操作する
 */
export const topSettled = async (page: Page) => {
  await expect(page.getByRole('heading', { name: 'Results' })).toBeVisible();
  await expect.poll(() => new URL(page.url()).searchParams.has('artist')).toBe(true);
};

export const menu = async (page: Page, item: string) => {
  await page.getByRole('button', { name: 'メニュー' }).click();
  await page.getByRole('button', { name: item, exact: true }).click();
};

/** 結果のカードの数。カードごとに1つあるお気に入りボタンで数える */
export const stars = (page: Page) => page.getByRole('button', { name: /を(お気に入り登録|お気に入り解除)$/ });

/** 結果のカードに表示されている曲名（『曲01』の形） */
export const songHeadings = (page: Page) => page.getByRole('heading', { name: /^『.*』$/ });

export const resultCount = (page: Page) => page.getByRole('heading', { name: /^\d+$/ });
