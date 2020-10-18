export const movies = [
  {
    'url': 'https://www.youtube.com/watch?v=PuFk_XfNXiM',
    'title': 'POLKA♡SUMMER♡LIVE☆2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    'date': '2020/08/30'
  },
]

export const songs = [
  { 'title': 'HOLOGRAM CIRCUS', 'artistId': 0, 'genreId': 0 },
  { 'title': 'only my railgun', 'artistId': 1, 'genreId': 1 },
  { 'title': 'Unmei♪wa♪Endless!', 'artistId': 2, 'genreId': 1 },
  { 'title': 'Chai Maxx', 'artistId': 3, 'genreId': 2 },
  { 'title': 'おジャ魔女カーニバル!!', 'artistId': 4, 'genreId': 1 },
  { 'title': '空色デイズ', 'artistId': 5, 'genreId': 1 },
  { 'title': 'ようこそジャパリパークへ', 'artistId': 6, 'genreId': 1 },
]

export const genres = [
  { 'name': 'オリジナル' },
  { 'name': 'アニソン' },
  { 'name': 'アイドル' },
]

export const artists = [
  { 'name': '尾丸ポルカ' },
  { 'name': 'fripSide' },
  { 'name': '放課後ティータイム' },
  { 'name': 'ももいろクローバー' },
  { 'name': 'MAHO堂' },
  { 'name': '中川翔子' },
  { 'name': 'どうぶつビスケッツ×PPP' },
]

export const singings = [
  { 'movieId': 0, 'songId': 0, 'time': '4m51s' },
  { 'movieId': 0, 'songId': 1, 'time': '6m17s' },
  { 'movieId': 0, 'songId': 2, 'time': '12m54s' },
  { 'movieId': 0, 'songId': 3, 'time': '17m44s' },
  { 'movieId': 0, 'songId': 4, 'time': '23m30s' },
  { 'movieId': 0, 'songId': 5, 'time': '29m15s' },
  { 'movieId': 0, 'songId': 6, 'time': '36m07s' },
]

export function setData() {
  // set movie
  let movieElement = document.getElementById('movie')!;
  let option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  movieElement.appendChild(option);
  for (let i in movies) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = movies[i]['title'];
    movieElement.appendChild(option);
  }

  // set song
  let songElement = document.getElementById('song')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  songElement.appendChild(option);
  for (let i in songs) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = songs[i]['title'];
    songElement.appendChild(option);
  }

  // song artist
  let artistElement = document.getElementById('artist')!;
  option = document.createElement('option');
  option.setAttribute('value', '-1');
  option.innerHTML = '-';
  artistElement.appendChild(option);
  for (let i in artists) {
    option = document.createElement('option');
    option.setAttribute('value', i);
    option.innerHTML = artists[i]['name'];
    artistElement.appendChild(option);
  }
}