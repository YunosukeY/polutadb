import queryString from 'query-string';

export class Query {
  query: string;
  genre: number;
  type: number;
  video: number;
  song: number;
  artist: number;
  withInst: boolean;
  aCappella: boolean;
  full: boolean;
  onechorus: boolean;

  constructor(qs: queryString.ParsedQuery<string>) {
    this.query = qs.query == null ? '' : String(qs.query);
    this.genre = qs.genre == null ? -1 : Number(qs.genre);
    this.type = qs.type == null ? -1 : Number(qs.type);
    this.video = qs.video == null ? -1 : Number(qs.video);
    this.song = qs.song == null ? -1 : Number(qs.song);
    this.artist = qs.artist == null ? -1 : Number(qs.artist);
    this.withInst = qs.withInst == null ? true : qs.withInst === 'true';
    this.aCappella = qs.aCappella == null ? true : qs.aCappella === 'true';
    this.full = qs.full == null ? true : qs.full === 'true';
    this.onechorus = qs.onechorus == null ? true : qs.onechorus === 'true';
  }

  toString() {
    return `query=${this.query}&genre=${this.genre}&type=${this.type}&video=${this.video}&song=${this.song}&artist=${this.artist}&withInst=${this.withInst}&aCappella=${this.aCappella}&full=${this.full}&onechorus=${this.onechorus}`;
  }
}
