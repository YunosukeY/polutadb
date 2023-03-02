import { fetchData } from './data';
import { Data } from './types';

describe('data consistency', () => {
  let data: Data;
  beforeAll(async () => {
    data = await fetchData();
  });

  describe('unique constraint', () => {
    it('artists.name', () => {
      data.artists.forEach((a) => {
        const same = data.artists.filter((a2) => a2.name === a.name);
        expect(same).toHaveLength(1);
      });
    });

    it('songs.title', () => {
      data.songs.forEach((s) => {
        const same = data.songs.filter((s2) => s2.title === s.title);
        expect(same).toHaveLength(1);
      });
    });
  });

  describe('foreign key constraint', () => {
    it('types.name -> videos.type', () => {
      data.videos.forEach((v) => {
        const ref = data.types.find((t) => t.name === v.type);
        expect(ref).not.toBeUndefined();
      });
    });

    it('artists.name -> song.artist', () => {
      data.songs.forEach((s) => {
        if (!s.artist) return;
        const ref = data.artists.find((a) => a.name === s.artist);
        expect(ref).not.toBeUndefined();
      });
    });

    it('videos.title -> singings.video', () => {
      data.singings.forEach((s) => {
        const ref = data.videos.find((v) => v.title === s.video);
        expect(ref).not.toBeUndefined();
      });
    });

    it('songs.title -> singings.song', () => {
      data.singings.forEach((s) => {
        const ref = data.songs.find((song) => song.title === s.song);
        expect(ref).not.toBeUndefined();
      });
    });
  });
});
