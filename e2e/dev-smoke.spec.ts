import { pages } from './pages';
import { expect, test } from './test';

// next dev でしか出ない警告（React の開発時チェック、hydration の不一致など）を拾う。
// 既知の警告はここに個別に入れ、対応するメジャー更新のイシューで解消して外す
test.use({
  allowedConsoleErrors: [
    // Star（src/components/common/Result/ResultCards/ResultCard/Star）が styled に渡している
    // fontsize が svg まで届いている。結果のカードがあるページで出る
    /^Warning: Invalid DOM property `%s`\. Did you mean `%s`\?%s fontsize fontSize /,
  ],
});

// 初回アクセス時にコンパイルが走る
test.setTimeout(120_000);

for (const { path, ready } of pages) {
  test(`next dev で ${path} が console.error なしで開く`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole('button', { name: 'PolutaDB' })).toBeVisible({ timeout: 90_000 });
    await expect(page.getByRole(ready.role, { name: ready.name, exact: true })).toBeVisible();
  });
}
