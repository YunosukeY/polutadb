import { Query } from './query';
import { getArtist, getType } from '../data/utils';
import { Singing } from '../data/interfaces';
import { singings } from '../data/singings';
import { types, videos } from '../data/videos';
import { artists } from '../data/artists';
import { songs } from '../data/songs';

export function search(query: Query, sortedBy: number) {
  let tmpres: Singing[] = JSON.parse(JSON.stringify(singings));

  const normalizedQuery = query.query.toLowerCase();
  if (query.query !== '') {
    tmpres = tmpres.filter((singingInfo) => fullTextFilter(singingInfo, normalizedQuery));
  }

  if (query.video !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.video === videos[query.video]?.title);
  }
  if (query.song !== -1) {
    tmpres = tmpres.filter((singingInfo) => singingInfo.song === songs[query.song]?.title);
  }
  if (query.artist !== -1) {
    tmpres = tmpres.filter((singingInfo) => getArtist(singingInfo.song) === artists[query.artist]?.name);
  }
  if (query.type !== -1) {
    tmpres = tmpres.filter((singingInfo) => getType(singingInfo.video) === types[query.type]?.name);
  }

  tmpres.reverse();
  if (sortedBy === 1) {
    tmpres.sort(compBySongTitle);
  } else if (sortedBy === 2) {
    tmpres.sort(compByArtistName);
  }

  return tmpres;
}

function fullTextFilter(singing: Singing, query: string) {
  const song = singing.song.toLowerCase();
  const artist = getArtist(singing.song).toLowerCase();
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
  const xArtist = getArtist(x.song);
  const yArtist = getArtist(y.song);

  if (xArtist > yArtist) return 1;
  else if (xArtist < yArtist) return -1;
  else return 0;
}
