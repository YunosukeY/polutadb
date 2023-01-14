import { Query } from './query';
import { getArtist, getSong, getArtistId, getTypeId, getVideo } from '../data/utils';
import { Singing } from '../data/interfaces';
import { singings } from '../data/singings';

export function search(query: Query, sortedBy: number) {
  let tmpres: Singing[] = JSON.parse(JSON.stringify(singings));

  const normalizedQuery = query.query.toLowerCase();
  if (query.query !== '') {
    tmpres = tmpres.filter((singingInfo) => fullTextFilter(singingInfo, normalizedQuery));
  }

  if (query.video !== -1) tmpres = tmpres.filter((singingInfo) => singingInfo.videoId === query.video);
  if (query.song !== -1) tmpres = tmpres.filter((singingInfo) => singingInfo.songId === query.song);
  if (query.artist !== -1) tmpres = tmpres.filter((singingInfo) => getArtistId(singingInfo.songId) === query.artist);
  if (query.type !== -1) tmpres = tmpres.filter((singingInfo) => getTypeId(singingInfo.videoId) === query.type);

  tmpres.reverse();
  if (sortedBy === 1) {
    tmpres.sort(compBySongTitle);
  } else if (sortedBy === 2) {
    tmpres.sort(compByArtistName);
  }

  return tmpres;
}

function fullTextFilter(singing: Singing, query: string) {
  const song = getSong(singing.songId).toLowerCase();
  const artist = getArtist(singing.songId).toLowerCase();
  const video = getVideo(singing.videoId).toLowerCase();

  return song.indexOf(query) !== -1 || artist.indexOf(query) !== -1 || video.indexOf(query) !== -1;
}

function compBySongTitle(x: Singing, y: Singing) {
  const xTitle = getSong(x.songId);
  const yTitle = getSong(y.songId);

  if (xTitle > yTitle) return 1;
  else if (xTitle < yTitle) return -1;
  else return 0;
}

function compByArtistName(x: Singing, y: Singing) {
  const xArtist = getArtist(x.songId);
  const yArtist = getArtist(y.songId);

  if (xArtist > yArtist) return 1;
  else if (xArtist < yArtist) return -1;
  else return 0;
}
