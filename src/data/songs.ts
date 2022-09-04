import { Song, Genre } from './interfaces';

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
  /* 86 */ { title: 'ETERNAL BLAZE', artistId: 19, genreId: 1 },
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
  /* 136 */ { title: 'ハム太郎とっとこうた', artistId: 83, genreId: 1 },
  /* 137 */ { title: 'POP STAR', artistId: 84, genreId: 4 },
  /* 138 */ { title: '気分上々↑↑', artistId: 85, genreId: 4 },
  /* 139 */ { title: 'マスターピース', artistId: 85, genreId: 1 },
  /* 140 */ { title: '恋', artistId: 86, genreId: 4 },
  /* 141 */ { title: 'アンドロメダ', artistId: 14, genreId: 4 },
  /* 142 */ { title: '裏表ラバーズ', artistId: 87, genreId: 3 },
  /* 143 */ { title: 'Believe', artistId: 88, genreId: 4 },
  /* 144 */ { title: 'TRAIN-TRAIN', artistId: 89, genreId: 9 },
  /* 145 */ { title: '悲しみをやさしさに', artistId: 90, genreId: 1 },
  /* 146 */ { title: 'ラヴァーズ', artistId: 91, genreId: 1 },
  /* 147 */ { title: '初音ミクの消失', artistId: 92, genreId: 3 },
  /* 148 */ { title: 'バラライカ', artistId: 93, genreId: 1 },
  /* 149 */ { title: 'パパンケーキ', artistId: 93, genreId: 1 },
  /* 150 */ { title: 'ラフ・メイカー', artistId: 47, genreId: 4 },
  /* 151 */ { title: '小さな恋のうた', artistId: 94, genreId: 9 },
  /* 152 */ { title: 'God knows...', artistId: 95, genreId: 1 },
  /* 153 */ { title: 'Northern lights', artistId: 22, genreId: 1 },
  /* 154 */ { title: 'Over Soul', artistId: 22, genreId: 1 },
  /* 155 */ { title: 'U&I', artistId: 2, genreId: 1 },
  /* 156 */ { title: '天使にふれたよ!', artistId: 2, genreId: 1 },
  /* 157 */ { title: 'ルミナス', artistId: 54, genreId: 1 },
  /* 158 */ { title: 'ヒトリノ夜', artistId: 36, genreId: 1 },
  /* 159 */ { title: 'さぷらいずぱらだいす！', artistId: 96, genreId: 0 },
  /* 160 */ { title: 'SKILL', artistId: 97, genreId: 5 },
  /* 161 */ { title: 'Rolling star', artistId: 38, genreId: 1 },
  /* 162 */ { title: '脳漿炸裂ガール', artistId: 98, genreId: 3 },
  /* 163 */ { title: '太陽曰く燃えよカオス', artistId: 99, genreId: 1 },
  /* 164 */ { title: '魂のルフラン', artistId: 76, genreId: 1 },
  /* 165 */ { title: 'DANZEN! ふたりはプリキュア', artistId: 100, genreId: 1 },
  /* 166 */ { title: 'モーニングコーヒー', artistId: 29, genreId: 2 },
  /* 167 */ { title: 'Memory 青春の光', artistId: 29, genreId: 2 },
  /* 168 */ { title: '抱いてHOLD ON ME!', artistId: 29, genreId: 2 },
  /* 169 */ { title: '長い夢', artistId: 15, genreId: 4 },
  /* 170 */ { title: 'ローリンガール', artistId: 87, genreId: 3 },
  /* 171 */ { title: 'スノースマイル', artistId: 47, genreId: 4 },
  /* 172 */ { title: 'オンリー ロンリー グローリー', artistId: 47, genreId: 4 },
  /* 173 */ { title: 'アルエ', artistId: 47, genreId: 4 },
  /* 174 */ { title: 'K', artistId: 47, genreId: 4 },
  /* 175 */ { title: 'ランプ', artistId: 47, genreId: 4 },
  /* 176 */ { title: '黒毛和牛上塩タン焼680円', artistId: 101, genreId: 1 },
  /* 177 */ { title: 'キラキラ', artistId: 14, genreId: 4 },
  /* 178 */ { title: 'メランコリック', artistId: 102, genreId: 3 },
  /* 179 */ { title: 'にんじゃりばんばん', artistId: 31, genreId: 6 },
  /* 180 */ { title: 'インベーダーインベーダー', artistId: 31, genreId: 6 },
  /* 181 */ { title: 'ポリリズム', artistId: 103, genreId: 6 },
  /* 182 */ { title: 'ワンルーム・ディスコ', artistId: 103, genreId: 6 },
  /* 183 */ { title: 'チョコレイト・ディスコ', artistId: 103, genreId: 6 },
  /* 184 */ { title: 'ナチュラルに恋して', artistId: 103, genreId: 6 },
  /* 185 */ { title: '不自然なガール', artistId: 103, genreId: 6 },
  /* 186 */ { title: 'COLORS', artistId: 104, genreId: 4 },
  /* 187 */ { title: 'Beautiful World', artistId: 104, genreId: 1 },
  /* 188 */ { title: 'かもめが翔んだ日', artistId: 105, genreId: 4 },
  /* 189 */ { title: '十面相', artistId: 106, genreId: 3 },
  /* 190 */ { title: 'BOY MEETS GIRL', artistId: 107, genreId: 1 },
  /* 191 */ { title: 'キミだけのプリンセス', artistId: 108, genreId: 5 },
  /* 192 */ { title: '紅蓮華', artistId: 57, genreId: 1 },
  /* 193 */ { title: 'モザイクロール', artistId: 44, genreId: 3 },
  /* 194 */ { title: 'SNOW! SNOW! SNOW!', artistId: 59, genreId: 4 },
  /* 195 */ { title: '愛のかたまり', artistId: 59, genreId: 4 },
  /* 196 */ { title: 'うれしい！たのしい！大好き！', artistId: 39, genreId: 4 },
  /* 197 */ { title: '結ンデ開イテ羅刹ト骸', artistId: 109, genreId: 3 },
  /* 198 */ { title: 'シザーハンズ', artistId: 110, genreId: 3 },
  /* 199 */ { title: '天ノ弱', artistId: 111, genreId: 3 },
  /* 200 */ { title: 'Just Be Friends', artistId: 112, genreId: 3 },
  /* 201 */ { title: 'ココロオドル', artistId: 113, genreId: 1 },
  /* 202 */ { title: '狂乱戦記 ～日常ノ神サマ～', artistId: 114, genreId: 1 },
  /* 203 */ { title: 'Gamble Rumble', artistId: 115, genreId: 1 },
  /* 204 */ { title: 'お願い!セニョリータ', artistId: 70, genreId: 4 },
  /* 205 */ { title: 'チャンカパーナ', artistId: 116, genreId: 4 },
  /* 206 */ { title: 'セロリ', artistId: 117, genreId: 4 },
  /* 207 */ { title: 'さわって・変わって', artistId: 118, genreId: 9 },
  /* 208 */ { title: 'ダンデライオン', artistId: 47, genreId: 4 },
  /* 209 */ { title: 'リモコン', artistId: 119, genreId: 3 },
  /* 210 */ { title: '徒花ネクロマンシー', artistId: 120, genreId: 1 },
  /* 211 */ { title: '強い気持ち・強い愛', artistId: 121, genreId: 4 },
  /* 212 */ { title: '檸檬色', artistId: 122, genreId: 2 },
  /* 213 */ { title: 'ダンス ダンス ダンス', artistId: 122, genreId: 2 },
  /* 214 */ { title: 'Hey! みんな元気かい?', artistId: 59, genreId: 4 },
  /* 215 */ { title: '寒い夜だから…', artistId: 71, genreId: 4 },
  /* 216 */ { title: 'CRAZY GONNA CRAZY', artistId: 71, genreId: 4 },
  /* 217 */ { title: 'masquerade', artistId: 71, genreId: 4 },
  /* 218 */ { title: 'Fly Me to the Star', artistId: 123, genreId: 1 },
  /* 219 */ { title: 'くちづけキボンヌ', artistId: 122, genreId: 2 },
  /* 220 */ { title: 'イロドリセカイ', artistId: 122, genreId: 2 },
  /* 221 */ { title: 'あした地球がこなごなになっても', artistId: 122, genreId: 2 },
  /* 222 */ { title: 'ねこ日記', artistId: 51, genreId: 1 },
  /* 223 */ { title: '蒼のエーテル', artistId: 51, genreId: 1 },
  /* 224 */ { title: "What 'bout my star?", artistId: 42, genreId: 1 },
  /* 225 */ { title: 'ダイアモンド クレバス', artistId: 42, genreId: 1 },
  /* 226 */ { title: 'BLUE CLAPPER', artistId: 124, genreId: 0 },
  /* 227 */ { title: '炉心融解', artistId: 125, genreId: 3 },
  /* 228 */ { title: 'クリスマス・イブRap', artistId: 62, genreId: 10 },
  /* 229 */ { title: "Driver's High", artistId: 67, genreId: 9 },
  /* 230 */ { title: '週末Not yet', artistId: 126, genreId: 2 },
  /* 231 */ { title: '波乗りかき氷', artistId: 126, genreId: 2 },
  /* 232 */ { title: 'It Takes Two', artistId: 127, genreId: 4 },
  /* 233 */ { title: '焼け野が原', artistId: 46, genreId: 4 },
  /* 234 */ { title: '島人ぬ宝', artistId: 128, genreId: 4 },
  /* 235 */ { title: 'Dream Fighter', artistId: 103, genreId: 6 },
  /* 236 */ { title: '575', artistId: 103, genreId: 6 },
  /* 237 */ { title: 'ねぇ', artistId: 103, genreId: 6 },
  /* 238 */ { title: '夏祭り', artistId: 129, genreId: 4 },
  /* 239 */ { title: '夏色えがおで1,2,Jump!', artistId: 55, genreId: 1 },
  /* 240 */ { title: "射手座☆午後九時Don't be late", artistId: 42, genreId: 1 },
  /* 241 */ { title: '生きてこそ', artistId: 130, genreId: 4 },
  /* 242 */ { title: '月のワルツ', artistId: 131, genreId: 4 },
  /* 243 */ { title: 'Zzz', artistId: 132, genreId: 1 },
  /* 244 */ { title: '輝夜の城で踊りたい', artistId: 55, genreId: 1 },
  /* 245 */ { title: 'イドラのサーカス', artistId: 133, genreId: 3 },
  /* 246 */ { title: 'ブリキノダンス', artistId: 134, genreId: 3 },
  /* 247 */ { title: 'Shiny Smily Story', artistId: 124, genreId: 0 },
  /* 248 */ { title: 'メンヘラじゃないもん！', artistId: 135, genreId: 3 },
  /* 249 */ { title: '花に亡霊', artistId: 41, genreId: 4 },
  /* 250 */ { title: 'シルシ', artistId: 57, genreId: 1 },
  /* 251 */ { title: 'ルーザーガール', artistId: 136, genreId: 4 },
  /* 252 */ { title: 'ヘッドライト・テールライト', artistId: 11, genreId: 4 },
  /* 253 */ { title: 'ボッカデラベリタ', artistId: 137, genreId: 3 },
  /* 254 */ { title: 'ワールズエンド・ダンスホール', artistId: 87, genreId: 3 },
  /* 255 */ { title: '初音ミクの暴走', artistId: 92, genreId: 3 },
  /* 256 */ { title: 'LEVEL5-judgelight-', artistId: 1, genreId: 1 },
  /* 257 */ { title: "I can't stop my love for you♥", artistId: 138, genreId: 1 },
  /* 258 */ { title: 'ギブス', artistId: 65, genreId: 4 },
  /* 259 */ { title: 'レーザービーム', artistId: 103, genreId: 6 },
  /* 260 */ { title: '修羅場', artistId: 20, genreId: 4 },
  /* 261 */ { title: 'エンヴィーベイビー', artistId: 140, genreId: 3 },
  /* 262 */ { title: 'ロキ', artistId: 141, genreId: 3 },
  /* 263 */ { title: 'シャルル', artistId: 142, genreId: 3 },
  /* 264 */ { title: 'パンダヒーロー', artistId: 109, genreId: 3 },
  /* 265 */ { title: '1/2', artistId: 143, genreId: 1 },
  /* 266 */ { title: '夜に駆ける', artistId: 144, genreId: 4 },
  /* 267 */ { title: 'ゴーストルール', artistId: 44, genreId: 3 },
  /* 268 */ { title: 'ヒバナ', artistId: 44, genreId: 3 },
  /* 269 */ { title: '小夜子', artistId: 141, genreId: 3 },
  /* 270 */ { title: 'ドーナツホール', artistId: 109, genreId: 3 },
  /* 271 */ { title: '砂の惑星', artistId: 109, genreId: 3 },
  /* 272 */ { title: 'Shangri-La', artistId: 145, genreId: 1 },
  /* 273 */ { title: 'oath sign', artistId: 57, genreId: 1 },
  /* 274 */ { title: 'ギミー！レボリューション', artistId: 146, genreId: 1 },
  /* 275 */ { title: 'シリウス', artistId: 147, genreId: 1 },
  /* 276 */ { title: 'Os-宇宙人', artistId: 148, genreId: 1 },
  /* 277 */ { title: '恋は渾沌の隷也', artistId: 99, genreId: 1 },
  /* 278 */ { title: 'はっぴぃ にゅう にゃあ', artistId: 149, genreId: 1 },
  /* 279 */ { title: '熱烈歓迎わんだーらんど', artistId: 150, genreId: 1 },
  /* 280 */ { title: "bloooomin'", artistId: 151, genreId: 1 },
  /* 281 */ { title: '恋愛サーキュレーション', artistId: 152, genreId: 1 },
  /* 282 */ { title: '消せない罪', artistId: 153, genreId: 1 },
  /* 283 */ { title: '乙女解剖', artistId: 44, genreId: 3 },
  /* 284 */ { title: '鳥の詩', artistId: 154, genreId: 5 },
  /* 285 */ { title: 'ショートケーキのサンバ', artistId: 155, genreId: 4 },
  /* 286 */ { title: '先生のお気に入り', artistId: 155, genreId: 4 },
  /* 287 */ { title: 'マカロニ', artistId: 103, genreId: 6 },
  /* 288 */ { title: 'JOY', artistId: 15, genreId: 4 },
  /* 289 */ { title: 'DISCOTHEQUE', artistId: 19, genreId: 1 },
  /* 290 */ { title: 'fancy baby doll', artistId: 156, genreId: 4 },
  /* 291 */ { title: 'いちごコンプリート', artistId: 157, genreId: 1 },
  /* 292 */ { title: 'ラブノベルス', artistId: 158, genreId: 5 },
  /* 293 */ { title: '正しい街', artistId: 65, genreId: 4 },
  /* 294 */ { title: '閃光少女', artistId: 20, genreId: 9 },
  /* 295 */ { title: '生きていたんだよな', artistId: 159, genreId: 4 },
  /* 296 */ { title: 'マトリョシカ', artistId: 109, genreId: 3 },
  /* 297 */ { title: 'GO MY WAY!!', artistId: -1, genreId: 7 },
  /* 298 */ { title: 'DRIVE US CRAZY', artistId: 160, genreId: 5 },
  /* 299 */ { title: "EXPOSE 'Burn out!!!'", artistId: 160, genreId: 5 },
  /* 300 */ { title: 'LIFE', artistId: 38, genreId: 1 },
  /* 301 */ { title: '恋はスリル、ショック、サスペンス', artistId: 138, genreId: 1 },
  /* 302 */ { title: '宙船', artistId: 161, genreId: 4 },
  /* 303 */ { title: 'staple stable', artistId: 162, genreId: 1 },
  /* 304 */ { title: '寝・逃・げでリセット!', artistId: 163, genreId: 1 },
  /* 305 */ { title: 'シスター', artistId: 36, genreId: 4 },
  /* 306 */ { title: '変わらないもの', artistId: 164, genreId: 1 },
  /* 307 */ { title: '最強パレパレード', artistId: 165, genreId: 1 },
  /* 308 */ { title: '青空のラプソディ', artistId: 166, genreId: 1 },
  /* 309 */ { title: 'ねねねねねねねね!大爆走', artistId: 167, genreId: 0 },
  /* 310 */ { title: 'Say!ファンファーレ!', artistId: 168, genreId: 0 },
  /* 311 */ { title: '廻廻奇譚', artistId: 169, genreId: 1 },
  /* 312 */ { title: 'LOVE&JOY', artistId: 170, genreId: 4 },
  /* 313 */ { title: 'カルマ', artistId: 47, genreId: 5 },
  /* 314 */ { title: '今宵はHalloween Night!', artistId: 124, genreId: 0 },
  /* 315 */ { title: '至上主義アドトラック', artistId: 124, genreId: 0 },
  /* 316 */ { title: 'アゲハ蝶', artistId: 36, genreId: 4 },
  /* 317 */ { title: 'ヴィーナスとジーザス', artistId: 171, genreId: 1 },
  /* 318 */ { title: 'ヴァンパイア', artistId: 44, genreId: 3 },
  /* 319 */ { title: 'アンダーカバー', artistId: 44, genreId: 3 },
  /* 320 */ { title: 'ロストマン', artistId: 47, genreId: 4 },
  /* 321 */ { title: 'Do it! Now', artistId: 29, genreId: 2 },
  /* 322 */ { title: 'うまぴょい伝説', artistId: 172, genreId: 5 },
  /* 323 */ { title: 'Lost my music', artistId: 173, genreId: 1 },
  /* 324 */ { title: 'ハネウマライダー', artistId: 36, genreId: 4 },
  /* 325 */ { title: '金曜日のおはよう', artistId: 174, genreId: 3 },
  /* 326 */ { title: '木綿のハンカチーフ', artistId: 175, genreId: 4 },
  /* 327 */ { title: '爆笑', artistId: 176, genreId: 4 },
  /* 328 */ { title: '誇り高きアイドル', artistId: 177, genreId: 4 },
  /* 329 */ { title: '夏の幻', artistId: 178, genreId: 1 },
  /* 330 */ { title: '輪舞-revolution', artistId: 179, genreId: 1 },
  /* 331 */ { title: '深愛', artistId: 19, genreId: 1 },
  /* 332 */ { title: '白い雪のプリンセスは', artistId: 180, genreId: 3 },
  /* 333 */ { title: '可愛くなりたい', artistId: 174, genreId: 4 },
  /* 334 */ { title: '花瓶に触れた', artistId: 142, genreId: 3 },
  /* 335 */ { title: 'ハロ／ハワユ', artistId: 181, genreId: 3 },
  /* 336 */ { title: '妄想感傷代償連盟', artistId: 44, genreId: 3 },
  /* 337 */ { title: '回レ!雪月花', artistId: 182, genreId: 1 },
  /* 338 */ { title: 'ジェラシス', artistId: 183, genreId: 3 },
  /* 339 */ { title: 'ピカピカまっさいチュウ', artistId: 184, genreId: 1 },
  /* 340 */ { title: 'ポケモンはらはらリレー', artistId: 185, genreId: 1 },
  /* 341 */ { title: 'お願いマッスル', artistId: 186, genreId: 1 },
  /* 342 */ { title: 'ROCK-mode', artistId: 57, genreId: 4 },
  /* 343 */ { title: 'モラトリアムダンスフロア', artistId: 146, genreId: 4 },
  /* 344 */ { title: '吉原ラメント', artistId: 187, genreId: 3 },
  /* 345 */ { title: 'メランコリニスタ', artistId: 15, genreId: 4 },
  /* 346 */ { title: 'ドラマチック', artistId: 15, genreId: 1 },
  /* 347 */ { title: 'CONTRADICTION', artistId: 81, genreId: 2 },
  /* 348 */ { title: 'Suspect', artistId: 124, genreId: 0 },
  /* 349 */ { title: '檄!帝国華撃団', artistId: 188, genreId: 5 },
  /* 350 */ { title: '不死鳥のフランメ', artistId: 189, genreId: 1 },
  /* 351 */ { title: 'Blessing', artistId: 190, genreId: 3 },
  /* 352 */ { title: 'Mr.Music', artistId: 191, genreId: 3 },
  /* 353 */ { title: 'あの日タイムマシン', artistId: 192, genreId: 1 },
  /* 354 */ { title: 'Sparkling Daydream', artistId: 193, genreId: 1 },
  /* 355 */ { title: 'Anniversary', artistId: 59, genreId: 4 },
  /* 356 */ { title: 'キラメキライダー', artistId: 124, genreId: 0 },
  /* 357 */ { title: 'SAKURAスキップ', artistId: 194, genreId: 1 },
  /* 358 */ { title: 'ぽ', artistId: 0, genreId: 0 },
  /* 359 */ { title: 'シル・ヴ・プレジデント', artistId: 195, genreId: 4 },
  /* 360 */ { title: '才悩人応援歌', artistId: 47, genreId: 4 },
  /* 361 */ { title: 'Go Tight!', artistId: 56, genreId: 1 },
  /* 362 */ { title: 'ふがいないや', artistId: 15, genreId: 4 },
  /* 363 */ { title: '光と影のロマン', artistId: 196, genreId: 1 },
  /* 364 */ { title: 'チューリングラブ feat.Sou', artistId: 197, genreId: 1 },
  /* 365 */ { title: 'インスタントヘヴン feat.Eve', artistId: 197, genreId: 4 },
  /* 366 */ { title: 'ワニとシャンプー', artistId: 81, genreId: 2 },
  /* 367 */ { title: 'Get along', artistId: 198, genreId: 1 },
  /* 368 */ { title: 'シンデレラ', artistId: 44, genreId: 3 },
  /* 369 */ { title: '歌舞伎町の女王', artistId: 65, genreId: 4 },
  /* 370 */ { title: 'ANGELUS -アンジェラス-', artistId: 199, genreId: 1 },
  /* 371 */ { title: 'インフィニティ', artistId: 42, genreId: 1 },
  /* 372 */ { title: 'Z女戦争', artistId: 81, genreId: 2 },
  /* 373 */ { title: 'Jungle P', artistId: 200, genreId: 1 },
  /* 374 */ { title: 'RUN!RUN!RUN!', artistId: 201, genreId: 1 },
  /* 375 */ { title: '真赤な誓い', artistId: 202, genreId: 1 },
  /* 376 */ { title: '私、アイドル宣言', artistId: 203, genreId: 1 },
  /* 377 */ { title: 'ファンサ', artistId: 204, genreId: 1 },
  /* 378 */ { title: 'エヴァーブルー', artistId: 0, genreId: 0 },
  /* 379 */ { title: '夜のピエロ', artistId: 205, genreId: 4 },
  /* 380 */ { title: 'Unison', artistId: 206, genreId: 6 },
  /* 381 */ { title: 'うっせぇわ', artistId: 205, genreId: 4 },
  /* 382 */ { title: '踊', artistId: 205, genreId: 4 },
  /* 383 */ { title: 'ヒプノシスマイク -Division Battle Anthem-', artistId: 207, genreId: 1 },
  /* 384 */ { title: 'フォニイ', artistId: 208, genreId: 3 },
  /* 385 */ { title: 'でんでんぱっしょん', artistId: 122, genreId: 2 },
  /* 386 */ { title: '紅', artistId: 209, genreId: 9 },
  /* 387 */ { title: 'おつかれサマー!', artistId: 122, genreId: 2 },
  /* 388 */ { title: 'Pastel Tea Time', artistId: 0, genreId: 0 },
  /* 389 */ { title: '怪物さん feat.あいみょん', artistId: 84, genreId: 4 },
  /* 390 */ { title: 'トンデモワンダーズ', artistId: 210, genreId: 3 },
  /* 391 */ { title: 'ハレ晴レユカイ', artistId: 165, genreId: 1 },
  /* 392 */ { title: 'W.W.D', artistId: 122, genreId: 2 },
  /* 393 */ { title: 'Future Diver', artistId: 122, genreId: 2 },
  /* 394 */ { title: '君の神話～アクエリオン第二章', artistId: 212, genreId: 1 },
  /* 395 */ { title: '童話迷宮', artistId: 156, genreId: 1 },
  /* 396 */ { title: '冬へと走りだすお!', artistId: 122, genreId: 2 },
  /* 397 */ { title: '猛烈宇宙交響曲・第七楽章「無限の愛」', artistId: 81, genreId: 2 },
  /* 398 */ { title: 'リアルワールド', artistId: 213, genreId: 1 },
  /* 399 */ { title: '集結の園へ', artistId: 22, genreId: 1 },
  /* 400 */ { title: 'インモラリスト', artistId: 214, genreId: 1 },
  /* 401 */ { title: 'サクラあっぱれーしょん', artistId: 122, genreId: 2 },
  /* 402 */ { title: 'おもかげ', artistId: 22, genreId: 1 },
  /* 403 */ { title: '心', artistId: 20, genreId: 9 },
  /* 404 */ { title: 'KING', artistId: 140, genreId: 3 },
  /* 405 */ { title: 'Candy-Go-Round', artistId: 124, genreId: 0 },
  /* 406 */ { title: 'Ahoy!! 我ら宝鐘海賊団☆', artistId: 206, genreId: 0 },
  /* 407 */ { title: '失礼しますが、RIP♡', artistId: 215, genreId: 0 },
  /* 408 */ { title: '百花繚乱花吹雪', artistId: 124, genreId: 0 },
  /* 409 */ { title: 'ぺこらんだむぶれいん!', artistId: 216, genreId: 0 },
  /* 410 */ { title: 'STARDUST SONG', artistId: 124, genreId: 0 },
  /* 411 */ { title: 'シネマ', artistId: 217, genreId: 3 },
  /* 412 */ { title: 'Over The Future', artistId: 218, genreId: 1 },
  /* 413 */ { title: '神っぽいな', artistId: 219, genreId: 3 },
  /* 414 */ { title: 'You & Me', artistId: 156, genreId: 4 },
  /* 415 */ { title: 'アシタハアタシノカゼガフク', artistId: 220, genreId: 1 },
  /* 416 */ { title: 'ミルククラウン・オン・ソーネチカ', artistId: 221, genreId: 3 },
  /* 417 */ { title: 'Mugen', artistId: 36, genreId: 4 },
  /* 418 */ { title: 'ジョバイロ', artistId: 36, genreId: 4 },
  /* 419 */ { title: '感電', artistId: 222, genreId: 4 },
  /* 420 */ { title: 'アニマル', artistId: 3, genreId: 4 },
  /* 421 */ { title: '夢見る空へ', artistId: 124, genreId: 0 },
  /* 422 */ { title: '桜ノ雨', artistId: 190, genreId: 3 },
  /* 423 */ { title: 'シーソーゲーム 〜勇敢な恋の歌〜', artistId: 223, genreId: 4 },
  /* 424 */ { title: 'プリンセスでんぱパワー！シャインオン！', artistId: 122, genreId: 2 },
  /* 425 */ { title: 'キメラ', artistId: 44, genreId: 3 },
  /* 426 */ { title: 'INTERNET OVERDOSE', artistId: 224, genreId: 5 },
  /* 427 */ { title: '青のり', artistId: 225, genreId: 4 },
  /* 428 */ { title: 'Smile & Go!!', artistId: 226, genreId: 0 },
  /* 429 */ { title: 'I SAY YES', artistId: 227, genreId: 1 },
  /* 430 */ { title: 'JOINT', artistId: 228, genreId: 1 },
  /* 431 */ { title: '最強○×計画', artistId: 229, genreId: 1 },
  /* 432 */ { title: '楯', artistId: 230, genreId: 4 },
  /* 433 */ { title: '卵とじ', artistId: 230, genreId: 4 },
  /* 434 */ { title: 'ワンダードライブ', artistId: 231, genreId: 1 },
  /* 435 */ { title: 'ハッピー☆マテリアル', artistId: 232, genreId: 1 },
  /* 436 */ { title: '桜の時', artistId: 14, genreId: 4 },
  /* 437 */ { title: 'MOON PRIDE', artistId: 81, genreId: 1 },
  /* 438 */ { title: '群青', artistId: 144, genreId: 4 },
  /* 439 */ { title: 'SPACE! WAVE! AKIBA-POP!!', artistId: 229, genreId: 4 },
  /* 440 */ { title: 'Empress', artistId: 233, genreId: 3 },
  /* 441 */ { title: 'ペルソナ', artistId: 0, genreId: 0 },
  /* 442 */ { title: 'ベノム', artistId: 234, genreId: 3 },
  /* 443 */ { title: 'Share The World', artistId: 235, genreId: 1 },
  /* 444 */ { title: '光るなら', artistId: 236, genreId: 1 },
  /* 445 */ { title: '星空の下で', artistId: 237, genreId: 4 },
  /* 446 */ { title: 'グランドエスケープ', artistId: 238, genreId: 1 },
  /* 447 */ { title: 'サイキョウチックポルカ', artistId: 0, genreId: 0 },
  /* 448 */ { title: '屋根裏のエピローグ', artistId: 0, genreId: 0 },
  /* 449 */ { title: '飛んでK！ホロライブサマー', artistId: 124, genreId: 0 },
  /* 450 */ { title: '怪物', artistId: 144, genreId: 1 },
  /* 451 */ { title: 'ここでキスして。', artistId: 65, genreId: 4 },
  /* 452 */ { title: 'ダーリンダンス', artistId: 234, genreId: 3 },
  /* 453 */ { title: '脱法ロック', artistId: 133, genreId: 3 },
  /* 454 */ { title: 'ホロメン音頭', artistId: 124, genreId: 0 },
];

export const genres: Genre[] = [
  /*  0 */ { name: 'VTuber' },
  /*  1 */ { name: 'アニメ' },
  /*  2 */ { name: 'アイドル' },
  /*  3 */ { name: 'ボカロ系' },
  /*  4 */ { name: 'J-POP' },
  /*  5 */ { name: 'ゲーム' },
  /*  6 */ { name: 'エレクトロニック' },
  /*  7 */ { name: 'アイドルマスター' },
  /*  8 */ { name: '合唱曲' },
  /*  9 */ { name: 'ロック' },
  /* 10 */ { name: 'ヒップホップ' },
  /* 11 */ { name: 'アイカツ！' },
];
