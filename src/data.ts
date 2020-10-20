interface Video {
  id: string;
  title: string;
  date: string;
  typeId: number;
}

interface Song {
  title: string;
  artistId: number;
  genreId: number;
}

interface Genre {
  name: string;
}

interface Artist {
  name: string;
}

interface Type {
  name: string;
}

export interface Singing {
  videoId: number;
  songId: number;
  start: string;
}

const videos: Video[] = [
  { // 0
    'id': 'PuFk_XfNXiM',
    'title': 'POLKA♡SUMMER♡LIVE☆2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    'date': '2020/08/30',
    'typeId': 1,
  },
  { // 1
    'id': 'd0oDMXWMs8o',
    'title': 'HOLOGRAM CIRCUS - 尾丸ポルカ (short ver.)',
    'date': '2020/08/16',
    'typeId': 3,
  },
  { // 2
    'id': 'IixAr5W3TIc',
    'title': '【おちゃめ機能】ほろふぁいぶが吹っ切れた【5人で歌ってみた】',
    'date': '2020/08/16',
    'typeId': 0,
  },
  { // 3
    'id': 'Eq_LQukPyqE',
    'title': 'Reach Out To The Truth',
    'date': '2020/09/10',
    'typeId': 4,
  },
  { // 4
    'id': 'yzEogcLd4ac',
    'title': 'インドア系ならトラックメイカー',
    'date': '2020/09/12',
    'typeId': 4,
  },
  { // 5
    'id': 'KQvHEo_dazE',
    'title': 'Tulip',
    'date': '2020/09/22',
    'typeId': 4,
  },
  { // 6
    'id': 'fz0SCIPbKhw',
    'title': '駄目よ！20時にポルカの1ヶ月配信があるの！【ホロライブ/尾丸ポルカ】',
    'date': '2020/09/16',
    'typeId': 5,
  },
]

const types: Type[] = [
  /* 0 */ { 'name': '歌ってみた' },
  /* 1 */ { 'name': 'ライブ' },
  /* 2 */ { 'name': '歌枠' },
  /* 3 */ { 'name': 'オリジナル' },
  /* 4 */ { 'name': 'GB' },
  /* 5 */ { 'name': 'その他' },
]

const songs: Song[] = [
  /*  0 */ { 'title': 'HOLOGRAM CIRCUS', 'artistId': 0, 'genreId': 0 },
  /*  1 */ { 'title': 'only my railgun', 'artistId': 1, 'genreId': 1 },
  /*  2 */ { 'title': 'Unmei♪wa♪Endless!', 'artistId': 2, 'genreId': 1 },
  /*  3 */ { 'title': 'Chai Maxx', 'artistId': 3, 'genreId': 2 },
  /*  4 */ { 'title': 'おジャ魔女カーニバル!!', 'artistId': 4, 'genreId': 1 },
  /*  5 */ { 'title': '空色デイズ', 'artistId': 5, 'genreId': 1 },
  /*  6 */ { 'title': 'ようこそジャパリパークへ', 'artistId': 6, 'genreId': 1 },
  /*  7 */ { 'title': 'おちゃめ機能', 'artistId': 7, 'genreId': 3 },
  /*  8 */ { 'title': 'Reach Out To The Truth', 'artistId': 8, 'genreId': 5 },
  /*  9 */ { 'title': 'インドア系ならトラックメイカー', 'artistId': 9, 'genreId': 6 },
  /* 10 */ { 'title': 'Tulip', 'artistId': 10, 'genreId': 7 },
  /* 11 */ { 'title': '地上の星', 'artistId': 11, 'genreId': 4 },
  /* 12 */ { 'title': '卒業写真', 'artistId': 12, 'genreId': 4 },
  /* 13 */ { 'title': '旅立ちの日に', 'artistId': -1, 'genreId': 8 }, // artist: null
]

const genres: Genre[] = [
  /* 0 */ { 'name': 'オリジナル' },
  /* 1 */ { 'name': 'アニメ' },
  /* 2 */ { 'name': 'アイドル' },
  /* 3 */ { 'name': 'ボーカロイド' },
  /* 4 */ { 'name': 'J-POP' },
  /* 5 */ { 'name': 'ゲーム' },
  /* 6 */ { 'name': 'エレクトロニック' },
  /* 7 */ { 'name': 'アイドルマスター' },
  /* 8 */ { 'name': '合唱曲' },
]

