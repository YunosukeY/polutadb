import type { Singing } from '../data/types';
import { useGetArtist, useGetType } from '../data/utils';
import type { DataAtom } from '../store/dataAtom';
import type { Query } from './query';

export function useSearch(query: Query, state: DataAtom, sort: number) {
  const getArtist = useGetArtist();
  const getType = useGetType();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let tmpres: Singing[] = JSON.parse(JSON.stringify(state.singings ?? []));

  const normalizedQuery = query.query.toLowerCase();
  if (query.query !== '') {
    tmpres = tmpres.filter((singingInfo) => fullTextFilter(singingInfo, normalizedQuery, getArtist));
  }

  if (query.video !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.video === state.videos?.[query.video]?.title);
  }
  if (query.song !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.song === state.songs?.[query.song]?.title);
  }
  if (query.artist !== -1) {
    tmpres = tmpres.filter((singingInfo) => getArtist(singingInfo.song) === state.artists?.[query.artist]?.name);
  }
  if (query.type !== -1) {
    tmpres = tmpres.filter((singingInfo) => getType(singingInfo.video) === state.types?.[query.type]?.name);
  }

  tmpres.reverse();
  if (sort === 1) {
    tmpres.sort(compBySongTitle);
  } else if (sort === 2) {
    tmpres.sort(compByArtistName(getArtist));
  }

  return tmpres;
}

function fullTextFilter(singing: Singing, query: string, getArtist: (song: string) => string) {
  const song = singing.song.toLowerCase();
  const artist = getArtist(singing.song).toLowerCase();
  const video = singing.video.toLowerCase();

  return song.includes(query) || artist.includes(query) || video.includes(query);
}

function compBySongTitle(x: Singing, y: Singing) {
  const xTitle = x.song;
  const yTitle = y.song;

  if (xTitle > yTitle) return 1;
  else if (xTitle < yTitle) return -1;
  else return 0;
}

const compByArtistName = (getArtist: (song: string) => string) => (x: Singing, y: Singing) => {
  const xArtist = getArtist(x.song);
  const yArtist = getArtist(y.song);

  if (xArtist > yArtist) return 1;
  else if (xArtist < yArtist) return -1;
  else return 0;
};
