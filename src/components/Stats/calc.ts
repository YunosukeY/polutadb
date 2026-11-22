import type { Artist, Singing, Song } from '../../data/types';

// この回数以下のものは「その他」にまとめる
export const artistBorder = 13;
export const songBorder = 9;

export function calcArtistStats(
  artists: Artist[] | undefined,
  singings: Singing[] | undefined,
  getArtist: (song: string) => string,
) {
  const border = artistBorder;

  const data: { [index: string]: number } = {};
  artists?.forEach((artist) => (data[artist.name] = 0));
  singings?.forEach((singing) => {
    const a = getArtist(singing.song);
    if (data[a] !== undefined) {
      data[a]++;
    }
  });
  // その他の計算
  let others = 0;
  artists?.forEach((artist) => {
    const count = data[artist.name];
    if (count !== undefined && count <= border) {
      others++;
    }
  });

  let res: { artist: string; count: number }[] = [];
  artists?.forEach((artist) => {
    const count = data[artist.name];
    if (count !== undefined && count > border) {
      res.push({ artist: artist.name, count });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ artist: `その他（${border}回以下）`, count: others });

  return res;
}

export function calcSongStats(songs: Song[] | undefined, singings: Singing[] | undefined) {
  const border = songBorder;

  const data: { [index: string]: number } = {};
  songs?.forEach((song) => (data[song.title] = 0));
  singings?.forEach((singing) => {
    const s = singing.song;
    if (data[s] !== undefined) {
      data[s]++;
    }
  });
  // その他の計算
  let others = 0;
  songs?.forEach((song) => {
    const count = data[song.title];
    if (count !== undefined && count <= border) {
      others++;
    }
  });

  let res: { song: string; count: number }[] = [];
  songs?.forEach((song) => {
    const count = data[song.title];
    if (count !== undefined && count > border) {
      res.push({ song: song.title, count });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ song: `その他（${border}回以下）`, count: others });

  return res;
}
