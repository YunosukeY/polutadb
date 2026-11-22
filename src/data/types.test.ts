import { Singing } from './types';

describe('Singing', () => {
  // counter は static で、インスタンスを作るたびに加算される
  beforeEach(() => {
    Singing.counter.clear();
  });

  test('渡した値を保持する', () => {
    const s = new Singing(3, '動画', '曲', '1:23');
    expect(s).toMatchObject({ id: 3, video: '動画', song: '曲', start: '1:23' });
  });

  test('同じ曲が何回目かを time に数える', () => {
    const times = ['A', 'B', 'A', 'A', 'B'].map((song, i) => new Singing(i, '動画', song, '0:00').time);
    expect(times).toEqual([1, 1, 2, 3, 2]);
  });

  test('動画が違っても、同じ曲なら通しで数える', () => {
    expect(new Singing(0, '動画1', 'A', '0:00').time).toBe(1);
    expect(new Singing(1, '動画2', 'A', '0:00').time).toBe(2);
  });

  test('counter をリセットすると 1 回目から数え直す', () => {
    new Singing(0, '動画', 'A', '0:00');
    Singing.counter.clear();
    expect(new Singing(1, '動画', 'A', '0:00').time).toBe(1);
  });
});
