import { artistOptions, parseTime, songOptions, typeOptions, videoOptions } from './utils';

describe('parseTime', () => {
  test.each([
    ['0:00', 0],
    ['0:05', 5],
    ['1:23', 83],
    ['12:34', 754],
  ])('m:ss %s は %d 秒', (s, expected) => {
    expect(parseTime(s)).toBe(expected);
  });

  test.each([
    ['1:00:00', 3600],
    ['1:02:03', 3723],
    ['10:59:59', 39599],
  ])('h:mm:ss %s は %d 秒', (s, expected) => {
    expect(parseTime(s)).toBe(expected);
  });
});

describe('typeOptions', () => {
  // 本番と同じく「その他」は 6 番目（インデックス 5）。typeOptions はこのインデックスを決め打ちしている
  const types = ['歌枠', 'ASMR', 'ゲーム', '雑談', 'コラボ', 'その他'].map((name) => ({ name }));

  test('名前順に並べ、「その他」を最後に置く。i は元の配列のインデックス', () => {
    expect(typeOptions(types)).toEqual([
      { name: 'ASMR', i: 1 },
      { name: 'ゲーム', i: 2 },
      { name: 'コラボ', i: 4 },
      { name: '歌枠', i: 0 },
      { name: '雑談', i: 3 },
      { name: 'その他', i: 5 },
    ]);
  });

  test('元の配列を変更しない', () => {
    const before = structuredClone(types);
    typeOptions(types);
    expect(types).toEqual(before);
  });

  test('データが未取得でも「その他」だけは返す', () => {
    expect(typeOptions(undefined)).toEqual([{ name: 'その他', i: 5 }]);
  });
});

describe('videoOptions', () => {
  const video = (title: string, date: string) => ({ id: `id-${title}`, title, date, type: '歌枠' });

  test('日付の新しい順に並べる。i は元の配列のインデックス', () => {
    const videos = [video('A', '2023/01/01'), video('B', '2024/05/05'), video('C', '2022/12/31')];
    expect(videoOptions(videos)).toEqual([
      { date: '2024/05/05', title: 'B', i: 1 },
      { date: '2023/01/01', title: 'A', i: 0 },
      { date: '2022/12/31', title: 'C', i: 2 },
    ]);
  });

  test('同じ日付なら動画名の降順に並べる', () => {
    const videos = [video('B', '2024/05/05'), video('C', '2024/05/05'), video('A', '2024/05/05')];
    expect(videoOptions(videos).map((v) => v.title)).toEqual(['C', 'B', 'A']);
  });

  test('元の配列を変更しない', () => {
    const videos = [video('A', '2023/01/01'), video('B', '2024/05/05')];
    const before = structuredClone(videos);
    videoOptions(videos);
    expect(videos).toEqual(before);
  });

  test('データが未取得なら空', () => {
    expect(videoOptions(undefined)).toEqual([]);
  });
});

describe('songOptions', () => {
  test('「曲名（アーティスト）」の表記で、表記順に並べる。i は元の配列のインデックス', () => {
    const songs = [
      { title: 'b', artist: 'X' },
      { title: 'c', artist: 'Y' },
      { title: 'a', artist: 'Z' },
    ];
    expect(songOptions(songs)).toEqual([
      { title: 'a（Z）', i: 2 },
      { title: 'b（X）', i: 0 },
      { title: 'c（Y）', i: 1 },
    ]);
  });

  test('アーティストが空の曲は曲名だけにする', () => {
    expect(songOptions([{ title: 'a', artist: '' }])).toEqual([{ title: 'a', i: 0 }]);
  });

  test('データが未取得なら空', () => {
    expect(songOptions(undefined)).toEqual([]);
  });
});

describe('artistOptions', () => {
  test('名前順に並べる。i は元の配列のインデックス', () => {
    const artists = [{ name: 'b' }, { name: 'c' }, { name: 'a' }];
    expect(artistOptions(artists)).toEqual([
      { name: 'a', i: 2 },
      { name: 'b', i: 0 },
      { name: 'c', i: 1 },
    ]);
  });

  test('データが未取得なら空', () => {
    expect(artistOptions(undefined)).toEqual([]);
  });
});
