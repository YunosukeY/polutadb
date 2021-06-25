import { Artist } from './interfaces';

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
  /* 42 */ { name: "シェリル・ノーム starring May'n" },
  /* 43 */ { name: '40㍍P' },
  /* 44 */ { name: 'DECO*27' },
  /* 45 */ { name: '一青窈' },
  /* 46 */ { name: 'Cocco' },
  /* 47 */ { name: 'BUMP OF CHICKEN' },
  /* 48 */ { name: 'THE BOOM' },
  /* 49 */ { name: 'SUPER☆GiRLS' },
  /* 50 */ { name: 'ASIAN KUNG-FU GENERATION' },
  /* 51 */ { name: 'ランカ・リー=中島愛' },
  /* 52 */ { name: 'doriko' },
  /* 53 */ { name: '泉こなた, 柊かがみ, 柊つかさ, 高良みゆき' },
  /* 54 */ { name: 'ClariS' },
  /* 55 */ { name: "μ's" },
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
  /* 67 */ { name: "L'Arc〜en〜Ciel" },
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
  /* 79 */ { name: "シェリル・ノーム starring May'n／ランカ・リー＝中島 愛" },
  /* 80 */ { name: 'ZONE' },
  /* 81 */ { name: 'ももいろクローバーZ' },
  /* 82 */ { name: 'STAR☆ANIS' },
  /* 83 */ { name: 'ハムちゃんず' },
  /* 84 */ { name: '平井堅' },
  /* 85 */ { name: 'mihimaru GT' },
  /* 86 */ { name: '星野源' },
  /* 87 */ { name: 'wowaka' },
  /* 88 */ { name: 'Folder5' },
  /* 89 */ { name: 'THE BLUE HEARTS' },
  /* 90 */ { name: 'little by little' },
  /* 91 */ { name: '7!!' },
  /* 92 */ { name: 'cosMo@暴走P' },
  /* 93 */ { name: '月島きらり starring 久住小春 (モーニング娘。)' },
  /* 94 */ { name: 'MONGOL800' },
  /* 95 */ { name: '平野綾' },
  /* 96 */ { name: 'どっきりラビリンス' },
  /* 97 */ { name: 'JAM Project' },
  /* 98 */ { name: 'れるりり' },
  /* 99 */ { name: '後ろから這いより隊G' },
  /* 100 */ { name: '五條真由美' },
  /* 101 */ { name: '大塚愛' },
  /* 102 */ { name: 'Junky' },
  /* 103 */ { name: 'Perfume' },
  /* 104 */ { name: '宇多田ヒカル' },
  /* 105 */ { name: '渡辺真知子' },
  /* 106 */ { name: 'YM' },
  /* 107 */ { name: 'Prizmmy☆' },
  /* 108 */ { name: 'AZKi・尾丸ポルカ' },
  /* 109 */ { name: 'ハチ' },
  /* 110 */ { name: 'Nem' },
  /* 111 */ { name: '164' },
  /* 112 */ { name: 'Dixie Flatline' },
  /* 113 */ { name: 'nobodyknows+' },
  /* 114 */ { name: '乱崎凶華(藤村歩)' },
  /* 115 */ { name: 'm.o.v.e' },
  /* 116 */ { name: 'NEWS' },
  /* 117 */ { name: 'SMAP' },
  /* 118 */ { name: 'スピッツ' },
  /* 119 */ { name: 'じーざすP' },
  /* 120 */ { name: 'フランシュシュ' },
  /* 121 */ { name: '小沢健二' },
  /* 122 */ { name: 'でんぱ組.inc' },
  /* 123 */ { name: 'スタァライト九九組' },
  /* 124 */ { name: 'hololive IDOL PROJECT' },
  /* 125 */ { name: 'iroha' },
  /* 126 */ { name: 'Not yet' },
  /* 127 */ { name: 'CHEMISTRY' },
  /* 128 */ { name: 'BEGIN' },
  /* 129 */ { name: "JITTERIN'JINN" },
  /* 130 */ { name: 'Kiroro' },
  /* 131 */ { name: '諫山実生' },
  /* 132 */ { name: '佐咲紗花' },
  /* 133 */ { name: 'Neru' },
  /* 134 */ { name: '日向電工' },
  /* 135 */ { name: '勇魚' },
  /* 136 */ { name: '真っ白なキャンバス' },
  /* 137 */ { name: '柊キライ' },
  /* 138 */ { name: '愛内里菜' },
  /* 139 */ { name: '宮崎歩' },
  /* 140 */ { name: 'Kanaria' },
  /* 141 */ { name: 'みきとP' },
  /* 142 */ { name: 'バルーン' },
  /* 143 */ { name: '川本真琴' },
  /* 144 */ { name: 'YOASOBI' },
  /* 145 */ { name: 'angela' },
  /* 146 */ { name: '内田真礼' },
  /* 147 */ { name: '藍井エイル' },
  /* 148 */ { name: 'エリオをかまってちゃん' },
  /* 149 */ { name: '芹沢文乃(伊藤かな恵)&梅ノ森千世(井口裕香)&霧谷希(竹達彩奈)' },
  /* 150 */ { name: '宮永咲(植田佳奈),原村和(小清水亜美),片岡優希(釘宮理恵),染谷まこ(白石涼子),竹井久(伊藤静)' },
  /* 151 */ { name: 'Little Non' },
  /* 152 */ { name: '千石撫子(花澤香菜)' },
  /* 153 */ { name: '北出菜奈' },
  /* 154 */ { name: 'Lia' },
  /* 155 */ { name: '小島麻由美' },
  /* 156 */ { name: '田村ゆかり' },
  /* 157 */ { name: '千佳(千葉紗子)/美羽(折笠富美子)/茉莉(川澄綾子)/アナ(能登麻美子)' },
  /* 158 */ { name: 'BiBi' },
  /* 159 */ { name: 'あいみょん' },
  /* 160 */ { name: 'RAISE A SUILEN' },
  /* 161 */ { name: 'TOKIO' },
  /* 162 */ { name: '戦場ヶ原ひたぎ(斎藤千和)' },
  /* 163 */ { name: '柊つかさ(福原香織)' },
  /* 164 */ { name: '奥華子' },
  /* 165 */ { name: '平野綾、茅原実里、後藤邑子' },
  /* 166 */ { name: 'fhána' },
  /* 167 */ { name: '桃鈴ねね' },
  /* 168 */ { name: '白上フブキ' },
  /* 169 */ { name: 'Eve' },
  /* 170 */ { name: '木村由姫' },
  /* 171 */ { name: 'やくしまるえつこ' },
  /* 172 */ { name: 'ウマ娘 プリティーダービー' },
  /* 173 */ { name: '涼宮ハルヒ(平野綾)' },
  /* 174 */ { name: 'HoneyWorks' },
  /* 175 */ { name: '太田裕美' },
  /* 176 */ { name: 'syudou' },
];
