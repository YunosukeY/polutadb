import { defineConfig, devices } from '@playwright/test';

// E2E_TARGET=dev のときは next dev に対するスモークテストだけを実行する。
// 既定は本番ビルド（next build && next start）に対する E2E
const isDev = process.env.E2E_TARGET === 'dev';

const fixturePort = 3199;
const appPort = isDev ? 3201 : 3200;
const appEnv = {
  DATA_URL: `http://localhost:${fixturePort}/`,
  NEXT_TELEMETRY_DISABLED: '1',
};

export default defineConfig({
  testDir: './e2e',
  testMatch: isDev ? 'dev-smoke.spec.ts' : '*.spec.ts',
  testIgnore: isDev ? [] : 'dev-smoke.spec.ts',
  outputDir: 'test-results',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // 再試行で通るテストは依存更新の安全網にならないので、再試行しない
  retries: 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list'], ['html', { open: 'never' }]],
  use: {
    // gtag は hostname が localhost のとき送信しない（src/pages/_app.tsx、_document.tsx）
    baseURL: `http://localhost:${appPort}`,
    locale: 'ja-JP',
    timezoneId: 'Asia/Tokyo',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'pc',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
    {
      name: 'mobile',
      use: { ...devices['Pixel 7'] },
    },
  ],
  // 上から順に起動する。ビルド時の getStaticProps がフィクスチャを取得するので、先にフィクスチャのサーバーを立てる
  webServer: [
    {
      command: 'node e2e/fixture/server.mjs',
      url: `http://localhost:${fixturePort}/`,
      env: { FIXTURE_PORT: String(fixturePort) },
      reuseExistingServer: false,
    },
    {
      command: isDev ? `yarn dev -p ${appPort}` : `yarn build && yarn start -p ${appPort}`,
      url: `http://localhost:${appPort}/`,
      env: appEnv,
      timeout: 180_000,
      reuseExistingServer: false,
      stdout: 'pipe',
    },
  ],
});
