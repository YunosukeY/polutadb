export type Artist = {
  name: string;
};

export type Video = {
  id: string;
  title: string;
  date: string;
  type: string;
};

export type Type = {
  name: string;
};

export type Song = {
  title: string;
  artist: string | undefined;
};

export class Singing {
  id: number;
  video: string;
  song: string;
  start: string;
  time: number; // 何回目か

  static counter = new Map<string, number>();

  constructor(id: number, video: string, song: string, start: string) {
    this.id = id;
    this.video = video;
    this.song = song;
    this.start = start;

    const oldCount = Singing.counter.get(song) ?? 0;
    this.time = oldCount + 1;
    Singing.counter.set(song, oldCount + 1);
  }
}
