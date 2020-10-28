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

export class Singing {
  videoId: number;
  songId: number;
  start: string;
  isACappella: boolean;
  isFull: boolean;

  constructor(videoId: number, songId: number, start: string, isACappella = false, isFull = true) {
    this.videoId = videoId;
    this.songId = songId;
    this.start = start;
    this.isACappella = isACappella;
    this.isFull = isFull;
  }
}

const videos: Video[] = [
  { // 0
    id: 'PuFk_XfNXiM',
    title: 'POLKA♡SUMMER♡LIVE☆2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    date: '2020/08/30',
    typeId: 1,
  },
  { // 1
    id: 'd0oDMXWMs8o',
    title: 'HOLOGRAM CIRCUS - 尾丸ポルカ (short ver.)',
    date: '2020/08/16',
    typeId: 3,
  },
  { // 2
    id: 'IixAr5W3TIc',
    title: '【おちゃめ機能】ほろふぁいぶが吹っ切れた【5人で歌ってみた】',
    date: '2020/08/16',
    typeId: 0,
  },
  { // 3
    id: 'Eq_LQukPyqE',
    title: 'Reach Out To The Truth',
    date: '2020/09/10',
    typeId: 4,
  },
  { // 4
    id: 'yzEogcLd4ac',
    title: 'インドア系ならトラックメイカー',
    date: '2020/09/12',
    typeId: 4,
  },
  { // 5
    id: 'KQvHEo_dazE',
    title: 'Tulip',
    date: '2020/09/22',
    typeId: 4,
  },
  { // 6
    id: 'fz0SCIPbKhw',
    title: '駄目よ！20時にポルカの1ヶ月配信があるの！【ホロライブ/尾丸ポルカ】',
    date: '2020/09/16',
    typeId: 5,
  },
  { // 7
    id: '-79A0I8_2vw',
    title: 'POLKA●SEPTEMBER●LIVE⇔2020 #ぽるうた【ホロライブ/尾丸ポルカ】',
    date: '2020/09/25',
    typeId: 1,
  },
  { // 8
    id: 'Es2ZdDDxS1s',
    title: '早起きは三文の歌枠しっとり～♪【ホロライブ/尾丸ポルカ】',
    date: '2020/10/11',
    typeId: 2,
  },
  { // 9
    id: 'jPxfqgAkGMM',
    title: 'ごめん、歌います【ホロライブ/尾丸ポルカ】',
    date: '2020/10/13',
    typeId: 2,
  },
  { // 10
    id: 'jqyinvEhLdg',
    title: '味をしめた者の朝歌枠ゲリラ【ホロライブ/尾丸ポルカ】',
    date: '2020/10/20',
    typeId: 2,
  },
  { // 11
    id: 'f1sG1ffExJc',
    title: 'ポルカじゃない人の朝歌ゲリラ【ホロライブ/尾丸ポルカ】',
    date: '2020/10/22',
    typeId: 2,
  },
  { // 12
    id: 'sqrobkkImgg',
    title: '酔いどれポルカのアイカツ！語り～アカペラもあるｙｐ～【ホロライブ/尾丸ポルカ】',
    date: '2020/10/28',
    typeId: 5,
  },
]

const types: Type[] = [
  /* 0 */ { name: '歌ってみた' },
  /* 1 */ { name: 'ライブ' },
  /* 2 */ { name: '歌枠' },
  /* 3 */ { name: 'オリジナル' },
  /* 4 */ { name: 'GB' },
  /* 5 */ { name: 'その他' },
]

