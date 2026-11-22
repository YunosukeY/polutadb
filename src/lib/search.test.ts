import { Singing } from '../data/types';
import type { Form } from '../pages';
import type { DataAtom } from '../store/dataAtom';
import { Query } from './query';
import { search } from './search';

const types = [{ name: '歌枠' }, { name: 'その他' }];
const videos = [
  { id: 'v0', title: 'Morning Live', date: '2024/01/01', type: '歌枠' },
  { id: 'v1', title: 'Night Talk', date: '2024/01/02', type: 'その他' },
  { id: 'v2', title: 'Guitar Stream', date: '2024/01/03', type: '歌枠' },
];
const artists = [{ name: 'Xavier' }, { name: 'Yoko' }];
const songs = [
  { title: 'Banana', artist: 'Yoko' },
  { title: 'apple', artist: 'Xavier' },
  { title: 'Cherry', artist: '' },
  { title: 'Night Drive', artist: 'Xavier' },
];
// 古い順。id は配列のインデックス
const rawSingings: [video: string, song: string][] = [
  ['Morning Live', 'Banana'], // 0
  ['Morning Live', 'apple'], // 1
  ['Night Talk', 'Cherry'], // 2
  ['Night Talk', 'Banana'], // 3
  ['Guitar Stream', 'Night Drive'], // 4
  ['Guitar Stream', 'apple'], // 5
];

const getArtist = (song: string) => songs.find((s) => s.title === song)?.artist ?? '';
const getType = (video: string) => videos.find((v) => v.title === video)?.type;

let state: DataAtom;
beforeEach(() => {
  Singing.counter.clear();
  state = {
    types,
    videos,
    artists,
    songs,
    singings: rawSingings.map(([video, song], i) => new Singing(i, video, song, '0:00')),
  };
});

const noCondition: Form = { query: '', type: -1, video: -1, song: -1, artist: -1 };

// 検索結果を歌唱データの id の並びで返す
const ids = (form: Partial<Form>, sort = 0) =>
  search(new Query({ ...noCondition, ...form }), state, sort, getArtist, getType).map((s) => s.id);

describe('search', () => {
  test('条件がなければ全件を新しい順に返す', () => {
    expect(ids({})).toEqual([5, 4, 3, 2, 1, 0]);
  });

  test('歌唱データの内容（何回目かを含む）をそのまま返す', () => {
    expect(search(new Query({}), state, 0, getArtist, getType)[0]).toEqual({
      id: 5,
      video: 'Guitar Stream',
      song: 'apple',
      start: '0:00',
      time: 2,
    });
  });

  test('データが未取得なら空', () => {
    expect(search(new Query({}), {}, 0, getArtist, getType)).toEqual([]);
  });

  describe('全文検索', () => {
    test('曲名に一致する', () => {
      expect(ids({ query: 'Cherry' })).toEqual([2]);
    });

    test('アーティスト名に一致する', () => {
      expect(ids({ query: 'Yoko' })).toEqual([3, 0]);
    });

    test('動画名に一致する', () => {
      expect(ids({ query: 'Guitar' })).toEqual([5, 4]);
    });

    test('曲名・アーティスト名・動画名のいずれかに一致すればよい', () => {
      // 2, 3 は動画名（Night Talk）、4 は曲名（Night Drive）
      expect(ids({ query: 'Night' })).toEqual([4, 3, 2]);
    });

    test('部分一致で探す', () => {
      expect(ids({ query: 'nan' })).toEqual([3, 0]);
    });

    test.each([
      ['曲名', 'BANANA', [3, 0]],
      ['曲名（データ側が小文字）', 'APPLE', [5, 1]],
      ['アーティスト名', 'xavier', [5, 4, 1]],
      ['動画名', 'mORNING lIVE', [1, 0]],
    ])('%s の大文字小文字を区別しない', (_, query, expected) => {
      expect(ids({ query })).toEqual(expected);
    });

    test('どれにも一致しなければ空', () => {
      expect(ids({ query: 'zzz' })).toEqual([]);
    });
  });

  describe('絞り込み', () => {
    test('種類', () => {
      expect(ids({ type: 0 })).toEqual([5, 4, 1, 0]);
      expect(ids({ type: 1 })).toEqual([3, 2]);
    });

    test('動画', () => {
      expect(ids({ video: 1 })).toEqual([3, 2]);
    });

    test('曲', () => {
      expect(ids({ song: 0 })).toEqual([3, 0]);
    });

    test('アーティスト', () => {
      expect(ids({ artist: 0 })).toEqual([5, 4, 1]);
      expect(ids({ artist: 1 })).toEqual([3, 0]);
    });

    test('存在しないインデックスを指定すると空', () => {
      expect(ids({ type: 99 })).toEqual([]);
      expect(ids({ video: 99 })).toEqual([]);
      expect(ids({ song: 99 })).toEqual([]);
      expect(ids({ artist: 99 })).toEqual([]);
    });

    describe('組み合わせ（すべての条件を満たすものだけ）', () => {
      test('種類 + 曲', () => {
        expect(ids({ type: 0, song: 0 })).toEqual([0]);
      });

      test('種類 + アーティスト', () => {
        expect(ids({ type: 1, artist: 1 })).toEqual([3]);
      });

      test('動画 + アーティスト', () => {
        expect(ids({ video: 2, artist: 0 })).toEqual([5, 4]);
      });

      test('動画 + 曲', () => {
        expect(ids({ video: 0, song: 1 })).toEqual([1]);
      });

      test('全文検索 + 種類', () => {
        expect(ids({ query: 'night', type: 0 })).toEqual([4]);
      });

      test('全文検索 + 種類 + 動画 + 曲 + アーティスト', () => {
        expect(ids({ query: 'app', type: 0, video: 2, song: 1, artist: 0 })).toEqual([5]);
      });

      test('両立しない条件なら空', () => {
        expect(ids({ video: 0, song: 2 })).toEqual([]);
      });
    });
  });

  describe('ソート', () => {
    test('0: 時系列（新しい順）', () => {
      expect(ids({}, 0)).toEqual([5, 4, 3, 2, 1, 0]);
    });

    test('1: 曲名順。同じ曲は新しい順', () => {
      // 文字コード順なので、大文字（Banana, Cherry, Night Drive）が小文字（apple）より先
      expect(ids({}, 1)).toEqual([3, 0, 2, 4, 5, 1]);
    });

    test('2: アーティスト名順。同じアーティストは新しい順', () => {
      // アーティストなし（Cherry）、Xavier、Yoko の順
      expect(ids({}, 2)).toEqual([2, 5, 4, 1, 3, 0]);
    });

    test('絞り込んだ結果を並べ替える', () => {
      expect(ids({ type: 0 }, 1)).toEqual([0, 4, 5, 1]);
      expect(ids({ type: 0 }, 2)).toEqual([5, 4, 1, 0]);
    });
  });

  test('元の配列を変更しない', () => {
    const singings = state.singings ?? [];
    const before = [...singings];
    const snapshot = structuredClone(singings);

    for (const sort of [0, 1, 2]) {
      const result = search(new Query({ query: 'a' }), state, sort, getArtist, getType);
      const first = result[0];
      if (first !== undefined) first.song = 'changed';
    }

    // 並び順も、要素そのものも、要素の中身も変わっていない
    expect(state.singings).toHaveLength(before.length);
    state.singings?.forEach((s, i) => expect(s).toBe(before[i]));
    expect(structuredClone(state.singings)).toEqual(snapshot);
  });
});
