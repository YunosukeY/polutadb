import { Singing } from '../../data/types';
import { artistBorder, calcArtistStats, calcSongStats, songBorder } from './calc';

// counts の曲をそれぞれ指定回数だけ歌った歌唱データ
const singingsOf = (counts: { [song: string]: number }) => {
  const singings: Singing[] = [];
  Object.entries(counts).forEach(([song, count]) => {
    for (let i = 0; i < count; i++) {
      singings.push(new Singing(singings.length, '動画', song, '0:00'));
    }
  });
  return singings;
};

beforeEach(() => {
  Singing.counter.clear();
});

describe('calcArtistStats', () => {
  const artists = [{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }, { name: 'E' }];
  // 曲名 → アーティスト名。A は 2 曲に分かれている
  const artistOfSong: { [song: string]: string } = { a1: 'A', a2: 'A', b: 'B', c: 'C', d: 'D', x: '' };
  const getArtist = (song: string) => artistOfSong[song] ?? '';

  test('しきい値は 13 回', () => {
    expect(artistBorder).toBe(13);
  });

  test('しきい値を超えるアーティストを回数の降順に並べ、しきい値以下は「その他」に人数でまとめる', () => {
    // A: 14回（2曲の合計）、B: 13回（しきい値ちょうど）、C: 20回、D: 1回、E: 0回
    const singings = singingsOf({ a1: 10, b: 13, c: 20, a2: 4, d: 1 });
    expect(calcArtistStats(artists, singings, getArtist)).toEqual([
      { artist: 'C', count: 20 },
      { artist: 'A', count: 14 },
      { artist: 'その他（13回以下）', count: 3 },
    ]);
  });

  test('アーティストの一覧にない歌唱（アーティストなしの曲）は数えない', () => {
    const singings = singingsOf({ x: 30, c: 14 });
    expect(calcArtistStats(artists, singings, getArtist)).toEqual([
      { artist: 'C', count: 14 },
      { artist: 'その他（13回以下）', count: 4 },
    ]);
  });

  test('データが未取得なら「その他」が 0 件', () => {
    expect(calcArtistStats(undefined, undefined, getArtist)).toEqual([{ artist: 'その他（13回以下）', count: 0 }]);
  });
});

describe('calcSongStats', () => {
  const songs = ['a', 'b', 'c', 'd', 'e'].map((title) => ({ title, artist: '' }));

  test('しきい値は 9 回', () => {
    expect(songBorder).toBe(9);
  });

  test('しきい値を超える曲を回数の降順に並べ、しきい値以下は「その他」に曲数でまとめる', () => {
    // a: 10回、b: 9回（しきい値ちょうど）、c: 15回、d: 1回、e: 0回
    const singings = singingsOf({ a: 10, b: 9, c: 15, d: 1 });
    expect(calcSongStats(songs, singings)).toEqual([
      { song: 'c', count: 15 },
      { song: 'a', count: 10 },
      { song: 'その他（9回以下）', count: 3 },
    ]);
  });

  test('曲の一覧にない歌唱は数えない', () => {
    const singings = singingsOf({ x: 30, c: 10 });
    expect(calcSongStats(songs, singings)).toEqual([
      { song: 'c', count: 10 },
      { song: 'その他（9回以下）', count: 4 },
    ]);
  });

  test('データが未取得なら「その他」が 0 件', () => {
    expect(calcSongStats(undefined, undefined)).toEqual([{ song: 'その他（9回以下）', count: 0 }]);
  });
});