export const songs: Song[] = [
  /*  0 */ { title: 'HOLOGRAM CIRCUS', artistId: 0, genreId: 0 },
  /*  1 */ { title: 'only my railgun', artistId: 1, genreId: 1 },
  /*  2 */ { title: 'Unmei♪wa♪Endless!', artistId: 2, genreId: 1 },
  /*  3 */ { title: 'Chai Maxx', artistId: 3, genreId: 2 },
  /*  4 */ { title: 'おジャ魔女カーニバル!!', artistId: 4, genreId: 1 },
  /*  5 */ { title: '空色デイズ', artistId: 5, genreId: 1 },
  /*  6 */ { title: 'ようこそジャパリパークへ', artistId: 6, genreId: 1 },
  /*  7 */ { title: 'おちゃめ機能', artistId: 7, genreId: 3 },
  /*  8 */ { title: 'Reach Out To The Truth', artistId: 8, genreId: 5 },
  /*  9 */ { title: 'インドア系ならトラックメイカー', artistId: 9, genreId: 6 },
  /* 10 */ { title: 'Tulip', artistId: 10, genreId: 7 },
  /* 11 */ { title: '地上の星', artistId: 11, genreId: 4 },
  /* 12 */ { title: '卒業写真', artistId: 12, genreId: 4 },
  /* 13 */ { title: '旅立ちの日に', artistId: -1, genreId: 8 }, // artist: null
  /* 14 */ { title: 'GO!GO!MANIAC', artistId: 2, genreId: 1 },
  /* 15 */ { title: 'Q&A リサイタル!', artistId: 13, genreId: 1 },
  /* 16 */ { title: 'サラバ、愛しき悲しみたちよ', artistId: 81, genreId: 2 },
  /* 17 */ { title: 'ミライボウル', artistId: 3, genreId: 2 },
  /* 18 */ { title: 'milk', artistId: 14, genreId: 4 },
  /* 19 */ { title: 'ビスケット', artistId: 15, genreId: 4 },
  /* 20 */ { title: 'そばかす', artistId: 16, genreId: 1 },
  /* 21 */ { title: 'ネトゲ廃人シュプレヒコール', artistId: 17, genreId: 3 },
  /* 22 */ { title: '前略､道の上より', artistId: 18, genreId: 4 },
  /* 23 */ { title: 'Trickster', artistId: 19, genreId: 4 },
  /* 24 */ { title: '続く世界', artistId: 5, genreId: 1 },
  /* 25 */ { title: '透明人間', artistId: 20, genreId: 9 },
  /* 26 */ { title: 'ステキな日曜日〜Gyu Gyu グッデイ!〜', artistId: 21, genreId: 4 },
  /* 27 */ { title: 'Give a reason', artistId: 22, genreId: 1 },
  /* 28 */ { title: 'フライングゲット', artistId: 23, genreId: 2 },
  /* 29 */ { title: '片想いFinally', artistId: 24, genreId: 2 },
  /* 30 */ { title: '風吹けば恋', artistId: 25, genreId: 4 },
  /* 31 */ { title: '気まぐれロマンティック', artistId: 26, genreId: 4 },
  /* 32 */ { title: 'シュガーソングとビターステップ', artistId: 27, genreId: 1 },
  /* 33 */ { title: 'GOLD', artistId: 28, genreId: 9 },
  /* 34 */ { title: 'シャボン玉', artistId: 29, genreId: 2 },
  /* 35 */ { title: 'AIAIAI', artistId: 30, genreId: 0 },
  /* 36 */ { title: 'PONPONPON', artistId: 31, genreId: 6 },
  /* 37 */ { title: '君の知らない物語', artistId: 32, genreId: 1 },
  /* 38 */ { title: 'M@STERPIECE', artistId: 33, genreId: 7 },
  /* 39 */ { title: 'Hello, Worker', artistId: 34, genreId: 3 },
  /* 40 */ { title: '風になる', artistId: 35, genreId: 4 },
  /* 41 */ { title: 'サウダージ', artistId: 36, genreId: 4 },
  /* 42 */ { title: 'サボテン', artistId: 36, genreId: 4 },
  /* 43 */ { title: '新宝島', artistId: 37, genreId: 9 },
  /* 44 */ { title: 'I WISH', artistId: 29, genreId: 2 },
  /* 45 */ { title: 'カブトムシ', artistId: 14, genreId: 4 },
  /* 46 */ { title: 'CHE.R.RY', artistId: 38, genreId: 4 },
  /* 47 */ { title: 'やさしいキスをして', artistId: 39, genreId: 4 },
  /* 48 */ { title: 'コノユビトマレ', artistId: 40, genreId: 4 },
  /* 49 */ { title: 'だから僕は音楽を辞めた', artistId: 41, genreId: 9 },
  /* 50 */ { title: 'NO,Thank You!', artistId: 2, genreId: 1 },
  /* 51 */ { title: 'Listen!!', artistId: 2, genreId: 1 },
  /* 52 */ { title: 'ノーザンクロス', artistId: 42, genreId: 1 },
  /* 53 */ { title: 'からくりピエロ', artistId: 43, genreId: 3 },
  /* 54 */ { title: '二息歩行', artistId: 44, genreId: 3 },
  /* 55 */ { title: 'トリノコシティ', artistId: 43, genreId: 3 },
  /* 56 */ { title: 'キリトリセン', artistId: 43, genreId: 3 },
  /* 57 */ { title: 'ハナミズキ', artistId: 45, genreId: 4 },
  /* 58 */ { title: 'Raining', artistId: 46, genreId: 4 },
  /* 59 */ { title: '雲路の果て', artistId: 46, genreId: 4 },
  /* 60 */ { title: '車輪の唄', artistId: 47, genreId: 4 },
  /* 61 */ { title: '風になりたい', artistId: 48, genreId: 4 },
  /* 62 */ { title: '未来予想図II', artistId: 39, genreId: 4 },
  /* 63 */ { title: '黄昏ロマンス', artistId: 36, genreId: 4 },
  /* 64 */ { title: '幸せについて本気出して考えてみた', artistId: 36, genreId: 4 },
  /* 65 */ { title: '雲は白リンゴは赤', artistId: 14, genreId: 4 },
  /* 66 */ { title: '女子カ←パラダイス', artistId: 49, genreId: 2 },
  /* 67 */ { title: 'Mr.Moonlight 〜愛のビッグバンド〜', artistId: 29, genreId: 2 },
  /* 68 */ { title: '走れ!', artistId: 3, genreId: 2 },
  /* 69 */ { title: 'オレンジノート', artistId: 81, genreId: 2 },
  /* 70 */ { title: '行くぜっ！怪盗少女', artistId: 3, genreId: 2 },
  /* 71 */ { title: 'ピンキージョーンズ', artistId: 3, genreId: 2 },
  /* 72 */ { title: 'Z伝説 〜終わりなき革命〜', artistId: 81, genreId: 2 },
  /* 73 */ { title: 'PUSH', artistId: 81, genreId: 2 },
  /* 74 */ { title: '君の街まで', artistId: 50, genreId: 9 },
  /* 75 */ { title: '君という花', artistId: 50, genreId: 9 },
  /* 76 */ { title: 'ごはんはおかず', artistId: 2, genreId: 1 },
  /* 77 */ { title: 'ふわふわ時間', artistId: 64, genreId: 1 },
  /* 78 */ { title: 'ハッピーサマーウェディング', artistId: 29, genreId: 2 },
  /* 79 */ { title: '星間飛行', artistId: 51, genreId: 1 },
  /* 80 */ { title: 'ロミオとシンデレラ', artistId: 52, genreId: 3 },
  /* 81 */ { title: 'ぴゅあぴゅあはーと', artistId: 2, genreId: 1 },
  /* 82 */ { title: 'もってけ!セーラーふく', artistId: 53, genreId: 1 },
  /* 83 */ { title: 'コネクト', artistId: 54, genreId: 1 },
  /* 84 */ { title: 'Snow halation', artistId: 55, genreId: 1 },
  /* 85 */ { title: '創聖のアクエリオン', artistId: 56, genreId: 1 },
  /* 86 */ { title: 'ETERNAL BLAZE', artistId: 19, genreId: 1 },
  /* 87 */ { title: 'Rising Hope', artistId: 57, genreId: 1 },
  /* 88 */ { title: 'ブルーバード', artistId: 26, genreId: 1 },
  /* 89 */ { title: 'BLUE BIRD', artistId: 58, genreId: 4 },
  /* 90 */ { title: 'カナシミ ブルー', artistId: 59, genreId: 4 },
  /* 91 */ { title: '群青日和', artistId: 20, genreId: 9 },
  /* 92 */ { title: 'トライアングラー', artistId: 60, genreId: 1 },
  /* 93 */ { title: '真夏のSounds good !', artistId: 23, genreId: 2 },
  /* 94 */ { title: '本気ボンバー!!', artistId: 61, genreId: 1 },
  /* 95 */ { title: 'ココ☆ナツ', artistId: 3, genreId: 2 },
  /* 96 */ { title: 'LOVEマシーン', artistId: 29, genreId: 2 },
  /* 97 */ { title: 'マルシェ', artistId: 62, genreId: 10 },
  /* 98 */ { title: 'Real Face', artistId: 63, genreId: 4 },
  /* 99 */ { title: 'Don\'t say "lazy"', artistId: 64, genreId: 1 },
  /* 100 */ { title: '丸の内サディスティック', artistId: 65, genreId: 4 },
  /* 101 */ { title: '遭難', artistId: 20, genreId: 4 },
  /* 102 */ { title: 'バビロン', artistId: 66, genreId: 3 },
  /* 103 */ { title: '浮世CROSSING', artistId: 28, genreId: 9 },
  /* 104 */ { title: 'READY STEADY GO', artistId: 67, genreId: 1 },
  /* 105 */ { title: '溺愛ロジック', artistId: 68, genreId: 4 },
  /* 106 */ { title: 'The Rainbow Star', artistId: 69, genreId: 4 },
  /* 107 */ { title: 'ネオメロドラマティック', artistId: 36, genreId: 4 },
  /* 108 */ { title: 'ミュージック・アワー', artistId: 36, genreId: 4 },
  /* 109 */ { title: '上海ハニー', artistId: 70, genreId: 4 },
  /* 110 */ { title: 'EZ DO DANCE', artistId: 71, genreId: 4 },
  /* 111 */ { title: 'オリオンをなぞる', artistId: 27, genreId: 1 },
  /* 112 */ { title: 'カゲロウデイズ', artistId: 72, genreId: 3 },
  /* 113 */ { title: 'GO!!!', artistId: 73, genreId: 9 },
  /* 114 */ { title: 'え？あぁ、そう。', artistId: 74, genreId: 3 },
  /* 115 */ { title: '夢見る少女じゃいられない', artistId: 75, genreId: 4 },
  /* 116 */ { title: 'やさしさに包まれたなら', artistId: 12, genreId: 4 },
  /* 117 */ { title: 'ルージュの伝言', artistId: 12, genreId: 4 },
  /* 118 */ { title: 'brave heart', artistId: 22, genreId: 1 },
  /* 119 */ { title: '残酷な天使のテーゼ', artistId: 76, genreId: 1 },
  /* 120 */ { title: 'Winter Bells', artistId: 77, genreId: 4 },
  /* 121 */ { title: 'Secret of my heart', artistId: 77, genreId: 4 },
  /* 122 */ { title: '深い森', artistId: 78, genreId: 4 },
  /* 123 */ { title: 'ライオン', artistId: 79, genreId: 1 },
  /* 124 */ { title: 'secret base 〜君がくれたもの〜', artistId: 80, genreId: 1 },
  /* 125 */ { title: '真夜中は純潔', artistId: 65, genreId: 4 },
  /* 126 */ { title: 'Signalize!', artistId: 82, genreId: 11 },
  /* 127 */ { title: '硝子ドール', artistId: 82, genreId: 11 },
  /* 128 */ { title: 'Growing for a dream', artistId: 82, genreId: 11 },
  /* 129 */ { title: 'ダイヤモンドハッピー', artistId: 82, genreId: 11 },
  /* 130 */ { title: 'Take Me Higher', artistId: 82, genreId: 11 },
  /* 131 */ { title: 'Angel Snow', artistId: 82, genreId: 11 },
  /* 132 */ { title: 'ヒラリ／ヒトリ／キラリ', artistId: 82, genreId: 11 },
  /* 133 */ { title: 'Moonlight destiny', artistId: 82, genreId: 11 },
  /* 134 */ { title: 'カレンダーガール', artistId: 82, genreId: 11 },
  /* 135 */ { title: 'アイドル活動!', artistId: 82, genreId: 11 },
]

