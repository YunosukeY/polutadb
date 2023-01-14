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
  video: string;
  song: string;
  start: number;
  time: number; // 何回目か

  static counter = new Map<string, number>();

  constructor(id: number, video: string, song: string, start: number) {
    this.id = id;
    this.video = video;
    this.song = song;
    this.start = start;

    const oldCount = Singing.counter.get(song) ?? 0;
    this.time = oldCount + 1;
    Singing.counter.set(song, oldCount + 1);
  }
}
