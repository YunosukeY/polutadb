import { Query } from './query';
import { useArtist, useType } from '../data/utils';
import { Singing } from '../data/interfaces';
import { AppState } from './AppState';

export function search(query: Query, state: AppState) {
  let tmpres: Singing[] = JSON.parse(JSON.stringify(state.singings ?? []));

  const normalizedQuery = query.query.toLowerCase();
  if (query.query !== '') {
    tmpres = tmpres.filter((singingInfo) => fullTextFilter(singingInfo, normalizedQuery));
  }

  if (query.video !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.video === state.videos?.[query.video]?.title);
  }
  if (query.song !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.song === state.songs?.[query.song]?.title);
  }
  if (query.artist !== -1) {
    tmpres = tmpres.filter((singingInfo) => useArtist(singingInfo.song) === state.artists?.[query.artist]?.name);
  }
  if (query.type !== -1) {
    tmpres = tmpres.filter((singingInfo) => useType(singingInfo.video) === state.types?.[query.type]?.name);
  }

  tmpres.reverse();
  if (state.sortedBy === 1) {
    tmpres.sort(compBySongTitle);
  } else if (state.sortedBy === 2) {
    tmpres.sort(compByArtistName);
  }

  return tmpres;
}

function fullTextFilter(singing: Singing, query: string) {
  const song = singing.song.toLowerCase();
  const artist = useArtist(singing.song).toLowerCase();
  const video = singing.video.toLowerCase();

  return song.indexOf(query) !== -1 || artist.indexOf(query) !== -1 || video.indexOf(query) !== -1;
}

function compBySongTitle(x: Singing, y: Singing) {
  const xTitle = x.song;
  const yTitle = y.song;

  if (xTitle > yTitle) return 1;
  else if (xTitle < yTitle) return -1;
  else return 0;
}

function compByArtistName(x: Singing, y: Singing) {
  const xArtist = useArtist(x.song);
  const yArtist = useArtist(y.song);

  if (xArtist > yArtist) return 1;
  else if (xArtist < yArtist) return -1;
  else return 0;
}