export const genres: Genre[] = [
  /*  0 */ { name: 'VTuber' },
  /*  1 */ { name: 'アニメ' },
  /*  2 */ { name: 'アイドル' },
  /*  3 */ { name: 'ボーカロイド' },
  /*  4 */ { name: 'J-POP' },
  /*  5 */ { name: 'ゲーム' },
  /*  6 */ { name: 'エレクトロニック' },
  /*  7 */ { name: 'アイドルマスター' },
  /*  8 */ { name: '合唱曲' },
  /*  9 */ { name: 'ロック' },
  /* 10 */ { name: 'ヒップホップ' },
  /* 11 */ { name: 'アイカツ！' },
]

export const artists: Artist[] = [
  /*  0 */ { name: '尾丸ポルカ' },
  /*  1 */ { name: 'fripSide' },
  /*  2 */ { name: '放課後ティータイム' },
  /*  3 */ { name: 'ももいろクローバー' },
  /*  4 */ { name: 'MAHO堂' },
  /*  5 */ { name: '中川翔子' },
  /*  6 */ { name: 'どうぶつビスケッツ×PPP' },
  /*  7 */ { name: 'ゴジマジP' },
  /*  8 */ { name: '平田志穂子' },
  /*  9 */ { name: 'Yunomi' },
  /* 10 */ { name: 'LiPPS' },
  /* 11 */ { name: '中島みゆき' },
  /* 12 */ { name: '荒井由実' },
  /* 13 */ { name: '戸松遥' },
  /* 14 */ { name: 'aiko' },
  /* 15 */ { name: 'YUKI' },
  /* 16 */ { name: 'JUDY AND MARY' },
  /* 17 */ { name: 'さつきがてんこもり' },
  /* 18 */ { name: '一世風靡セピア' },
  /* 19 */ { name: '水樹奈々' },
  /* 20 */ { name: '東京事変' },
  /* 21 */ { name: '芦田愛菜' },
  /* 22 */ { name: '林原めぐみ' },
  /* 23 */ { name: 'AKB48' },
  /* 24 */ { name: 'SKE48' },
  /* 25 */ { name: 'チャットモンチー' },
  /* 26 */ { name: 'いきものがかり' },
  /* 27 */ { name: 'UNISON SQUARE GARDEN' },
  /* 28 */ { name: 'UVERworld' },
  /* 29 */ { name: 'モーニング娘。' },
  /* 30 */ { name: 'キズナアイ' },
  /* 31 */ { name: 'きゃりーぱみゅぱみゅ' },
  /* 32 */ { name: 'supercell' },
  /* 33 */ { name: '765PRO ALLSTARS' },
  /* 34 */ { name: 'KEI' },
  /* 35 */ { name: 'つじあやの' },
  /* 36 */ { name: 'ポルノグラフティ' },
  /* 37 */ { name: 'サカナクション' },
  /* 38 */ { name: 'YUI' },
  /* 39 */ { name: 'DREAMS COME TRUE' },
  /* 40 */ { name: 'スガシカオ' },
  /* 41 */ { name: 'ヨルシカ' },
  /* 42 */ { name: 'May\'n' },
  /* 43 */ { name: '40㍍P' },
  /* 44 */ { name: 'DECO*27' },
  /* 45 */ { name: '一青窈' },
  /* 46 */ { name: 'Cocco' },
  /* 47 */ { name: 'BUMP OF CHICKEN' },
  /* 48 */ { name: 'THE BOOM' },
  /* 49 */ { name: 'SUPER☆GiRLS' },
  /* 50 */ { name: 'ASIAN KUNG-FU GENERATION' },
  /* 51 */ { name: '中島愛' },
  /* 52 */ { name: 'doriko' },
  /* 53 */ { name: '泉こなた, 柊かがみ, 柊つかさ, 高良みゆき' },
  /* 54 */ { name: 'ClariS' },
  /* 55 */ { name: 'μ\'s' },
  /* 56 */ { name: 'AKINO from bless4' },
  /* 57 */ { name: 'LiSA' },
  /* 58 */ { name: '浜崎あゆみ' },
  /* 59 */ { name: 'KinKi Kids' },
  /* 60 */ { name: '坂本真綾' },
  /* 61 */ { name: 'Berryz工房' },
  /* 62 */ { name: 'KICK THE CAN CREW' },
  /* 63 */ { name: 'KAT-TUN' },
  /* 64 */ { name: '桜高軽音部' },
  /* 65 */ { name: '椎名林檎' },
  /* 66 */ { name: 'トーマ' },
  /* 67 */ { name: 'L\'Arc〜en〜Ciel' },
  /* 68 */ { name: '堂本剛' },
  /* 69 */ { name: 'ENDLICHERI☆ENDLICHERI' },
  /* 70 */ { name: 'ORANGE RANGE' },
  /* 71 */ { name: 'TRF' },
  /* 72 */ { name: 'じん' },
  /* 73 */ { name: 'FLOW' },
  /* 74 */ { name: '蝶々P' },
  /* 75 */ { name: '相川七瀬' },
  /* 76 */ { name: '高橋洋子' },
  /* 77 */ { name: '倉木麻衣' },
  /* 78 */ { name: 'Do As Infinity' },
  /* 79 */ { name: 'May\'n／中島愛' },
  /* 80 */ { name: 'ZONE' },
  /* 81 */ { name: 'ももいろクローバーZ' },
  /* 82 */ { name: 'STAR☆ANIS' },
]

