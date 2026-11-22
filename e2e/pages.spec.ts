import { data } from './fixture';
import { pages } from './pages';
import { expect, menu, open, resultCount, test, topUrl } from './test';

const lastVideo = data.videos[337];

for (const { path, ready } of pages) {
  test(`${path} がエラーなしで開く`, async ({ page }) => {
    await open(page, path);
    await expect(page.getByRole(ready.role, { name: ready.name, exact: true })).toBeVisible();
    await expect(page.getByText('undefined')).toHaveCount(0);
  });
}

test('title、lang、OGP、manifest、アイコンが出力されている', async ({ page, request }) => {
  await open(page, '/');

  await expect(page).toHaveTitle('ぽるうたデータベース｜尾丸ポルカさんの歌を検索！');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ja');

  const description = 'ホロライブ所属のVTuber 尾丸ポルカさんの歌（通称：ぽるうた）が検索できます';
  const metas = {
    'meta[name="viewport"]': 'width=device-width,initial-scale=1',
    'meta[name="twitter:card"]': 'summary_large_image',
    'meta[property="og:url"]': 'https://www.polutadb.com/',
    'meta[property="og:title"]': 'ぽるうたデータベース｜尾丸ポルカさんの歌を検索！',
    'meta[property="og:description"]': description,
    'meta[property="og:image"]': 'https://www.polutadb.com/card.png',
    'meta[name="Description"]': description,
    'meta[name="theme-color"]': '#ef5350',
  };
  for (const [selector, content] of Object.entries(metas)) {
    await expect(page.locator(selector), selector).toHaveAttribute('content', content);
  }

  const links = {
    'link[rel="icon"]': '/tent-b92731.png',
    'link[rel="apple-touch-icon"]': '/tent-f1646a.png',
    'link[rel="manifest"]': '/manifest.json',
  };
  for (const [selector, href] of Object.entries(links)) {
    await expect(page.locator(selector), selector).toHaveAttribute('href', href);
    expect((await request.get(href)).status(), href).toBe(200);
  }
  expect((await (await request.get('/manifest.json')).json()).short_name).toBe('PolutaDB');
});

test('/search は / に、/api/data は Apps Script にリダイレクトされる', async ({ request }) => {
  const search = await request.get('/search', { maxRedirects: 0 });
  expect(search.status()).toBe(308);
  expect(search.headers().location).toBe('/');

  const api = await request.get('/api/data', { maxRedirects: 0 });
  expect(api.status()).toBe(307);
  expect(api.headers().location).toBe(
    'https://script.google.com/macros/s/AKfycbw5PJ8ehZkqAgMuzs4NCLiZA9zNfqKY-ILVZAcoRBoL1sInlAKdntYS1yA4QttJHhTs/exec',
  );
});

test('ドロワーメニューから各ページに遷移でき、ヘッダーのタイトルで / に戻る', async ({ page }) => {
  await open(page, '/');
  await expect(resultCount(page)).toHaveText(String(data.singings.length));

  await menu(page, 'Favorites');
  await expect(page).toHaveURL('/favos');
  await expect(page.getByRole('heading', { name: 'Favorites', exact: true })).toBeVisible();
  // ドロワーが閉じている
  await expect(page.getByRole('button', { name: 'Statistics' })).toBeHidden();

  await menu(page, 'Statistics');
  await expect(page).toHaveURL('/stats');
  await expect(page.getByRole('heading', { name: `${data.artists.length} Artists` })).toBeVisible();

  await menu(page, 'Releases Notes');
  await expect(page).toHaveURL('/releases');
  await expect(page.getByRole('heading', { name: 'Latest Release Note' })).toBeVisible();

  await menu(page, 'About');
  await expect(page).toHaveURL('/about');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();

  await menu(page, 'Search');
  await expect(page).toHaveURL(topUrl);
  await expect(resultCount(page)).toHaveText(String(data.singings.length));

  await menu(page, 'About');
  await expect(page).toHaveURL('/about');
  await page.getByRole('button', { name: 'PolutaDB' }).click();
  await expect(page).toHaveURL(topUrl);
  await expect(resultCount(page)).toHaveText(String(data.singings.length));
});

test('カルーセルのドットが9個あり、ドットと自動再生でスライドが切り替わる', async ({ page }) => {
  // 自動再生（5秒）と切り替えのアニメーション（0.5秒）を時計で進める
  await page.clock.install();
  await open(page, '/');

  const dots = page.locator('.slick-dots li');
  const current = page.locator('.slick-slide.slick-current');
  const index = async () => Number(await current.getAttribute('data-index'));
  await expect(dots).toHaveCount(9);
  await expect(current).toHaveAttribute('data-index', '0');

  // 時計を止める。止めるまでに自動再生で進んでいることがあるので、以降は止めた時点からの相対で確認する
  await page.clock.pauseAt(new Date(Date.now() + 60_000));
  await page.clock.runFor(1000);
  const start = await index();

  const target = (start + 3) % 9;
  await dots.nth(target).getByRole('button').click();
  await page.clock.runFor(1000);
  await expect(current).toHaveAttribute('data-index', String(target));
  await expect(dots.nth(target)).toHaveClass(/slick-active/);

  await page.clock.runFor(6000);
  await expect(current).toHaveAttribute('data-index', String((target + 1) % 9));
});

test('Stats で2つの円グラフが canvas に描画され、他ページへ遷移してもエラーが出ない', async ({ page }) => {
  await open(page, '/stats');
  await expect(page.getByRole('heading', { name: `${data.artists.length} Artists` })).toBeVisible();
  await expect(page.getByRole('heading', { name: `${data.songs.length} Songs` })).toBeVisible();

  for (const id of ['artist-stats', 'song-stats']) {
    await expect
      .poll(
        () =>
          page.locator(`#${id} canvas`).evaluateAll((canvases) =>
            (canvases as HTMLCanvasElement[]).some((canvas) => {
              const pixels = canvas.getContext('2d')?.getImageData(0, 0, canvas.width, canvas.height).data;
              return pixels?.some((v, i) => i % 4 === 3 && v !== 0) ?? false;
            }),
          ),
        { message: `${id} に何か描画されている` },
      )
      .toBe(true);
  }

  // unmount 時に dispose される
  await menu(page, 'About');
  await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  await expect(page.locator('canvas')).toHaveCount(0);
  await menu(page, 'Statistics');
  await expect(page.locator('#artist-stats canvas').first()).toBeAttached();
});

test('Releases の Old Release Notes を開閉できる', async ({ page }) => {
  await open(page, '/releases');
  // 最新のリリースノートは videos をインデックスで参照している
  await expect(page.getByText(`・『${lastVideo?.title}』分を追加しました`)).toBeVisible();

  const toggle = page.getByRole('heading', { name: 'Old Release Notes' });
  const oldest = page.getByText('・本サイトを公開しました');
  await expect(oldest).toHaveCount(0);

  await toggle.click();
  await expect(oldest).toBeVisible();
  await expect(page.getByText('undefined')).toHaveCount(0);

  await toggle.click();
  await expect(oldest).toHaveCount(0);
});
