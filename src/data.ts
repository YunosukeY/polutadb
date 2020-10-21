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
  { // 7
    'id': '-79A0I8_2vw',
    'title': 'POLKA●SEPTEMBER●LIVE⇔2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    'date': '2020/09/25',
    'typeId': 1,
  },
  { // 8
    'id': 'Es2ZdDDxS1s',
    'title': '早起きは三文の歌枠しっとり～♪【ホロライブ/尾丸ポルカ】',
    'date': '2020/10/11',
    'typeId': 2,
  },
  { // 9
    'id': 'jPxfqgAkGMM',
    'title': 'ごめん、歌います【ホロライブ/尾丸ポルカ】',
    'date': '2020/10/13',
    'typeId': 2,
  },
  { // 10
    'id': 'jqyinvEhLdg',
    'title': '味をしめた者の朝歌枠ゲリラ【ホロライブ/尾丸ポルカ】',
    'date': '2020/10/20',
    'typeId': 2,
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
  /* 14 */ { 'title': 'GO!GO!MANIAC', 'artistId': 2, 'genreId': 1 },
  /* 15 */ { 'title': 'Q&A リサイタル!', 'artistId': 13, 'genreId': 1 },
  /* 16 */ { 'title': 'サラバ、愛しき悲しみたちよ', 'artistId': 3, 'genreId': 2 },
  /* 17 */ { 'title': 'ミライボウル', 'artistId': 3, 'genreId': 2 },
  /* 18 */ { 'title': 'milk', 'artistId': 14, 'genreId': 4 },
  /* 19 */ { 'title': 'ビスケット', 'artistId': 15, 'genreId': 4 },
  /* 20 */ { 'title': 'そばかす', 'artistId': 16, 'genreId': 1 },
  /* 21 */ { 'title': 'ネトゲ廃人シュプレヒコール', 'artistId': 17, 'genreId': 3 },
  /* 22 */ { 'title': '前略､道の上より', 'artistId': 18, 'genreId': 4 },
  /* 23 */ { 'title': 'Trickster', 'artistId': 19, 'genreId': 4 },
  /* 24 */ { 'title': '続く世界', 'artistId': 5, 'genreId': 1 },
  /* 25 */ { 'title': '透明人間', 'artistId': 20, 'genreId': 9 },
  /* 26 */ { 'title': 'ステキな日曜日〜Gyu Gyu グッデイ!〜', 'artistId': 21, 'genreId': 4 },
  /* 27 */ { 'title': 'Give a reason', 'artistId': 22, 'genreId': 1 },
  /* 28 */ { 'title': 'フライングゲット', 'artistId': 23, 'genreId': 2 },
  /* 29 */ { 'title': '片想いFinally', 'artistId': 24, 'genreId': 2 },
  /* 30 */ { 'title': '風吹けば恋', 'artistId': 25, 'genreId': 4 },
  /* 31 */ { 'title': '気まぐれロマンティック', 'artistId': 26, 'genreId': 4 },
  /* 32 */ { 'title': 'シュガーソングとビターステップ', 'artistId': 27, 'genreId': 1 },
  /* 33 */ { 'title': 'GOLD', 'artistId': 28, 'genreId': 9 },
  /* 34 */ { 'title': 'シャボン玉', 'artistId': 29, 'genreId': 2 },
  /* 35 */ { 'title': 'AIAIAI', 'artistId': 30, 'genreId': 0 },
  /* 36 */ { 'title': 'PONPONPON', 'artistId': 31, 'genreId': 6 },
  /* 37 */ { 'title': '君の知らない物語', 'artistId': 32, 'genreId': 1 },
  /* 38 */ { 'title': 'M@STERPIECE', 'artistId': 33, 'genreId': 7 },
  /* 39 */ { 'title': 'Hello, Worker', 'artistId': 34, 'genreId': 3 },
  /* 40 */ { 'title': '風になる', 'artistId': 35, 'genreId': 4 },
  /* 41 */ { 'title': 'サウダージ', 'artistId': 36, 'genreId': 4 },
  /* 42 */ { 'title': 'サボテン', 'artistId': 36, 'genreId': 4 },
  /* 43 */ { 'title': '新宝島', 'artistId': 37, 'genreId': 9 },
  /* 44 */ { 'title': 'I WISH', 'artistId': 29, 'genreId': 2 },
  /* 45 */ { 'title': 'カブトムシ', 'artistId': 14, 'genreId': 4 },
  /* 46 */ { 'title': 'CHE.R.RY', 'artistId': 38, 'genreId': 4 },
  /* 47 */ { 'title': 'やさしいキスをして', 'artistId': 39, 'genreId': 4 },
  /* 48 */ { 'title': 'コノユビトマレ', 'artistId': 40, 'genreId': 4 },
  /* 49 */ { 'title': 'だから僕は音楽を辞めた', 'artistId': 41, 'genreId': 9 },
  /* 50 */ { 'title': 'NO,Thank You!', 'artistId': 2, 'genreId': 1 },
  /* 51 */ { 'title': 'Listen!!', 'artistId': 2, 'genreId': 1 },
  /* 52 */ { 'title': 'ノーザンクロス', 'artistId': 42, 'genreId': 1 },
  /* 53 */ { 'title': 'からくりピエロ', 'artistId': 43, 'genreId': 3 },
  /* 54 */ { 'title': '二息歩行', 'artistId': 44, 'genreId': 3 },
  /* 55 */ { 'title': 'トリノコシティ', 'artistId': 43, 'genreId': 3 },
  /* 56 */ { 'title': 'キリトリセン', 'artistId': 43, 'genreId': 3 },
  /* 57 */ { 'title': 'ハナミズキ', 'artistId': 45, 'genreId': 4 },
  /* 58 */ { 'title': 'Raining', 'artistId': 46, 'genreId': 4 },
  /* 59 */ { 'title': '雲路の果て', 'artistId': 46, 'genreId': 4 },
  /* 60 */ { 'title': '車輪の唄', 'artistId': 47, 'genreId': 4 },
  /* 61 */ { 'title': '風になりたい', 'artistId': 48, 'genreId': 4 },
  /* 62 */ { 'title': '未来予想図II', 'artistId': 39, 'genreId': 4 },
  /* 63 */ { 'title': '黄昏ロマンス', 'artistId': 36, 'genreId': 4 },
  /* 64 */ { 'title': '幸せについて本気出して考えてみた', 'artistId': 36, 'genreId': 4 },
  /* 65 */ { 'title': '雲は白リンゴは赤', 'artistId': 14, 'genreId': 4 },
  /* 66 */ { 'title': '女子カ←パラダイス', 'artistId': 49, 'genreId': 2 },
  /* 67 */ { 'title': 'Mr.Moonlight 〜愛のビッグバンド〜', 'artistId': 29, 'genreId': 2 },
  /* 68 */ { 'title': '走れ!', 'artistId': 3, 'genreId': 2 },
  /* 69 */ { 'title': 'オレンジノート', 'artistId': 3, 'genreId': 2 },
  /* 70 */ { 'title': '行くぜっ！怪盗少女', 'artistId': 3, 'genreId': 2 },
  /* 71 */ { 'title': 'ピンキージョーンズ', 'artistId': 3, 'genreId': 2 },
  /* 72 */ { 'title': 'Z伝説 〜終わりなき革命〜', 'artistId': 3, 'genreId': 2 },
  /* 73 */ { 'title': 'PUSH', 'artistId': 3, 'genreId': 2 },
  /* 74 */ { 'title': '君の街まで', 'artistId': 50, 'genreId': 9 },
  /* 75 */ { 'title': '君という花', 'artistId': 50, 'genreId': 9 },
  /* 76 */ { 'title': 'ごはんはおかず', 'artistId': 2, 'genreId': 1 },
  /* 77 */ { 'title': 'ふわふわ時間', 'artistId': 2, 'genreId': 1 },
  /* 78 */ { 'title': 'ハッピーサマーウェディング', 'artistId': 29, 'genreId': 2 },
  /* 79 */ { 'title': '星間飛行', 'artistId': 51, 'genreId': 1 },
  /* 80 */ { 'title': 'ロミオとシンデレラ', 'artistId': 52, 'genreId': 3 },
  /* 81 */ { 'title': 'ぴゅあぴゅあはーと', 'artistId': 2, 'genreId': 1 },
  /* 82 */ { 'title': 'もってけ!セーラーふく', 'artistId': 53, 'genreId': 1 },
  /* 83 */ { 'title': 'コネクト', 'artistId': 54, 'genreId': 1 },
  /* 84 */ { 'title': 'Snow halation', 'artistId': 55, 'genreId': 1 },
  /* 85 */ { 'title': '創聖のアクエリオン', 'artistId': 56, 'genreId': 1 },
  /* 86 */ { 'title': 'ETERNAL BLAZE', 'artistId': 19, 'genreId': 1 },
  /* 87 */ { 'title': 'Rising Hope', 'artistId': 57, 'genreId': 1 },
  /* 88 */ { 'title': 'ブルーバード', 'artistId': 26, 'genreId': 1 },
  /* 89 */ { 'title': 'BLUE BIRD', 'artistId': 58, 'genreId': 4 },
  /* 90 */ { 'title': 'カナシミ ブルー', 'artistId': 59, 'genreId': 4 },
  /* 91 */ { 'title': '群青日和', 'artistId': 20, 'genreId': 9 },
  /* 92 */ { 'title': 'トライアングラー', 'artistId': 60, 'genreId': 1 },
  /* 93 */ { 'title': '真夏のSounds good !', 'artistId': 23, 'genreId': 2 },
  /* 94 */ { 'title': '本気ボンバー!!', 'artistId': 61, 'genreId': 1 },
  /* 95 */ { 'title': 'ココ☆ナツ', 'artistId': 3, 'genreId': 2 },
  /* 96 */ { 'title': 'LOVEマシーン', 'artistId': 29, 'genreId': 2 },
]

