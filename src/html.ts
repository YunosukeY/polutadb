import { setChart } from './stats';

export function genTop() {
  let html = `
<div class="block description-block">
  <h4>About</h4>
  PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br>
  <br>
  ・表示件数を増やすと重くなる場合があります<br>
  ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br>
</div>

<div class="block select-block">
  <h4>Search</h4>

  <label>
    <h6>曲ジャンル</h6>
    <select name="genre" id="genre">
      <option value="-1">-</option>
    </select>
  </label>

  <label>
    <h6>枠タイプ</h6>
    <select name="type" id="type">
      <option value="-1">-</option>
    </select>
  </label>

  <label>
    <h6>動画</h6>
    <select name="video" id="video">
      <option value="-1">-</option>
    </select>
  </label>

  <label>
    <h6>曲</h6>
    <select name="song" id="song">
      <option value="-1">-</option>
    </select>
  </label>

  <label>
    <h6>アーティスト</h6>
    <select name="artist" id="artist">
      <option value="-1">-</option>
    </select>
  </label>

  <label>
    <h6>表示件数</h6>
  </label>
  <form action="#" class="row">
    <label class="col s2 m1">
      <input class="with-gap" name="display-num" type="radio" value="5" checked />
      <span>5</span>
    </label>
    <label class="col s2 m1">
      <input class="with-gap" name="display-num" type="radio" value="10" />
      <span>10</span>
    </label>
    <label class="col s2 m1">
      <input class="with-gap" name="display-num" type="radio" value="20" />
      <span>20</span>
    </label>
  </form>
</div>

<div class="block result-block">
  <div id="result"></div>
</div>`;

  $('#sp').html(html);
}

function genStats() {
  let html = `
  <h4 class="center">Genres</h4>
  <div class="chartdiv" id="genre-stats"></div>
  <h4 class="center">Artists</h4>
  <div class="chartdiv" id="artist-stats"></div>
  <h4 class="center">Songs</h4>
  <div class="chartdiv" id="song-stats"></div>
  `;

  $('#sp').html(html);

  setChart();
}

export function statsInit() {
  $('#stats').on('click', function () {
    genStats();
  });
}