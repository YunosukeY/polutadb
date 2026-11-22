import { defineConfig, devices } from '@playwright/test';

// E2E_TARGET=dev のときは next dev に対するスモークテストだけを実行する。
// E2E_TARGET=vrt のときはスクリーンショット比較（e2e/vrt）だけを実行する。
// 既定は本番ビルド（next build && next start）に対する E2E
const isDev = process.env.E2E_TARGET === 'dev';
const isVrt = process.env.E2E_TARGET === 'vrt';

// 文字の描画はOSで変わるので、スクリーンショットは Playwright 公式のDockerイメージの中でだけ撮る。
// 手元では yarn vrt（e2e/vrt/docker.sh）がそのコンテナを起動する
if (isVrt && process.platform !== 'linux') {
  throw new Error('スクリーンショット比較はDockerの中で実行する。yarn vrt を使う（README を参照）');
}

const testMatch = isDev ? 'dev-smoke.spec.ts' : isVrt ? 'vrt/*.spec.ts' : '*.spec.ts';

const fixturePort = 3199;
const appPort = isDev ? 3201 : 3200;
const appEnv = {
  DATA_URL: `http://localhost:${fixturePort}/`,
  NEXT_TELEMETRY_DISABLED: '1',
};

export default defineConfig({
  testDir: './e2e',
  testMatch,
  testIgnore: isDev ? [] : isVrt ? [] : ['dev-smoke.spec.ts', 'vrt/**'],
  // 撮影環境を固定しているので、OSやブラウザの名前は付けない
  snapshotPathTemplate: '{testDir}/vrt/screenshots/{projectName}/{arg}{ext}',
  // CIでは、ベースラインが無い画像を黙って作らずに失敗させる
  updateSnapshots: process.env.CI ? 'none' : 'missing',
  expect: {
    // ページ全体の撮影は、手元のエミュレーション（Apple Silicon 上の linux/amd64）だと既定の5秒を超えることがある
    timeout: isVrt ? 30_000 : 5_000,
    toHaveScreenshot: {
      // 1ピクセルでも異なれば失敗させる
      maxDiffPixels: 0,
      // 色の許容差。既定の 0.2 だとグレーの濃さが少し変わる程度の変化が通るので、0 にしている
      threshold: 0,
    },
  },
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
