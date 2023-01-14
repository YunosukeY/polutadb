export interface Artist {
  name: string;
}

export interface Video {
  id: string;
  title: string;
  date: string;
  type: string;
}

export interface Type {
  name: string;
}

export interface Song {
  title: string;
  artist: string | undefined;
}

export class Singing {
  id: number;
  videoId: number;
  songId: number;
  start: number;
  time: number; // 何回目か

  static counter = new Map<number, number>();

  constructor(id: number, videoId: number, songId: number, start: number) {
    this.id = id;
    this.videoId = videoId;
    this.songId = songId;
    this.start = start;

    const oldCount = Singing.counter.get(songId) ?? 0;
    this.time = oldCount + 1;
    Singing.counter.set(songId, oldCount + 1);
  }
}
