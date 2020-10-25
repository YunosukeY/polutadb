import { setChart } from './stats';

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