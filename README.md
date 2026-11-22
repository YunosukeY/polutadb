# ぽるうたデータベース

![CI](https://github.com/YunosukeY/poluta-db/workflows/CI/badge.svg?branch=master)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

PolutaDB（ぽるうたデータベース）は、ホロライブ所属の VTuber 尾丸ポルカさんの歌を検索することができる Web アプリです。
https://www.polutadb.com で公開されています。

## Requirement

- Node.js (v24)
- yarn

## Usage

### To Serve in Development Mode

```
$ yarn install
$ yarn dev
```

### To Serve in Production Mode

```
$ yarn install
$ yarn build
$ yarn start
```

### To Run E2E Tests

本番ビルドを実ブラウザ（Playwright）で操作するテストです。データはフィクスチャ（`e2e/fixture/data.json`）を使い、外部への通信はテスト内ですべて差し替えます。

```
$ yarn playwright install chromium
$ yarn e2e      # next build && next start に対して実行
$ yarn e2e:dev  # next dev に対するスモークテスト
```

本番データの整合性チェックは `yarn test:data` で実行します（CI では `data` ジョブ。Renovate のPRでは実行しません）。
