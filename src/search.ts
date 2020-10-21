import { singings, getUrl, getArtist, getSong, getArtistId, getGenreId, getTypeId, Singing } from './data';

let result: Singing[] = [];

function genHtml(pageNum: number) {
  let html = `<h4>${result.length} Result${result.length == 1 ? '' : 's'}</h4>`;

  // result table
  let displayNum = Number($('input:radio[name="display-num"]:checked').val() as string);
  html += `<table><tbody>`;
  for (let i = (pageNum - 1) * displayNum; i < Math.min(pageNum * displayNum, result.length); i++) {
    html += `<tr><td><div class="row" id="table-block">`
    html += `<div class="col s12 m12 l8 xl8" id="iframe-content">
              <iframe width="480" height="270" src="https://www.youtube-nocookie.com/embed/${getUrl(result[i]['videoId'])}?start=${result[i]['start']}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
    html += `<div class="col s12 m12 l4 xl4" id="result-table">
              <h5 id="song-info">
                『${getSong(result[i]['songId'])}』<br>
                ${getArtist(result[i]['songId'])}
              </h5>
            </div>`;
    html += `</div></td></tr>`;
  }
  html += '</tbody></table>';

  // page nation
  let lastPageNum = Math.ceil(result.length / displayNum);
  let n = 2; // 2つ隣のページまで表示させる
  html += '<ul class="pagination" id="result-page">';
  if (pageNum - n > 1) { // 最初のページが遠い時
    html += `<li class="waves-effect"><a>1</a></li>`;
    html += `<li class="disabled"><a><i class="material-icons">more_horiz</i></a></li>`;
  }
  for (let i = Math.max(pageNum - n, 1); i <= Math.min(pageNum + n, lastPageNum); i++) {
    html += `${i == pageNum ? '<li class="active" id="current-page">' : '<li class="waves-effect">'}<a>${i}</a></li>`;
  }
  if (pageNum + n < lastPageNum) { // 最後のページが遠い時
    html += `<li class="disabled"><a><i class="material-icons">more_horiz</i></a></li>`;
    html += `<li class="waves-effect"><a>${lastPageNum}</a></li>`;
  }
  html += '</ul>';

  return html;
}

function search() {
  let videoId = Number($('#video').val() as string);
  let songId = Number($('#song').val() as string);
  let artistId = Number($('#artist').val() as string);
  let genreId = Number($('#genre').val() as string);
  let typeId = Number($('#type').val() as string);

  let tmpres = singings;
  if (videoId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo['videoId'] == videoId);
  }
  if (songId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo['songId'] == songId);
  }
  if (artistId != -1) {
    tmpres = tmpres.filter(singingInfo => getArtistId(singingInfo['songId']) == artistId);
  }
  if (genreId != -1) {
    tmpres = tmpres.filter(singingInfo => getGenreId(singingInfo['songId']) == genreId);
  }
  if (typeId != -1) {
    tmpres = tmpres.filter(singingInfo => getTypeId(singingInfo['videoId']) == typeId);
  }
  result = tmpres;
}

function scroll2ResultTop() {
  let speed = 400; // ミリ秒
  let position = $('.result-block').offset()!.top;
  $('body,html').animate({ scrollTop: position }, speed, 'swing');
  return false;
}

function standbyFlippingPage() {
  $('#result-page li').on('click', function () {
    if ($(this).hasClass('waves-effect')) {
      let nextPage = Number($(this).text());
      $('#result').html(genHtml(nextPage));
      scroll2ResultTop();
      standbyFlippingPage();
    }
  });
}

export function searchInit() {
  $('#video, #song, #artist, #genre, #type').on('change', function () {
    search();
    $('#result').html(genHtml(1));
    standbyFlippingPage();
  });
  $('input[name="display-num"]:radio').on('change', function () {
    $('#result').html(genHtml(1));
    standbyFlippingPage();
  });
}