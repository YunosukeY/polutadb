interface Video {
  id: string;
  title: string;
  date: string
}

interface Song {
  title: string;
  artistId: number;
  genreId: number
}

interface Genre {
  name: string
}

interface Artist {
  name: string
}

export interface Singing {
  videoId: number;
  songId: number;
  start: string
}

const videos: Video[] = [
  {
    'id': 'PuFk_XfNXiM',
    'title': 'POLKA♡SUMMER♡LIVE☆2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    'date': '2020/08/30'
  },
]

const songs: Song[] = [
  { 'title': 'HOLOGRAM CIRCUS', 'artistId': 0, 'genreId': 0 },
  { 'title': 'only my railgun', 'artistId': 1, 'genreId': 1 },
  { 'title': 'Unmei♪wa♪Endless!', 'artistId': 2, 'genreId': 1 },
  { 'title': 'Chai Maxx', 'artistId': 3, 'genreId': 2 },
  { 'title': 'おジャ魔女カーニバル!!', 'artistId': 4, 'genreId': 1 },
  { 'title': '空色デイズ', 'artistId': 5, 'genreId': 1 },
  { 'title': 'ようこそジャパリパークへ', 'artistId': 6, 'genreId': 1 },
]

const genres: Genre[] = [
  { 'name': 'オリジナル' },
  { 'name': 'アニソン' },
  { 'name': 'アイドル' },
]

const artists: Artist[] = [
  { 'name': '尾丸ポルカ' },
  { 'name': 'fripSide' },
  { 'name': '放課後ティータイム' },
  { 'name': 'ももいろクローバー' },
  { 'name': 'MAHO堂' },
  { 'name': '中川翔子' },
  { 'name': 'どうぶつビスケッツ×PPP' },
]

export const singings: Singing[] = [
  { 'videoId': 0, 'songId': 0, 'start': '272' },
  { 'videoId': 0, 'songId': 1, 'start': '377' },
  { 'videoId': 0, 'songId': 2, 'start': '774' },
  { 'videoId': 0, 'songId': 3, 'start': '1064' },
  { 'videoId': 0, 'songId': 4, 'start': '1410' },
  { 'videoId': 0, 'songId': 5, 'start': '1755' },
  { 'videoId': 0, 'songId': 6, 'start': '2167' },
]

export function setData() {
  // set video
  let videoElement = document.getElementById('video')!;
  let option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  videoElement.appendChild(option);

  // データは五十音順になっていないので，ソートしてから選択肢に追加する
  let videoNames: any[] = [];
  videos.forEach((video, i) => videoNames.push([video['title'], i]));
  videoNames = videoNames.sort();
  for (let name of videoNames) {
    option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    videoElement.appendChild(option);
  }

  // set song
  let songElement = document.getElementById('song')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  songElement.appendChild(option);

  let songNames: any[] = [];
  songs.forEach((song, i) => songNames.push([song['title'], i]));
  songNames = songNames.sort();
  for (let name of songNames) {
    option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    songElement.appendChild(option);
  }

  // song artist
  let artistElement = document.getElementById('artist')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  artistElement.appendChild(option);

  let artistNames: any[] = [];
  artists.forEach((artist, i) => artistNames.push([artist['name'], i]));
  artistNames = artistNames.sort();
  for (let name of artistNames) {
    option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    artistElement.appendChild(option);
  }
}

export function getUrl(videoId: number) {
  return videos[videoId]['id'];
}

export function getArtist(songId: number) {
  return artists[songs[songId]['artistId']]['name'];
}

export function getArtistId(songId: number) {
  return songs[songId]['artistId'];
}

export function getSong(songId: number) {
  return songs[songId]['title'];
}