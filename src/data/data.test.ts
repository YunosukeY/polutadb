import { fetchData } from './data';
import type { Data } from './types';

describe('data consistency', () => {
  let data: Data;
  beforeAll(async () => {
    data = await fetchData();
  }, 10_000);

  describe('unique constraint', () => {
    test('artists.name', () => {
      data.artists.forEach((a) => {
        const same = data.artists.filter((a2) => a2.name === a.name);
        if (same.length > 1) console.log(a);
        expect(same).toHaveLength(1);
      });
    }, 10_000);

    test('songs.title', () => {
      data.songs.forEach((s) => {
        const same = data.songs.filter((s2) => s2.title === s.title);
        if (same.length > 1) console.log(s);
        expect(same).toHaveLength(1);
      });
    }, 10_000);
  });

  describe('foreign key constraint', () => {
    test('types.name -> videos.type', () => {
      data.videos.forEach((v) => {
        const ref = data.types.find((t) => t.name === v.type);
        if (ref === undefined) console.log(v);
        expect(ref).not.toBeUndefined();
      });
    }, 10_000);

    test('artists.name -> song.artist', () => {
      data.songs.forEach((s) => {
        if (!s.artist) return;
        const ref = data.artists.find((a) => a.name === s.artist);
        if (ref === undefined) console.log(s);
        expect(ref).not.toBeUndefined();
      });
    }, 10_000);

    test('videos.title -> singings.video', () => {
      data.singings.forEach((s) => {
        const ref = data.videos.find((v) => v.title === s.video);
        if (ref === undefined) console.log(s);
        expect(ref).not.toBeUndefined();
      });
    }, 10_000);

    test('songs.title -> singings.song', () => {
      data.singings.forEach((s) => {
        const ref = data.songs.find((song) => song.title === s.song);
        if (ref === undefined) console.log(s);
        expect(ref).not.toBeUndefined();
      });
    }, 10_000);
  });
});
