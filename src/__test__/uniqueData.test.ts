import { songs, artists } from '../app/data';

describe('データに重複がないか', () => {
  test('曲名', () => {
    const songNames = Array<string>();
    songs.forEach(song => songNames.push(song.title));

    let diff = Array<string>();
    songNames.forEach(name => {
      if (songNames.filter((tmp => { return tmp == name; })).length > 1)
        diff.push(name);
    })
    diff = Array.from(new Set(diff));
    expect(diff).toEqual(Array<string>());
  });

  test('アーティスト名', () => {
    const artistNames = Array<string>();
    artists.forEach(artist => artistNames.push(artist.name));

    let diff = Array<string>();
    artistNames.forEach(name => {
      if (artistNames.filter((tmp => { return tmp == name; })).length > 1)
        diff.push(name);
    })
    diff = Array.from(new Set(diff));
    expect(diff).toEqual(Array<string>());
  });
});