// 時系列順に登録？
export const singings: Singing[] = [
  new Singing(1, 0, '0', false, false),
  new Singing(2, 7, '0', false, false),
  new Singing(0, 0, '272', false, false),
  new Singing(0, 1, '377'),
  new Singing(0, 2, '774'),
  new Singing(0, 3, '1064'),
  new Singing(0, 4, '1410'),
  new Singing(0, 5, '1755'),
  new Singing(0, 6, '2167'),
  new Singing(3, 8, '35', true, false),
  new Singing(4, 9, '0'),
  new Singing(6, 11, '2206'),
  new Singing(6, 12, '2668'),
  new Singing(6, 13, '3266'),
  new Singing(5, 10, '3'),
  new Singing(7, 14, '408'),
  new Singing(7, 15, '653'),
  new Singing(7, 16, '1089'),
  new Singing(7, 17, '1390'),
  new Singing(7, 18, '1762'),
  new Singing(7, 19, '2023'),
  new Singing(7, 20, '2346'),
  new Singing(7, 21, '2747'),
  new Singing(7, 22, '3045'),
  new Singing(7, 23, '3726'),
  new Singing(7, 24, '3967'),
  new Singing(7, 25, '4252'),
  new Singing(7, 26, '4592'),
  new Singing(7, 27, '4888'),
  new Singing(7, 28, '5147'),
  new Singing(7, 29, '5415'),
  new Singing(7, 30, '5811'),
  new Singing(7, 31, '6044'),
  new Singing(7, 32, '6390'),
  new Singing(7, 33, '6642'),
  new Singing(7, 34, '6920'),
  new Singing(7, 35, '7161'),
  new Singing(7, 36, '7274'),
  new Singing(7, 37, '7564'),
  new Singing(7, 38, '7995'),
  new Singing(8, 39, '230'),
  new Singing(8, 40, '528'),
  new Singing(8, 41, '829'),
  new Singing(8, 42, '1150'),
  new Singing(8, 43, '1452'),
  new Singing(8, 44, '1762'),
  new Singing(8, 45, '2116'),
  new Singing(8, 46, '2441'),
  new Singing(8, 47, '2664'),
  new Singing(8, 48, '2894'),
  new Singing(8, 49, '3204'),
  new Singing(8, 50, '3512'),
  new Singing(8, 51, '3772'),
  new Singing(8, 52, '4006'),
  new Singing(8, 53, '4334'),
  new Singing(8, 54, '4628'),
  new Singing(8, 55, '4813'),
  new Singing(8, 56, '5035'),
  new Singing(8, 57, '5287'),
  new Singing(8, 58, '5633'),
  new Singing(8, 59, '5947'),
  new Singing(8, 60, '6293'),
  new Singing(8, 61, '6566'),
  new Singing(8, 62, '6809'),
  new Singing(8, 63, '7287'),
  new Singing(8, 64, '7595'),
  new Singing(8, 65, '7889'),
  new Singing(8, 66, '8142'),
  new Singing(8, 67, '8415'),
  new Singing(8, 68, '8727'),
  new Singing(8, 69, '9050'),
  new Singing(8, 70, '9190'),
  new Singing(8, 71, '9448'),
  new Singing(8, 72, '9752'),
  new Singing(8, 73, '10197'),
  new Singing(8, 74, '10514'),
  new Singing(8, 75, '10735'),
  new Singing(8, 76, '11105'),
  new Singing(8, 77, '11295'),
  new Singing(9, 2, '172'),
  new Singing(9, 78, '406'),
  new Singing(9, 79, '687'),
  new Singing(9, 80, '938'),
  new Singing(9, 81, '1241'),
  new Singing(9, 82, '1548'),
  new Singing(9, 83, '1833'),
  new Singing(9, 84, '2130'),
  new Singing(9, 85, '2376'),
  new Singing(10, 86, '151'),
  new Singing(10, 87, '460'),
  new Singing(10, 88, '701'),
  new Singing(10, 89, '919'),
  new Singing(10, 90, '1160'),
  new Singing(10, 91, '1454'),
  new Singing(10, 92, '1676'),
  new Singing(10, 93, '1955'),
  new Singing(10, 94, '2224'),
  new Singing(10, 95, '2420'),
  new Singing(10, 96, '2720'),
  new Singing(10, 6, '3148'),
  new Singing(11, 97, '94'),
  new Singing(11, 98, '310'),
  new Singing(11, 99, '638'),
  new Singing(11, 100, '900'),
  new Singing(11, 125, '1122'),
  new Singing(11, 101, '1377'),
  new Singing(11, 102, '1570'),
  new Singing(11, 103, '1958'),
  new Singing(11, 104, '2215'),
  new Singing(11, 105, '2439'),
  new Singing(11, 106, '2700'),
  new Singing(11, 107, '3002'),
  new Singing(11, 108, '3267'),
  new Singing(11, 33, '3541'),
  new Singing(11, 109, '3792'),
  new Singing(11, 110, '3970'),
  new Singing(11, 111, '4248'),
  new Singing(11, 112, '4507'),
  new Singing(11, 113, '4742'),
  new Singing(11, 100, '5085'),
  new Singing(11, 114, '5309'),
  new Singing(11, 115, '5512'),
  new Singing(11, 116, '5771'),
  new Singing(11, 117, '5959'),
  new Singing(11, 118, '6136'),
  new Singing(11, 119, '6383'),
  new Singing(11, 120, '6649'),
  new Singing(11, 121, '6980'),
  new Singing(11, 122, '7235'),
  new Singing(11, 40, '7476'),
  new Singing(11, 123, '7737'),
  new Singing(11, 92, '8033'),
  new Singing(11, 124, '8310'),
  new Singing(11, 37, '8622'),
  new Singing(11, 85, '9050'),
  new Singing(12, 126, '605'),
  new Singing(12, 127, '1020'),
  new Singing(12, 128, '1915'),
  new Singing(12, 129, '2955'),
  new Singing(12, 130, '3192'),
  new Singing(12, 131, '3407'),
  new Singing(12, 132, '3791'),
  new Singing(12, 133, '4828'),
  new Singing(12, 134, '5520'),
  new Singing(12, 135, '5869'),
]

