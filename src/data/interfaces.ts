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
}

export class Singing {
  id: number;
  videoId: number;
  songId: number;
  start: number;
  withInst: number; // 0: 伴奏あり, 1: アカペラ, 2: セルフ演奏
  full: boolean;
  time: number; // 何回目か

  static counter = new Map<number, number>();

  constructor(id: number, videoId: number, songId: number, start: number, withInst = 0, full = true) {
    this.id = id;
    this.videoId = videoId;
    this.songId = songId;
    this.start = start;
    this.withInst = withInst;
    this.full = full;

    const oldCount = Singing.counter.get(songId) ?? 0;
    this.time = oldCount + 1;
    Singing.counter.set(songId, oldCount + 1);
  }
}
