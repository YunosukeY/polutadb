import { Query } from './query';

describe('Query', () => {
  test('未指定の項目は既定値（文字列は空、数値は -1）になる', () => {
    const q = new Query({});
    expect(q.query).toBe('');
    expect(q.type).toBe(-1);
    expect(q.video).toBe(-1);
    expect(q.song).toBe(-1);
    expect(q.artist).toBe(-1);
  });

  test('URLのクエリ（文字列）を数値に変換する', () => {
    const q = new Query({ query: 'abc', type: '0', video: '12', song: '3', artist: '45' });
    expect(q.query).toBe('abc');
    expect(q.type).toBe(0);
    expect(q.video).toBe(12);
    expect(q.song).toBe(3);
    expect(q.artist).toBe(45);
  });

  test('一部だけ指定されたときは、残りが既定値になる', () => {
    const q = new Query({ song: '7' });
    expect(q.asForm()).toEqual({ query: '', type: -1, video: -1, song: 7, artist: -1 });
  });

  test('フォームの値をそのまま受け取る', () => {
    const form = { query: 'abc', type: 1, video: 2, song: 3, artist: 4 };
    expect(new Query(form).asForm()).toEqual(form);
  });

  test('toString はクエリ文字列の形になる', () => {
    expect(new Query({}).toString()).toBe('query=&type=-1&video=-1&song=-1&artist=-1');
    expect(new Query({ query: 'abc', type: '1', video: '2', song: '3', artist: '4' }).toString()).toBe(
      'query=abc&type=1&video=2&song=3&artist=4',
    );
  });

  describe('equals', () => {
    const base = { query: 'abc', type: 1, video: 2, song: 3, artist: 4 };

    test('自分自身と等しい', () => {
      const q = new Query(base);
      expect(q.equals(q)).toBe(true);
    });

    test('すべての項目が同じなら等しい', () => {
      expect(new Query(base).equals(new Query({ ...base }))).toBe(true);
      // URL由来（文字列）とフォーム由来（数値）でも、変換後が同じなら等しい
      expect(new Query(base).equals(new Query({ query: 'abc', type: '1', video: '2', song: '3', artist: '4' }))).toBe(
        true,
      );
    });

    test.each([
      ['query', { query: 'abd' }],
      ['type', { type: 0 }],
      ['video', { video: 0 }],
      ['song', { song: 0 }],
      ['artist', { artist: 0 }],
    ])('%s が違えば等しくない', (_, diff) => {
      expect(new Query(base).equals(new Query({ ...base, ...diff }))).toBe(false);
    });

    test('Query 以外とは等しくない', () => {
      const q = new Query(base);
      expect(q.equals(q.asForm())).toBe(false);
      expect(q.equals(null)).toBe(false);
      expect(q.equals(undefined)).toBe(false);
    });
  });

  test('asForm は変更しても元の Query に影響しないオブジェクトを返す', () => {
    const q = new Query({ query: 'abc' });
    const form = q.asForm();
    form.query = 'changed';
    expect(q.query).toBe('abc');
  });
});
