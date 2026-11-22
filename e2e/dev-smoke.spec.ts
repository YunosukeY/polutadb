import { pages } from './pages';
import { expect, test } from './test';

// next dev でしか出ない警告（React の開発時チェック、hydration の不一致など）を拾う。
// 既知の警告があれば test.use の allowedConsoleErrors に個別に入れ、対応するメジャー更新のイシューで解消して外す

// 初回アクセス時にコンパイルが走る
test.setTimeout(120_000);

for (const { path, ready } of pages) {
  test(`next dev で ${path} が console.error なしで開く`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole('button', { name: 'PolutaDB' })).toBeVisible({ timeout: 90_000 });
    await expect(page.getByRole(ready.role, { name: ready.name, exact: true })).toBeVisible();
  });
}
