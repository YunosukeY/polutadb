# ぽるうたデータベース

![CI](https://github.com/YunosukeY/poluta-db/workflows/CI/badge.svg?branch=master)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

PolutaDB（ぽるうたデータベース）は、ホロライブ所属の VTuber 尾丸ポルカさんの歌を検索することができる Web アプリです。
https://www.polutadb.com で公開されています。

## Requirement

- Node.js (v24)
- npm

## Usage

### To Serve in Development Mode

```
$ npm install
$ npm run dev
```

### To Serve in Production Mode

```
$ npm install
$ npm run build
$ npm start
```

### To Run Unit and Component Tests

```
$ npm test
```

- 単体テスト（`*.test.ts`）: ライブラリに依存しないロジック。
- コンポーネントのテスト（`*.test.tsx`）: 画面の仕様の細かいケースを React Testing Library と jsdom で確認します。ファイル先頭の `@jest-environment jsdom` で jsdom に切り替えます。
  - ページ（`src/pages`）のテストは `src/test/pages` に置きます。`src/pages` に置くと Next.js がページとしてビルドしてしまうためです。
  - 描画は共通ヘルパー（`src/test`）の `render` を使います。プロバイダ、状態の初期化（データ、`localStorage`、URL、画面幅）、`next/router` と `matchMedia` のモックをまとめてあり、テスト本体は Recoil のAPIを直接使いません。
  - データは E2E と同じフィクスチャ（`e2e/fixture`）を使います。
  - `console.error` と `console.warn` が出たテストは失敗します。既知の警告は `src/test/index.tsx` で個別に許可しています。
  - Next.js のルーティング、ビルド、レイアウト、canvas、カルーセルは対象外です（E2E と VRT で確認します）。

### To Run E2E Tests

本番ビルドを実ブラウザ（Playwright）で操作するテストです。データはフィクスチャ（`e2e/fixture/data.json`）を使い、外部への通信はテスト内ですべて差し替えます。

```
$ npx playwright install chromium
$ npm run e2e      # next build && next start に対して実行
$ npm run e2e:dev  # next dev に対するスモークテスト
```

本番データの整合性チェックは `npm run test:data` で実行します（CI では `data` ジョブ。Renovate のPRでは実行しません）。

### To Run Visual Regression Tests

挙動は同じまま見た目だけが崩れる変更を、スクリーンショットの比較（Playwright の `toHaveScreenshot`）で検出します。5ページと、ドロワー・動画モーダルなどの状態を、PC・モバイルで撮ります（`e2e/vrt/vrt.spec.ts`）。ベースラインの画像は `e2e/vrt/screenshots` にコミットしています。

文字の描画はOSによって変わるので、ベースラインの生成も比較も Playwright 公式のDockerイメージ（`mcr.microsoft.com/playwright`、linux/amd64）の中で行います。macOS で直接は実行しません。CI では `vrt` ジョブがそのコンテナで実行します。

```
$ npm run vrt         # Docker の中で比較する
$ npm run vrt:update  # Docker の中でベースラインを作り直す
```

1ピクセルでも異なれば失敗します。画像のサイズが変わった場合も失敗します。

#### 差分が出たとき

1. CI の `vrt` ジョブが失敗し、ログに失敗した画像と異なるピクセル数が出ます。
2. ジョブの成果物 `vrt-report` をダウンロードして `playwright-report/index.html` を開き、期待画像・実際の画像・差分画像を確認します（手元で実行した場合は `npx playwright show-report`）。
3. 意図した変化であれば、次のどちらかでベースラインを更新してコミットします。
   - 手元: `npm run vrt:update` を実行し、`e2e/vrt/screenshots` の変更をコミットする。
   - ワークフロー: GitHub の Actions で「Update VRT baselines」を、対象のブランチを選んで手動で起動する（`gh workflow run vrt-update.yaml --ref <ブランチ>`）。そのブランチの上で作り直してコミットするので、Renovate のブランチを手元に持ってこなくて済みます。

注意点:

- ワークフローが作ったコミットでは CI が起動しません（標準のトークンによるプッシュのため）。プッシュされた後、PR の画面などから CI を手動で再実行してください。
- イメージのバージョンは `@playwright/test` のバージョンに合わせます（`.github/workflows` の `container`。手元では `package.json` から決まります）。Playwright を更新するとブラウザとイメージが変わるので、ベースラインの作り直しが必要になることがあります。
- 画面を追加・変更したときは、`e2e/vrt/vrt.spec.ts` を直してベースラインも更新します。