export function getGenres() {
  let genreNames: { name: string, i: number }[] = [];
  genres.forEach((genre, i) => genreNames.push({ name: genre.name, i: i }));
  genreNames = genreNames.sort((a, b) => a.name > b.name ? 1 : -1);
  return genreNames;
}

export function getTypes() {
  let typeNames: { name: string, i: number }[] = [];
  types.forEach((type, i) => {
    if (type.name != 'その他') {
      typeNames.push({ name: type.name, i: i });
    }
  });
  typeNames = typeNames.sort((a, b) => a.name > b.name ? 1 : -1);
  typeNames.push({ name: 'その他', i: 5 });
  return typeNames;
}

export function getVideos() {
  // データは五十音順になっていないので，ソートしてから選択肢に追加する
  let videoNames: { date: string, title: string, i: number }[] = [];
  videos.forEach((video, i) => videoNames.push({ date: video.date, title: video.title, i: i }));
  videoNames = videoNames.sort((a, b) => {
    if (a.date > b.date) return 1;
    else if (a.date < b.date) return -1;
    else return a.title > b.title ? 1 : -1;
  });
  return videoNames;
}

export function getSongs() {
  let songNames: { title: string, i: number }[] = [];
  songs.forEach((song, i) => songNames.push({ title: song.title, i: i }));
  songNames = songNames.sort((a, b) => a.title > b.title ? 1 : -1);
  return songNames;
}

export function getArtists() {
  let artistNames: { name: string, i: number }[] = [];
  artists.forEach((artist, i) => artistNames.push({ name: artist.name, i: i }));
  artistNames = artistNames.sort((a, b) => a.name > b.name ? 1 : -1);
  return artistNames;
}

export function getUrl(videoId: number) {
  return videos[videoId].id;
}

export function getArtist(songId: number) {
  let artistId = songs[songId].artistId;
  return (artistId == -1 ? '' : artists[artistId].name);
}

export function getArtistId(songId: number) {
  return songs[songId].artistId;
}

export function getSong(songId: number) {
  return songs[songId].title;
}

export function getGenreId(songId: number) {
  return songs[songId].genreId;
}

export function getGenre(songId: number) {
  return genres[songs[songId].genreId].name;
}

export function getTypeId(videoId: number) {
  return videos[videoId].typeId;
}