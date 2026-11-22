#!/bin/sh
# スクリーンショット比較（VRT）を、CIと同じ Playwright 公式のDockerイメージの中で実行する。
#   e2e/vrt/docker.sh                     比較する
#   e2e/vrt/docker.sh --update-snapshots  ベースライン（e2e/vrt/screenshots）を作り直す
# 引数はそのまま playwright test に渡す。
set -eu
cd "$(dirname "$0")/../.."

# イメージのバージョンは @playwright/test に合わせる（ブラウザがイメージに入っているため）。
# .github/workflows の container と同じものになる
version=$(node -p "require('./package.json').devDependencies['@playwright/test']")

# CIのランナーと同じ linux/amd64 で動かす（Apple Silicon ではエミュレーションになる）。
# node_modules と .next は手元（macOS）のものと混ざらないよう、コンテナ用のボリュームに置く。
# Node.js は CI（setup-node）と同じ 24 を入れる
exec docker run --rm --init --ipc=host --platform linux/amd64 \
  -v "$PWD":/work \
  -v polutadb-vrt-node_modules:/work/node_modules \
  -v polutadb-vrt-next:/work/.next \
  -w /work \
  -e E2E_TARGET=vrt \
  "mcr.microsoft.com/playwright:v${version}-noble" \
  sh -euc 'npm install --global --silent n && n --quiet 24 && hash -r && yarn install --pure-lockfile && yarn playwright test "$@"' sh "$@"
