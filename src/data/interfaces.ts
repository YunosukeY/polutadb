export interface Artist {
  name: string;
}

export interface Video {
  id: string;
  title: string;
  date: string;
  typeId: number;
}

export interface Type {
  name: string;
}

export interface Song {
  title: string;
  artistId: number;
  genreId: number;
}

export interface Genre {
  name: string;
}

export class Singing {
  id: number;
  videoId: number;
  songId: number;
  start: number;
  withInst: number; // 0: 伴奏あり, 1: アカペラ, 2: セルフ演奏
  full: boolean;

  constructor(id: number, videoId: number, songId: number, start: number, withInst = 0, full = true) {
    this.id = id;
    this.videoId = videoId;
    this.songId = songId;
    this.start = start;
    this.withInst = withInst;
    this.full = full;
  }
}