const genres: Genre[] = [
  /* 0 */ { 'name': 'VTuber' },
  /* 1 */ { 'name': 'アニメ' },
  /* 2 */ { 'name': 'アイドル' },
  /* 3 */ { 'name': 'ボーカロイド' },
  /* 4 */ { 'name': 'J-POP' },
  /* 5 */ { 'name': 'ゲーム' },
  /* 6 */ { 'name': 'エレクトロニック' },
  /* 7 */ { 'name': 'アイドルマスター' },
  /* 8 */ { 'name': '合唱曲' },
  /* 9 */ { 'name': 'ロック' },
]

const artists: Artist[] = [
  /*  0 */ { 'name': '尾丸ポルカ' },
  /*  1 */ { 'name': 'fripSide' },
  /*  2 */ { 'name': '放課後ティータイム' },
  /*  3 */ { 'name': 'ももいろクローバー' },
  /*  4 */ { 'name': 'MAHO堂' },
  /*  5 */ { 'name': '中川翔子' },
  /*  6 */ { 'name': 'どうぶつビスケッツ×PPP' },
  /*  7 */ { 'name': 'ゴジマジP' },
  /*  8 */ { 'name': '平田志穂子' },
  /*  9 */ { 'name': 'Yunomi' },
  /* 10 */ { 'name': 'LiPPS' },
  /* 11 */ { 'name': '中島みゆき' },
  /* 12 */ { 'name': '荒井由実' },
  /* 13 */ { 'name': '戸松遥' },
  /* 14 */ { 'name': 'aiko' },
  /* 15 */ { 'name': 'YUKI' },
  /* 16 */ { 'name': 'JUDY AND MARY' },
  /* 17 */ { 'name': 'さつきがてんこもり' },
  /* 18 */ { 'name': '一世風靡セピア' },
  /* 19 */ { 'name': '水樹奈々' },
  /* 20 */ { 'name': '東京事変' },
  /* 21 */ { 'name': '芦田愛菜' },
  /* 22 */ { 'name': '林原めぐみ' },
  /* 23 */ { 'name': 'AKB48' },
  /* 24 */ { 'name': 'SKE48' },
  /* 25 */ { 'name': 'チャットモンチー' },
  /* 26 */ { 'name': 'いきものがかり' },
  /* 27 */ { 'name': 'UNISON SQUARE GARDEN' },
  /* 28 */ { 'name': 'UVERworld' },
  /* 29 */ { 'name': 'モーニング娘。' },
  /* 30 */ { 'name': 'キズナアイ' },
  /* 31 */ { 'name': 'きゃりーぱみゅぱみゅ' },
  /* 32 */ { 'name': 'supercell' },
  /* 33 */ { 'name': '765PRO ALLSTARS' },
  /* 34 */ { 'name': 'KEI' },
  /* 35 */ { 'name': 'つじあやの' },
  /* 36 */ { 'name': 'ポルノグラフティ' },
  /* 37 */ { 'name': 'サカナクション' },
  /* 38 */ { 'name': 'YUI' },
  /* 39 */ { 'name': 'DREAMS COME TRUE' },
  /* 40 */ { 'name': 'スガシカオ' },
  /* 41 */ { 'name': 'ヨルシカ' },
  /* 42 */ { 'name': 'May\'n' },
  /* 43 */ { 'name': '40㍍P' },
  /* 44 */ { 'name': 'DECO*27' },
  /* 45 */ { 'name': '一青窈' },
  /* 46 */ { 'name': 'Cocco' },
  /* 47 */ { 'name': 'BUMP OF CHICKEN' },
  /* 48 */ { 'name': 'THE BOOM' },
  /* 49 */ { 'name': 'SUPER☆GiRLS' },
  /* 50 */ { 'name': 'ASIAN KUNG-FU GENERATION' },
  /* 51 */ { 'name': '中島愛' },
  /* 52 */ { 'name': 'doriko' },
  /* 53 */ { 'name': '泉こなた, 柊かがみ, 柊つかさ, 高良みゆき' },
  /* 54 */ { 'name': 'ClariS' },
  /* 55 */ { 'name': 'μ\'s' },
  /* 56 */ { 'name': 'AKINO from bless4' },
  /* 57 */ { 'name': 'LiSA' },
  /* 58 */ { 'name': '浜崎あゆみ' },
  /* 59 */ { 'name': 'KinKi Kids' },
  /* 60 */ { 'name': '坂本真綾' },
  /* 61 */ { 'name': 'Berryz工房' },
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
  { 'videoId': 7, 'songId': 14, 'start': '408' },
  { 'videoId': 7, 'songId': 15, 'start': '653' },
  { 'videoId': 7, 'songId': 16, 'start': '1089' },
  { 'videoId': 7, 'songId': 17, 'start': '1390' },
  { 'videoId': 7, 'songId': 18, 'start': '1762' },
  { 'videoId': 7, 'songId': 19, 'start': '2023' },
  { 'videoId': 7, 'songId': 20, 'start': '2346' },
  { 'videoId': 7, 'songId': 21, 'start': '2747' },
  { 'videoId': 7, 'songId': 22, 'start': '3045' },
  { 'videoId': 7, 'songId': 23, 'start': '3726' },
  { 'videoId': 7, 'songId': 24, 'start': '3967' },
  { 'videoId': 7, 'songId': 25, 'start': '4252' },
  { 'videoId': 7, 'songId': 26, 'start': '4592' },
  { 'videoId': 7, 'songId': 27, 'start': '4888' },
  { 'videoId': 7, 'songId': 28, 'start': '5147' },
  { 'videoId': 7, 'songId': 29, 'start': '5415' },
  { 'videoId': 7, 'songId': 30, 'start': '5811' },
  { 'videoId': 7, 'songId': 31, 'start': '6044' },
  { 'videoId': 7, 'songId': 32, 'start': '6390' },
  { 'videoId': 7, 'songId': 33, 'start': '6642' },
  { 'videoId': 7, 'songId': 34, 'start': '6920' },
  { 'videoId': 7, 'songId': 35, 'start': '7161' },
  { 'videoId': 7, 'songId': 36, 'start': '7274' },
  { 'videoId': 7, 'songId': 37, 'start': '7564' },
  { 'videoId': 7, 'songId': 38, 'start': '7995' },
  { 'videoId': 8, 'songId': 39, 'start': '230' },
  { 'videoId': 8, 'songId': 40, 'start': '528' },
  { 'videoId': 8, 'songId': 41, 'start': '829' },
  { 'videoId': 8, 'songId': 42, 'start': '1150' },
  { 'videoId': 8, 'songId': 43, 'start': '1452' },
  { 'videoId': 8, 'songId': 44, 'start': '1762' },
  { 'videoId': 8, 'songId': 45, 'start': '2116' },
  { 'videoId': 8, 'songId': 46, 'start': '2441' },
  { 'videoId': 8, 'songId': 47, 'start': '2664' },
  { 'videoId': 8, 'songId': 48, 'start': '2894' },
  { 'videoId': 8, 'songId': 49, 'start': '3204' },
  { 'videoId': 8, 'songId': 50, 'start': '3512' },
  { 'videoId': 8, 'songId': 51, 'start': '3772' },
  { 'videoId': 8, 'songId': 52, 'start': '4006' },
  { 'videoId': 8, 'songId': 53, 'start': '4334' },
  { 'videoId': 8, 'songId': 54, 'start': '4628' },
  { 'videoId': 8, 'songId': 55, 'start': '4813' },
  { 'videoId': 8, 'songId': 56, 'start': '5035' },
  { 'videoId': 8, 'songId': 57, 'start': '5287' },
  { 'videoId': 8, 'songId': 58, 'start': '5633' },
  { 'videoId': 8, 'songId': 59, 'start': '5947' },
  { 'videoId': 8, 'songId': 60, 'start': '6293' },
  { 'videoId': 8, 'songId': 61, 'start': '6566' },
  { 'videoId': 8, 'songId': 62, 'start': '6809' },
  { 'videoId': 8, 'songId': 63, 'start': '7287' },
  { 'videoId': 8, 'songId': 64, 'start': '7595' },
  { 'videoId': 8, 'songId': 65, 'start': '7889' },
  { 'videoId': 8, 'songId': 66, 'start': '8142' },
  { 'videoId': 8, 'songId': 67, 'start': '8415' },
  { 'videoId': 8, 'songId': 68, 'start': '8727' },
  { 'videoId': 8, 'songId': 69, 'start': '9050' },
  { 'videoId': 8, 'songId': 70, 'start': '9190' },
  { 'videoId': 8, 'songId': 71, 'start': '9448' },
  { 'videoId': 8, 'songId': 72, 'start': '9752' },
  { 'videoId': 8, 'songId': 73, 'start': '10197' },
  { 'videoId': 8, 'songId': 74, 'start': '10514' },
  { 'videoId': 8, 'songId': 75, 'start': '10735' },
  { 'videoId': 8, 'songId': 76, 'start': '11105' },
  { 'videoId': 8, 'songId': 77, 'start': '11295' },
  { 'videoId': 9, 'songId': 2, 'start': '172' },
  { 'videoId': 9, 'songId': 78, 'start': '406' },
  { 'videoId': 9, 'songId': 79, 'start': '687' },
  { 'videoId': 9, 'songId': 80, 'start': '938' },
  { 'videoId': 9, 'songId': 81, 'start': '1241' },
  { 'videoId': 9, 'songId': 82, 'start': '1548' },
  { 'videoId': 9, 'songId': 83, 'start': '1833' },
  { 'videoId': 9, 'songId': 84, 'start': '2130' },
  { 'videoId': 9, 'songId': 85, 'start': '2376' },
  { 'videoId': 10, 'songId': 86, 'start': '151' },
  { 'videoId': 10, 'songId': 87, 'start': '460' },
  { 'videoId': 10, 'songId': 88, 'start': '701' },
  { 'videoId': 10, 'songId': 89, 'start': '919' },
  { 'videoId': 10, 'songId': 90, 'start': '1160' },
  { 'videoId': 10, 'songId': 91, 'start': '1454' },
  { 'videoId': 10, 'songId': 92, 'start': '1676' },
  { 'videoId': 10, 'songId': 93, 'start': '1955' },
  { 'videoId': 10, 'songId': 94, 'start': '2224' },
  { 'videoId': 10, 'songId': 95, 'start': '2420' },
  { 'videoId': 10, 'songId': 96, 'start': '2720' },
  { 'videoId': 10, 'songId': 6, 'start': '3148' },
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