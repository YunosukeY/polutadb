import { Singing } from './interfaces';

class Iota {
  static count = 0;
  static get() {
    return this.count++;
  }
}

// 時系列順に登録？
export const singings: Singing[] = [
  new Singing(Iota.get(), 1, 0, 0, 0, false),
  new Singing(Iota.get(), 2, 7, 0, 0, false),
  new Singing(Iota.get(), 0, 0, 272, 0, false),
  new Singing(Iota.get(), 0, 1, 377),
  new Singing(Iota.get(), 0, 2, 774),
  new Singing(Iota.get(), 0, 3, 1064),
  new Singing(Iota.get(), 0, 4, 1410),
  new Singing(Iota.get(), 0, 5, 1755),
  new Singing(Iota.get(), 0, 6, 2167),
  new Singing(Iota.get(), 3, 8, 35, 1, false),
  new Singing(Iota.get(), 4, 9, 0, 1, false),
  new Singing(Iota.get(), 6, 11, 2206),
  new Singing(Iota.get(), 6, 12, 2668),
  new Singing(Iota.get(), 6, 13, 3266),
  new Singing(Iota.get(), 5, 10, 3, 1, false),
  new Singing(Iota.get(), 7, 14, 408),
  new Singing(Iota.get(), 7, 15, 653),
  new Singing(Iota.get(), 7, 16, 1089),
  new Singing(Iota.get(), 7, 17, 1390),
  new Singing(Iota.get(), 7, 18, 1762),
  new Singing(Iota.get(), 7, 19, 2023),
  new Singing(Iota.get(), 7, 20, 2346),
  new Singing(Iota.get(), 7, 21, 2747),
  new Singing(Iota.get(), 7, 22, 3045),
  new Singing(Iota.get(), 7, 23, 3726),
  new Singing(Iota.get(), 7, 24, 3967),
  new Singing(Iota.get(), 7, 25, 4252),
  new Singing(Iota.get(), 7, 26, 4592),
  new Singing(Iota.get(), 7, 27, 4888),
  new Singing(Iota.get(), 7, 28, 5147),
  new Singing(Iota.get(), 7, 29, 5415),
  new Singing(Iota.get(), 7, 30, 5811),
  new Singing(Iota.get(), 7, 31, 6044),
  new Singing(Iota.get(), 7, 32, 6390),
  new Singing(Iota.get(), 7, 33, 6642),
  new Singing(Iota.get(), 7, 34, 6920),
  new Singing(Iota.get(), 7, 35, 7161),
  new Singing(Iota.get(), 7, 36, 7274),
  new Singing(Iota.get(), 7, 37, 7564),
  new Singing(Iota.get(), 7, 38, 7995),
  new Singing(Iota.get(), 8, 39, 230, 1, true),
  new Singing(Iota.get(), 8, 40, 528),
  new Singing(Iota.get(), 8, 41, 829),
  new Singing(Iota.get(), 8, 42, 1150),
  new Singing(Iota.get(), 8, 43, 1452),
  new Singing(Iota.get(), 8, 44, 1762),
  new Singing(Iota.get(), 8, 45, 2116),
  new Singing(Iota.get(), 8, 46, 2441),
  new Singing(Iota.get(), 8, 47, 2664),
  new Singing(Iota.get(), 8, 48, 2894),
  new Singing(Iota.get(), 8, 49, 3204),
  new Singing(Iota.get(), 8, 50, 3512),
  new Singing(Iota.get(), 8, 51, 3772),
  new Singing(Iota.get(), 8, 52, 4006),
  new Singing(Iota.get(), 8, 53, 4334),
  new Singing(Iota.get(), 8, 54, 4628),
  new Singing(Iota.get(), 8, 55, 4813),
  new Singing(Iota.get(), 8, 56, 5035),
  new Singing(Iota.get(), 8, 57, 5287),
  new Singing(Iota.get(), 8, 58, 5633),
  new Singing(Iota.get(), 8, 59, 5947),
  new Singing(Iota.get(), 8, 60, 6293),
  new Singing(Iota.get(), 8, 61, 6566),
  new Singing(Iota.get(), 8, 62, 6809),
  new Singing(Iota.get(), 8, 63, 7287),
  new Singing(Iota.get(), 8, 64, 7595),
  new Singing(Iota.get(), 8, 65, 7889),
  new Singing(Iota.get(), 8, 66, 8142),
  new Singing(Iota.get(), 8, 67, 8415),
  new Singing(Iota.get(), 8, 68, 8727),
  new Singing(Iota.get(), 8, 69, 9050, 0, false),
  new Singing(Iota.get(), 8, 70, 9190),
  new Singing(Iota.get(), 8, 71, 9448),
  new Singing(Iota.get(), 8, 72, 9752),
  new Singing(Iota.get(), 8, 73, 10197),
  new Singing(Iota.get(), 8, 74, 10514),
  new Singing(Iota.get(), 8, 75, 10735),
  new Singing(Iota.get(), 8, 76, 11105),
  new Singing(Iota.get(), 8, 77, 11295),
  new Singing(Iota.get(), 16, 51, 7028),
  new Singing(Iota.get(), 16, 0, 7253, 0, false),
  new Singing(Iota.get(), 9, 2, 172),
  new Singing(Iota.get(), 9, 78, 406),
  new Singing(Iota.get(), 9, 79, 687),
  new Singing(Iota.get(), 9, 80, 938),
  new Singing(Iota.get(), 9, 81, 1241),
  new Singing(Iota.get(), 9, 82, 1548),
  new Singing(Iota.get(), 9, 83, 1833),
  new Singing(Iota.get(), 9, 84, 2130),
  new Singing(Iota.get(), 9, 85, 2376),
  new Singing(Iota.get(), 10, 86, 151),
  new Singing(Iota.get(), 10, 87, 460),
  new Singing(Iota.get(), 10, 88, 701),
  new Singing(Iota.get(), 10, 89, 919),
  new Singing(Iota.get(), 10, 90, 1160),
  new Singing(Iota.get(), 10, 91, 1454),
  new Singing(Iota.get(), 10, 92, 1676),
  new Singing(Iota.get(), 10, 93, 1955),
  new Singing(Iota.get(), 10, 94, 2224),
  new Singing(Iota.get(), 10, 95, 2420),
  new Singing(Iota.get(), 10, 96, 2720),
  new Singing(Iota.get(), 10, 6, 3148),
  new Singing(Iota.get(), 11, 97, 94),
  new Singing(Iota.get(), 11, 98, 310),
  new Singing(Iota.get(), 11, 99, 638),
  new Singing(Iota.get(), 11, 100, 900),
  new Singing(Iota.get(), 11, 125, 1122),
  new Singing(Iota.get(), 11, 101, 1377),
  new Singing(Iota.get(), 11, 102, 1570),
  new Singing(Iota.get(), 11, 103, 1958),
  new Singing(Iota.get(), 11, 104, 2215),
  new Singing(Iota.get(), 11, 105, 2439),
  new Singing(Iota.get(), 11, 106, 2700),
  new Singing(Iota.get(), 11, 107, 3002),
  new Singing(Iota.get(), 11, 108, 3267),
  new Singing(Iota.get(), 11, 33, 3541),
  new Singing(Iota.get(), 11, 109, 3792),
  new Singing(Iota.get(), 11, 110, 3970),
  new Singing(Iota.get(), 11, 111, 4248),
  new Singing(Iota.get(), 11, 112, 4507),
  new Singing(Iota.get(), 11, 113, 4742),
  new Singing(Iota.get(), 11, 100, 5085),
  new Singing(Iota.get(), 11, 114, 5309),
  new Singing(Iota.get(), 11, 115, 5512),
  new Singing(Iota.get(), 11, 116, 5771),
  new Singing(Iota.get(), 11, 117, 5959),
  new Singing(Iota.get(), 11, 118, 6136),
  new Singing(Iota.get(), 11, 119, 6383),
  new Singing(Iota.get(), 11, 120, 6649),
  new Singing(Iota.get(), 11, 121, 6980),
  new Singing(Iota.get(), 11, 122, 7235),
  new Singing(Iota.get(), 11, 40, 7476),
  new Singing(Iota.get(), 11, 123, 7737),
  new Singing(Iota.get(), 11, 92, 8033),
  new Singing(Iota.get(), 11, 124, 8310),
  new Singing(Iota.get(), 11, 37, 8622),
  new Singing(Iota.get(), 11, 85, 9050),
  new Singing(Iota.get(), 12, 126, 605, 1, false),
  new Singing(Iota.get(), 12, 127, 1020, 1, false),
  new Singing(Iota.get(), 12, 128, 1915, 1, false),
  new Singing(Iota.get(), 12, 129, 2955, 1, false),
  new Singing(Iota.get(), 12, 130, 3192, 1, false),
  new Singing(Iota.get(), 12, 131, 3407, 1, false),
  new Singing(Iota.get(), 12, 132, 3791, 1, false),
  new Singing(Iota.get(), 12, 133, 4828, 1, false),
  new Singing(Iota.get(), 12, 134, 5520, 1, true),
  new Singing(Iota.get(), 12, 135, 5869, 1, false),
  new Singing(Iota.get(), 13, 136, 541, 0, false),
  new Singing(Iota.get(), 13, 137, 630),
  new Singing(Iota.get(), 13, 138, 998),
  new Singing(Iota.get(), 13, 139, 1232),
  new Singing(Iota.get(), 13, 158, 1562),
  new Singing(Iota.get(), 13, 140, 1824),
  new Singing(Iota.get(), 13, 141, 2072),
  new Singing(Iota.get(), 13, 142, 2347),
  new Singing(Iota.get(), 13, 143, 2625),
  new Singing(Iota.get(), 13, 144, 2850),
  new Singing(Iota.get(), 13, 145, 3090),
  new Singing(Iota.get(), 13, 146, 3338),
  new Singing(Iota.get(), 13, 147, 3558),
  new Singing(Iota.get(), 13, 148, 3855),
  new Singing(Iota.get(), 13, 149, 4068),
  new Singing(Iota.get(), 13, 150, 4436),
  new Singing(Iota.get(), 13, 151, 4661),
  new Singing(Iota.get(), 13, 152, 4894),
  new Singing(Iota.get(), 13, 153, 5164),
  new Singing(Iota.get(), 13, 154, 5370),
  new Singing(Iota.get(), 13, 155, 5602),
  new Singing(Iota.get(), 13, 156, 5876),
  new Singing(Iota.get(), 13, 157, 6353),
  new Singing(Iota.get(), 13, 83, 6596),
  new Singing(Iota.get(), 14, 159, 0),
  new Singing(Iota.get(), 15, 160, 37),
  new Singing(Iota.get(), 15, 51, 380),
  new Singing(Iota.get(), 15, 99, 603),
  new Singing(Iota.get(), 15, 2, 862),
  new Singing(Iota.get(), 15, 29, 1088),
  new Singing(Iota.get(), 15, 161, 1352),
  new Singing(Iota.get(), 15, 16, 1533),
  new Singing(Iota.get(), 15, 3, 1828),
  new Singing(Iota.get(), 15, 162, 2104),
  new Singing(Iota.get(), 15, 163, 2299),
  new Singing(Iota.get(), 15, 164, 2531),
  new Singing(Iota.get(), 15, 119, 2835),
  new Singing(Iota.get(), 15, 92, 3082),
  new Singing(Iota.get(), 15, 123, 3348),
  new Singing(Iota.get(), 15, 52, 3628),
  new Singing(Iota.get(), 15, 165, 3915),
  new Singing(Iota.get(), 15, 85, 4148),
  new Singing(Iota.get(), 15, 1, 4422),
  new Singing(Iota.get(), 15, 87, 4817),
  new Singing(Iota.get(), 18, 191, 0, 0, false),
  new Singing(Iota.get(), 17, 166, 759),
  new Singing(Iota.get(), 17, 167, 1043),
  new Singing(Iota.get(), 17, 168, 1381),
  new Singing(Iota.get(), 17, 169, 1684),
  new Singing(Iota.get(), 17, 170, 2038),
  new Singing(Iota.get(), 17, 25, 2273),
  new Singing(Iota.get(), 17, 171, 2532),
  new Singing(Iota.get(), 17, 172, 2908),
  new Singing(Iota.get(), 17, 173, 3270),
  new Singing(Iota.get(), 17, 174, 3538),
  new Singing(Iota.get(), 17, 175, 3811),
  new Singing(Iota.get(), 17, 60, 4137),
  new Singing(Iota.get(), 17, 176, 4478),
  new Singing(Iota.get(), 17, 177, 4734),
  new Singing(Iota.get(), 17, 18, 5042),
  new Singing(Iota.get(), 17, 65, 5346),
  new Singing(Iota.get(), 17, 178, 5633),
  new Singing(Iota.get(), 17, 179, 5856),
  new Singing(Iota.get(), 17, 180, 6115),
  new Singing(Iota.get(), 17, 181, 6424),
  new Singing(Iota.get(), 17, 182, 6718),
  new Singing(Iota.get(), 17, 183, 7031),
  new Singing(Iota.get(), 17, 184, 7294),
  new Singing(Iota.get(), 17, 185, 7790),
  new Singing(Iota.get(), 17, 84, 8105),
  new Singing(Iota.get(), 17, 32, 8421),
  new Singing(Iota.get(), 17, 186, 8774, 0, false),
  new Singing(Iota.get(), 17, 187, 8891),
  new Singing(Iota.get(), 17, 188, 9263),
  new Singing(Iota.get(), 17, 79, 9461),
  new Singing(Iota.get(), 17, 21, 9840),
  new Singing(Iota.get(), 17, 189, 10170),
  new Singing(Iota.get(), 17, 190, 10402),
  new Singing(Iota.get(), 17, 23, 10696),
  new Singing(Iota.get(), 17, 37, 10953),
  new Singing(Iota.get(), 17, 0, 11675, 0, false),
  new Singing(Iota.get(), 19, 86, 2346),
  new Singing(Iota.get(), 19, 27, 2677),
  new Singing(Iota.get(), 19, 192, 2936),
  new Singing(Iota.get(), 20, 77, 243),
  new Singing(Iota.get(), 20, 20, 475),
  new Singing(Iota.get(), 20, 54, 729),
  new Singing(Iota.get(), 20, 193, 912),
  new Singing(Iota.get(), 20, 194, 1385),
  new Singing(Iota.get(), 20, 195, 1648),
  new Singing(Iota.get(), 20, 170, 1935),
  new Singing(Iota.get(), 20, 68, 2126),
  new Singing(Iota.get(), 20, 69, 2403),
  new Singing(Iota.get(), 20, 196, 2888),
  new Singing(Iota.get(), 20, 31, 3137),
  new Singing(Iota.get(), 20, 197, 3377),
  new Singing(Iota.get(), 20, 198, 3632),
  new Singing(Iota.get(), 20, 199, 3902),
  new Singing(Iota.get(), 20, 200, 4089),
  new Singing(Iota.get(), 20, 187, 4383),
  new Singing(Iota.get(), 20, 201, 4792),
  new Singing(Iota.get(), 20, 67, 5045),
  new Singing(Iota.get(), 20, 57, 5344),
  new Singing(Iota.get(), 20, 161, 5663),
  new Singing(Iota.get(), 20, 192, 5853),
  new Singing(Iota.get(), 20, 111, 6199),
  new Singing(Iota.get(), 20, 32, 6460),
  new Singing(Iota.get(), 21, 202, 0, 1, false),
  new Singing(Iota.get(), 22, 83, 618),
  new Singing(Iota.get(), 22, 157, 880),
  new Singing(Iota.get(), 22, 43, 1303),
  new Singing(Iota.get(), 22, 125, 1604),
  new Singing(Iota.get(), 22, 203, 1881),
  new Singing(Iota.get(), 22, 204, 2192),
  new Singing(Iota.get(), 22, 205, 2437),
  new Singing(Iota.get(), 22, 206, 2703),
  new Singing(Iota.get(), 22, 207, 2950),
  new Singing(Iota.get(), 22, 53, 3183),
  new Singing(Iota.get(), 22, 208, 3441),
  new Singing(Iota.get(), 22, 209, 3653),
  new Singing(Iota.get(), 22, 210, 4199, 1, true),
  new Singing(Iota.get(), 22, 211, 4603, 1, true),
  new Singing(Iota.get(), 22, 212, 4947, 1, true),
  new Singing(Iota.get(), 22, 213, 5215, 1, true),
  new Singing(Iota.get(), 22, 214, 5477),
  new Singing(Iota.get(), 22, 215, 5772),
  new Singing(Iota.get(), 22, 190, 6084),
  new Singing(Iota.get(), 22, 216, 6360),
  new Singing(Iota.get(), 22, 110, 6710),
  new Singing(Iota.get(), 22, 217, 6964),
  new Singing(Iota.get(), 22, 218, 7579, 1, true),
  new Singing(Iota.get(), 22, 219, 7798, 1, true),
  new Singing(Iota.get(), 22, 220, 8107, 1, true),
  new Singing(Iota.get(), 22, 221, 8416, 1, true),
  new Singing(Iota.get(), 22, 222, 8746, 1, true),
  new Singing(Iota.get(), 22, 223, 9031, 1, true),
  new Singing(Iota.get(), 22, 224, 9234, 1, true),
  new Singing(Iota.get(), 22, 225, 9615, 1, true),
  new Singing(Iota.get(), 22, 123, 10001),
  new Singing(Iota.get(), 22, 84, 10296),
  new Singing(Iota.get(), 23, 5, 130),
  new Singing(Iota.get(), 23, 24, 459),
  new Singing(Iota.get(), 23, 23, 802),
  new Singing(Iota.get(), 23, 86, 1048),
  new Singing(Iota.get(), 23, 88, 1475),
  new Singing(Iota.get(), 23, 113, 1725),
  new Singing(Iota.get(), 23, 33, 2045),
  new Singing(Iota.get(), 23, 16, 2457),
  new Singing(Iota.get(), 23, 17, 2764),
  new Singing(Iota.get(), 23, 3, 3035),
  new Singing(Iota.get(), 23, 14, 3617),
  new Singing(Iota.get(), 23, 2, 3922),
  new Singing(Iota.get(), 23, 76, 4160),
  new Singing(Iota.get(), 23, 81, 4346),
  new Singing(Iota.get(), 23, 147, 4874),
  new Singing(Iota.get(), 23, 142, 5158),
  new Singing(Iota.get(), 23, 82, 5389),
  new Singing(Iota.get(), 23, 87, 5886),
  new Singing(Iota.get(), 24, 226, 0, 0, false),
  new Singing(Iota.get(), 25, 227, 7017),
  new Singing(Iota.get(), 25, 228, 7349),
  new Singing(Iota.get(), 25, 97, 7703),
  new Singing(Iota.get(), 25, 98, 7941),
  new Singing(Iota.get(), 25, 229, 8280),
  new Singing(Iota.get(), 25, 104, 8517),
  new Singing(Iota.get(), 25, 230, 9063),
  new Singing(Iota.get(), 25, 231, 9362),
  new Singing(Iota.get(), 25, 232, 9629),
  new Singing(Iota.get(), 25, 233, 10439),
  new Singing(Iota.get(), 25, 47, 10720),
  new Singing(Iota.get(), 25, 59, 10942),
  new Singing(Iota.get(), 25, 109, 11267),
  new Singing(Iota.get(), 25, 234, 11462),
  new Singing(Iota.get(), 25, 94, 11775),
  new Singing(Iota.get(), 25, 235, 11993),
  new Singing(Iota.get(), 25, 236, 12435),
  new Singing(Iota.get(), 25, 237, 12720),
  new Singing(Iota.get(), 26, 0, 138),
  new Singing(Iota.get(), 26, 238, 276),
  new Singing(Iota.get(), 26, 239, 579),
  new Singing(Iota.get(), 26, 89, 1054),
  new Singing(Iota.get(), 26, 95, 1283),
  new Singing(Iota.get(), 26, 32, 1533),
  new Singing(Iota.get(), 27, 0, 0),
  new Singing(Iota.get(), 28, 225, 195),
  new Singing(Iota.get(), 28, 240, 535),
  new Singing(Iota.get(), 28, 74, 872),
  new Singing(Iota.get(), 28, 169, 1085),
  new Singing(Iota.get(), 28, 19, 1391),
  new Singing(Iota.get(), 28, 241, 1707),
  new Singing(Iota.get(), 28, 49, 1967),
  new Singing(Iota.get(), 28, 242, 2217),
  new Singing(Iota.get(), 28, 243, 2486),
  new Singing(Iota.get(), 28, 244, 2741),
  new Singing(Iota.get(), 28, 245, 3017),
  new Singing(Iota.get(), 28, 246, 3232),
  new Singing(Iota.get(), 28, 0, 3557),
  new Singing(Iota.get(), 29, 0, 700),
  new Singing(Iota.get(), 29, 247, 3431),
  new Singing(Iota.get(), 30, 248, 0),
  new Singing(Iota.get(), 31, 226, 74),
  new Singing(Iota.get(), 31, 226, 327),
  new Singing(Iota.get(), 31, 226, 577),
  new Singing(Iota.get(), 31, 226, 827),
  new Singing(Iota.get(), 31, 226, 1074),
  new Singing(Iota.get(), 31, 226, 1326),
  new Singing(Iota.get(), 31, 226, 1576),
  new Singing(Iota.get(), 31, 226, 1825),
  new Singing(Iota.get(), 31, 226, 2076),
  new Singing(Iota.get(), 31, 226, 2326),
  new Singing(Iota.get(), 31, 226, 2576),
  new Singing(Iota.get(), 31, 226, 2826),
  new Singing(Iota.get(), 31, 226, 3076),
  new Singing(Iota.get(), 31, 226, 3324),
  new Singing(Iota.get(), 31, 226, 3576),
  new Singing(Iota.get(), 31, 226, 3826),
  new Singing(Iota.get(), 31, 226, 4076),
  new Singing(Iota.get(), 31, 226, 4326),
  new Singing(Iota.get(), 31, 226, 4576),
  new Singing(Iota.get(), 31, 226, 4826),
  new Singing(Iota.get(), 31, 226, 5076),
  new Singing(Iota.get(), 31, 226, 5326),
  new Singing(Iota.get(), 31, 226, 5575),
  new Singing(Iota.get(), 31, 226, 5822),
  new Singing(Iota.get(), 31, 226, 6075),
  new Singing(Iota.get(), 31, 226, 6325),
  new Singing(Iota.get(), 31, 226, 6575),
  new Singing(Iota.get(), 31, 226, 6825),
  new Singing(Iota.get(), 31, 226, 7075),
  new Singing(Iota.get(), 31, 226, 7322),
  new Singing(Iota.get(), 32, 248, 120),
  new Singing(Iota.get(), 32, 219, 1155),
  new Singing(Iota.get(), 32, 221, 1444),
  new Singing(Iota.get(), 32, 249, 1839),
  new Singing(Iota.get(), 32, 250, 2109),
  new Singing(Iota.get(), 32, 6, 4054),
  new Singing(Iota.get(), 33, 251, 0),
  new Singing(Iota.get(), 34, 250, 57),
  new Singing(Iota.get(), 35, 252, 425),
  new Singing(Iota.get(), 35, 225, 759),
  new Singing(Iota.get(), 35, 240, 1112),
  new Singing(Iota.get(), 35, 253, 1552),
  new Singing(Iota.get(), 35, 246, 1767),
  new Singing(Iota.get(), 35, 142, 1974),
  new Singing(Iota.get(), 35, 170, 2164),
  new Singing(Iota.get(), 35, 254, 2358),
  new Singing(Iota.get(), 35, 147, 2583),
  new Singing(Iota.get(), 35, 255, 2890),
  new Singing(Iota.get(), 35, 1, 3442),
  new Singing(Iota.get(), 35, 256, 3700),
  new Singing(Iota.get(), 35, 257, 4103),
  new Singing(Iota.get(), 35, 100, 4359),
  new Singing(Iota.get(), 35, 258, 4613),
  new Singing(Iota.get(), 35, 19, 4959),
  new Singing(Iota.get(), 35, 3, 5286),
  new Singing(Iota.get(), 35, 259, 5640),
  new Singing(Iota.get(), 35, 260, 6007),
  new Singing(Iota.get(), 35, 118, 6307),
  new Singing(Iota.get(), 35, 27, 6554),
  new Singing(Iota.get(), 35, 153, 6811),
  new Singing(Iota.get(), 35, 154, 7014),
  new Singing(Iota.get(), 35, 192, 8002),
  new Singing(Iota.get(), 36, 261, 0),
  new Singing(Iota.get(), 37, 86, 477),
  new Singing(Iota.get(), 37, 88, 854),
  new Singing(Iota.get(), 37, 37, 1104),
  new Singing(Iota.get(), 37, 121, 1453),
  new Singing(Iota.get(), 37, 152, 1734),
  new Singing(Iota.get(), 37, 262, 2099),
  new Singing(Iota.get(), 37, 263, 2360),
  new Singing(Iota.get(), 37, 264, 2629),
  new Singing(Iota.get(), 37, 102, 2902),
  new Singing(Iota.get(), 37, 265, 3113),
  new Singing(Iota.get(), 37, 5, 3442),
  new Singing(Iota.get(), 37, 24, 3697),
  new Singing(Iota.get(), 37, 72, 4065),
  new Singing(Iota.get(), 37, 70, 4398),
  new Singing(Iota.get(), 37, 185, 4668),
  new Singing(Iota.get(), 37, 235, 4925),
  new Singing(Iota.get(), 37, 219, 5517),
  new Singing(Iota.get(), 37, 221, 5837),
  new Singing(Iota.get(), 37, 250, 6267),
  new Singing(Iota.get(), 37, 249, 6777),
  new Singing(Iota.get(), 37, 124, 7062),
  new Singing(Iota.get(), 37, 187, 7475),
  new Singing(Iota.get(), 37, 203, 7828),
  new Singing(Iota.get(), 37, 33, 8095),
  new Singing(Iota.get(), 37, 201, 8355),
  new Singing(Iota.get(), 37, 1, 8624),
  new Singing(Iota.get(), 37, 256, 8868),
  new Singing(Iota.get(), 37, 32, 9158),
  new Singing(Iota.get(), 37, 111, 9410),
  new Singing(Iota.get(), 37, 266, 9780),
  new Singing(Iota.get(), 37, 170, 10115),
  new Singing(Iota.get(), 37, 227, 10311),
  new Singing(Iota.get(), 37, 156, 10655),
  new Singing(Iota.get(), 37, 76, 10930),
  new Singing(Iota.get(), 37, 99, 11120),
  new Singing(Iota.get(), 37, 2, 11388),
  new Singing(Iota.get(), 37, 51, 11623),
  new Singing(Iota.get(), 37, 83, 11850),
  new Singing(Iota.get(), 37, 87, 12125),
  new Singing(Iota.get(), 37, 192, 12371),
  new Singing(Iota.get(), 37, 226, 12725),
  new Singing(Iota.get(), 37, 247, 13321),
  new Singing(Iota.get(), 38, 226, 214),
  new Singing(Iota.get(), 38, 267, 465),
  new Singing(Iota.get(), 38, 268, 674),
  new Singing(Iota.get(), 38, 92, 1070),
  new Singing(Iota.get(), 38, 79, 1354),
  new Singing(Iota.get(), 38, 240, 1574),
  new Singing(Iota.get(), 38, 52, 1909),
  new Singing(Iota.get(), 38, 225, 2209),
  new Singing(Iota.get(), 38, 123, 2563),
  new Singing(Iota.get(), 38, 269, 2935),
  new Singing(Iota.get(), 38, 270, 3189),
  new Singing(Iota.get(), 38, 271, 3448),
  new Singing(Iota.get(), 38, 272, 3692),
  new Singing(Iota.get(), 38, 273, 3977),
  new Singing(Iota.get(), 38, 221, 4486),
  new Singing(Iota.get(), 38, 274, 4827, 0, false),
  new Singing(Iota.get(), 38, 275, 4979, 0, false),
  new Singing(Iota.get(), 38, 276, 5072),
  new Singing(Iota.get(), 38, 277, 5278),
  new Singing(Iota.get(), 38, 278, 5520),
  new Singing(Iota.get(), 38, 279, 5628),
  new Singing(Iota.get(), 38, 280, 5885),
  new Singing(Iota.get(), 38, 281, 6135),
  new Singing(Iota.get(), 38, 0, 6517),
  new Singing(Iota.get(), 39, 123, 290),
  new Singing(Iota.get(), 39, 123, 595),
  new Singing(Iota.get(), 39, 123, 899),
  new Singing(Iota.get(), 39, 123, 1208),
  new Singing(Iota.get(), 39, 123, 1513),
  new Singing(Iota.get(), 39, 123, 1818),
  new Singing(Iota.get(), 39, 123, 2122),
  new Singing(Iota.get(), 39, 226, 2532),
  new Singing(Iota.get(), 39, 226, 2782),
  new Singing(Iota.get(), 39, 226, 3033),
  new Singing(Iota.get(), 39, 226, 3282),
  new Singing(Iota.get(), 39, 226, 3532),
  new Singing(Iota.get(), 39, 266, 4063),
  new Singing(Iota.get(), 39, 282, 4352),
  new Singing(Iota.get(), 39, 283, 4648),
  new Singing(Iota.get(), 39, 253, 4935),
  new Singing(Iota.get(), 39, 147, 5138),
  new Singing(Iota.get(), 39, 255, 5475),
  new Singing(Iota.get(), 39, 266, 6290),
  new Singing(Iota.get(), 39, 170, 6595),
  new Singing(Iota.get(), 39, 142, 6835),
  new Singing(Iota.get(), 39, 266, 7086),
  new Singing(Iota.get(), 39, 0, 7429),
  new Singing(Iota.get(), 40, 284, 223, 1, false),
  new Singing(Iota.get(), 40, 285, 394, 1, true),
  new Singing(Iota.get(), 40, 286, 497, 1, true),
  new Singing(Iota.get(), 40, 287, 776, 1, false),
  new Singing(Iota.get(), 40, 68, 885, 1, true),
  new Singing(Iota.get(), 40, 288, 1175, 1, true),
  new Singing(Iota.get(), 40, 20, 1376, 1, false),
  new Singing(Iota.get(), 41, 267, 291),
  new Singing(Iota.get(), 41, 268, 494),
  new Singing(Iota.get(), 41, 289, 713),
  new Singing(Iota.get(), 41, 290, 1069),
  new Singing(Iota.get(), 41, 291, 1350),
  new Singing(Iota.get(), 41, 292, 1587),
  new Singing(Iota.get(), 41, 288, 1897),
  new Singing(Iota.get(), 41, 293, 2157),
  new Singing(Iota.get(), 41, 91, 2394),
  new Singing(Iota.get(), 41, 294, 2616),
  new Singing(Iota.get(), 41, 25, 2787),
  new Singing(Iota.get(), 41, 101, 3036),
  new Singing(Iota.get(), 41, 295, 3363),
  new Singing(Iota.get(), 41, 49, 3553),
  new Singing(Iota.get(), 41, 115, 3816),
  new Singing(Iota.get(), 41, 144, 4075),
  new Singing(Iota.get(), 41, 252, 4305),
  new Singing(Iota.get(), 41, 199, 4737),
  new Singing(Iota.get(), 41, 271, 4938),
  new Singing(Iota.get(), 41, 296, 5175),
  new Singing(Iota.get(), 41, 187, 5573),
  new Singing(Iota.get(), 41, 119, 5871),
  new Singing(Iota.get(), 41, 88, 6235),
  new Singing(Iota.get(), 41, 113, 6577),
  new Singing(Iota.get(), 41, 297, 6819),
];
