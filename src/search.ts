import { singings, getUrl, getArtist, getSong, getArtistId } from './data';

function genHtml(singings: any) {
  let res = '<table class="centered"><tbody>';

  for (let singing of singings) {
    res += '<tr>';
    res += `<td width="500"><iframe width="480" height="270" src="https://www.youtube-nocookie.com/embed/${getUrl(singing['videoId'])}?start=${singing['start']}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td>`;
    res += `<td><h5>『${getSong(singing['songId'])}』<br>${getArtist(singing['songId'])}</h5></td>`;
    res += '<tr>';
  }

  res += '</tbody></table>';

  return res;
}

function search() {
  let videoId = Number($('#video').val() as string);
  let songId = Number($('#song').val() as string);
  let artistId = Number($('#artist').val() as string);

  let res = singings;
  if (videoId != -1) {
    res = res.filter(singingInfo => singingInfo['videoId'] == videoId)
  }
  if (songId != -1) {
    res = res.filter(singingInfo => singingInfo['songId'] == songId)
  }
  if (artistId != -1) {
    res = res.filter(singingInfo => getArtistId(singingInfo['songId']) == artistId)
  }

  $('#result').html(genHtml(res));
}

export function searchInit() {
  $('#video').on('change', function () {
    search()
  });
  $('#song').on('change', function () {
    search()
  });
  $('#artist').on('change', function () {
    search()
  });
}