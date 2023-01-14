import { videos, types } from './videos';
import { artists } from './artists';
import { songs } from './songs';

export function getTypes() {
  let typeNames: { name: string; i: number }[] = [];
  types.forEach((type, i) => {
    if (type.name !== 'その他') {
      typeNames.push({ name: type.name, i: i });
    }
  });
  typeNames = typeNames.sort((a, b) => (a.name > b.name ? 1 : -1));
  typeNames.push({ name: 'その他', i: 5 });
  return typeNames;
}

export function getVideos() {
  // データは五十音順になっていないので，ソートしてから選択肢に追加する
  let videoNames: { date: string; title: string; i: number }[] = [];
  videos.forEach((video, i) => videoNames.push({ date: video.date, title: video.title, i: i }));
  videoNames = videoNames.sort((a, b) => {
    if (a.date > b.date) return -1;
    else if (a.date < b.date) return 1;
    else return a.title > b.title ? -1 : 1;
  });
  return videoNames;
}

export function getSongs() {
  let songNames: { title: string; i: number }[] = [];
  songs.forEach((song, i) => {
    const artist = getArtist(i);
    if (artist === '') {
      songNames.push({ title: song.title, i: i });
    } else {
      songNames.push({ title: `${song.title}（${artist}）`, i: i });
    }
  });
  songNames = songNames.sort((a, b) => (a.title > b.title ? 1 : -1));
  return songNames;
}

export function getArtists() {
  let artistNames: { name: string; i: number }[] = [];
  artists.forEach((artist, i) => artistNames.push({ name: artist.name, i: i }));
  artistNames = artistNames.sort((a, b) => (a.name > b.name ? 1 : -1));
  return artistNames;
}

export function getUrl(videoId: number) {
  return videos[videoId].id;
}

export function getArtist(songId: number) {
  const artist = songs[songId].artist;
  return artist === undefined ? '' : artist;
}

export function getSong(songId: number) {
  return songs[songId].title;
}

export function getType(videoId: number) {
  return videos[videoId].type;
}

export function getVideo(videoId: number) {
  return videos[videoId].title;
}

export const getVideoId = (videoId: number) => videos[videoId].id;
