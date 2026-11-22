// e2e/fixture/data.json を生成する。フィクスチャの形を変えるときはこのファイルを直して
// `node e2e/fixture/generate.mjs` を実行し、data.json も一緒にコミットする。
import { writeFileSync } from 'node:fs';

const pad = (n, len) => String(n).padStart(len, '0');

// 本番と同じ並び。useTypes（src/data/utils.ts）が「その他」のインデックスを 5 に決め打ちしている
const types = ['歌ってみた動画', 'ぽるうた（月1ライブ枠）', '歌枠', 'オリジナル曲', 'GB', 'その他', '3Dライブ'].map(
  (name) => ({ name }),
);

const artists = ['アーティストA', 'アーティストB', 'アーティストC', 'アーティストD'].map((name) => ({ name }));

// 曲10 はアーティストなし。アーティスト名順で先頭に来る
const songArtists = ['A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', ''];
const songs = songArtists.map((a, i) => ({
  title: `曲${pad(i + 1, 2)}`,
  artist: a === '' ? '' : `アーティスト${a}`,
}));

// src/components/Releases が videos をインデックス（最大 337）で参照するので、それより多く用意する
const VIDEO_COUNT = 340;
const firstDate = Date.UTC(2020, 8, 1);
const videos = Array.from({ length: VIDEO_COUNT }, (_, i) => {
  const d = new Date(firstDate + i * 24 * 60 * 60 * 1000);
  return {
    id: `fixture${pad(i, 4)}`,
    title: `テスト動画 ${pad(i, 3)}`,
    date: `${d.getUTCFullYear()}/${pad(d.getUTCMonth() + 1, 2)}/${pad(d.getUTCDate(), 2)}`,
    type: types[i % types.length].name,
  };
});

// PC（20件/ページ）で3ページ、モバイル（10件/ページ）で5ページになる件数。
// 1動画につき1歌唱で、日付順（= 配列順）に並ぶ。
// 3件に1件を 曲01 にして、Stats の「その他」の閾値（曲 9回、アーティスト 13回）を超えるものを作る
const SINGING_COUNT = 45;
const singings = Array.from({ length: SINGING_COUNT }, (_, k) => ({
  video: videos[k * 5].title,
  song: k % 3 === 0 ? songs[0].title : songs[1 + ((k + 1) % 9)].title,
  start: `${k % 2}:${pad(k, 2)}:${pad((k * 7) % 60, 2)}`,
}));

const data = { artists, videos, types, songs, singings };
writeFileSync(new URL('./data.json', import.meta.url), `${JSON.stringify(data, null, 2)}\n`);
