export class Query {
  query: string;
  genre: number;
  type: number;
  video: number;
  song: number;
  artist: number;
  withInst: boolean;
  aCappella: boolean;
  performance: boolean;
  full: boolean;
  onechorus: boolean;

  constructor(qs: any) {
    this.query = qs.query == null ? '' : String(qs.query);
    this.genre = qs.genre == null ? -1 : Number(qs.genre);
    this.type = qs.type == null ? -1 : Number(qs.type);
    this.video = qs.video == null ? -1 : Number(qs.video);
    this.song = qs.song == null ? -1 : Number(qs.song);
    this.artist = qs.artist == null ? -1 : Number(qs.artist);

    const isTrue = (x: any) => {
      if (x == null) return true;
      if (x === 'true') return true;
      if (x === 'false') return false;
      return x as boolean;
    };

    this.withInst = isTrue(qs.withInst);
    this.aCappella = isTrue(qs.aCappella);
    this.performance = isTrue(qs.performance);
    this.full = isTrue(qs.full);
    this.onechorus = isTrue(qs.onechorus);
  }

  toString() {
    return `query=${this.query}&genre=${this.genre}&type=${this.type}&video=${this.video}&song=${this.song}&artist=${this.artist}&withInst=${this.withInst}&aCappella=${this.aCappella}&performance=${this.performance}&full=${this.full}&onechorus=${this.onechorus}`;
  }

  equals(q: any) {
    if (q == this) return true;
    if (!(q instanceof Query)) return false;
    return (
      this.query === q.query &&
      this.genre === q.genre &&
      this.type === q.type &&
      this.video === q.video &&
      this.song === q.song &&
      this.artist === q.artist &&
      this.withInst === q.withInst &&
      this.aCappella === q.aCappella &&
      this.performance === q.performance &&
      this.full === q.full &&
      this.onechorus === q.onechorus
    );
  }
}
