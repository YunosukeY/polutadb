export class Query {
  query: string;
  type: number;
  video: number;
  song: number;
  artist: number;

  constructor(qs: any) {
    this.query = qs.query == null ? '' : String(qs.query);
    this.type = qs.type == null ? -1 : Number(qs.type);
    this.video = qs.video == null ? -1 : Number(qs.video);
    this.song = qs.song == null ? -1 : Number(qs.song);
    this.artist = qs.artist == null ? -1 : Number(qs.artist);
  }

  toString() {
    return `query=${this.query}&type=${this.type}&video=${this.video}&song=${this.song}&artist=${this.artist}`;
  }

  equals(q: any) {
    if (q == this) return true;
    if (!(q instanceof Query)) return false;
    return (
      this.query === q.query &&
      this.type === q.type &&
      this.video === q.video &&
      this.song === q.song &&
      this.artist === q.artist
    );
  }
}
