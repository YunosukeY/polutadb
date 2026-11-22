import type { Data, RawSinging } from '../../src/data/types';
import json from './data.json';

export const data: Data = json;

const find = <T>(list: T[], pred: (v: T) => boolean, what: string): T => {
  const found = list.find(pred);
  if (found === undefined) throw new Error(`fixture: ${what} が見つからない`);
  return found;
};

export const videoOf = (s: RawSinging) => find(data.videos, (v) => v.title === s.video, s.video);
export const artistOf = (s: RawSinging) => find(data.songs, (v) => v.title === s.song, s.song).artist;
export const typeIndex = (name: string) => {
  const i = data.types.findIndex((t) => t.name === name);
  if (i === -1) throw new Error(`fixture: type ${name} が見つからない`);
  return i;
};

// 画面の「時系列順」と同じ、新しい順の歌唱データ。data.json の singings は古い順に並べてある
export const newestFirst: RawSinging[] = [...data.singings].reverse();

export const seconds = (start: string) => start.split(':').reduce((t, v) => t * 60 + Number(v), 0);

// シェアやコピー、aria-label に使われる文言（ShareButtons、Star）
export const shareTitle = (s: RawSinging) => `『${s.video}』より『${s.song}』 / ${artistOf(s)}`;
export const shareUrl = (s: RawSinging) => `https://youtu.be/${videoOf(s).id}?t=${seconds(s.start)}`;