const artists: Artist[] = [
  /*  0 */ { 'name': '尾丸ポルカ' },
  /*  1 */ { 'name': 'fripSide' },
  /*  2 */ { 'name': '放課後ティータイム' },
  /*  3 */ { 'name': 'ももいろクローバー' },
  /*  4 */ { 'name': 'MAHO堂' },
  /*  5 */ { 'name': '中川翔子' },
  /*  6 */ { 'name': 'どうぶつビスケッツ×PPP' },
  /*  7 */ { 'name': 'ゴジマジP feat.重音テト' },
  /*  8 */ { 'name': '平田志穂子' },
  /*  9 */ { 'name': 'Yunomi' },
  /* 10 */ { 'name': 'LiPPS' },
  /* 11 */ { 'name': '中島みゆき' },
  /* 12 */ { 'name': '荒井由実' },
]

// 時系列順に登録？
export const singings: Singing[] = [
  { 'videoId': 1, 'songId': 0, 'start': '0' },
  { 'videoId': 2, 'songId': 7, 'start': '0' },
  { 'videoId': 0, 'songId': 0, 'start': '272' },
  { 'videoId': 0, 'songId': 1, 'start': '377' },
  { 'videoId': 0, 'songId': 2, 'start': '774' },
  { 'videoId': 0, 'songId': 3, 'start': '1064' },
  { 'videoId': 0, 'songId': 4, 'start': '1410' },
  { 'videoId': 0, 'songId': 5, 'start': '1755' },
  { 'videoId': 0, 'songId': 6, 'start': '2167' },
  { 'videoId': 3, 'songId': 8, 'start': '35' },
  { 'videoId': 4, 'songId': 9, 'start': '0' },
  { 'videoId': 6, 'songId': 11, 'start': '2206' },
  { 'videoId': 6, 'songId': 12, 'start': '2668' },
  { 'videoId': 6, 'songId': 13, 'start': '3266' },
  { 'videoId': 5, 'songId': 10, 'start': '3' },
]

export function setData() {
  // set video
  let videoElement = document.getElementById('video')!;
  // データは五十音順になっていないので，ソートしてから選択肢に追加する
  let videoNames: any[] = [];
  videos.forEach((video, i) => videoNames.push([video['title'], i]));
  videoNames = videoNames.sort();
  for (let name of videoNames) {
    let option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    videoElement.appendChild(option);
  }

  // set song
  let songElement = document.getElementById('song')!;
  let songNames: any[] = [];
  songs.forEach((song, i) => songNames.push([song['title'], i]));
  songNames = songNames.sort();
  for (let name of songNames) {
    let option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    songElement.appendChild(option);
  }

  // song artist
  let artistElement = document.getElementById('artist')!;
  let artistNames: any[] = [];
  artists.forEach((artist, i) => artistNames.push([artist['name'], i]));
  artistNames = artistNames.sort();
  for (let name of artistNames) {
    let option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    artistElement.appendChild(option);
  }

  // set genre
  let genreElement = document.getElementById('genre')!;
  let genreNames: any[] = [];
  genres.forEach((genre, i) => genreNames.push([genre['name'], i]));
  genreNames = genreNames.sort();
  for (let name of genreNames) {
    let option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    genreElement.appendChild(option);
  }

  // type
  let typeElement = document.getElementById('type')!;
  let typeNames: any[] = [];
  types.forEach((type, i) => typeNames.push([type['name'], i]));
  typeNames = typeNames.sort();
  for (let name of typeNames) {
    let option = document.createElement('option');
    option.setAttribute('value', name[1]);
    option.innerHTML = name[0];
    typeElement.appendChild(option);
  }
}

export function getUrl(videoId: number) {
  return videos[videoId]['id'];
}

export function getArtist(songId: number) {
  let artistId = songs[songId]['artistId'];
  return (artistId == -1 ? '' : artists[artistId]['name']);
}

export function getArtistId(songId: number) {
  return songs[songId]['artistId'];
}

export function getSong(songId: number) {
  return songs[songId]['title'];
}

export function getGenreId(songId: number) {
  return songs[songId]['genreId'];
}

export function getTypeId(videoId: number) {
  return videos[videoId]['typeId'];
}