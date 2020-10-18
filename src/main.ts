import { setData, videos, songs, artists, singings } from './data';

setData();

function genHtml(singings: any) {
  let res = '';

  for (let singing of singings) {
    res += `<div id="vidoeinfo">${videos[singing['videoId']]['title']} ${songs[singing['songId']]['title']} / ${artists[songs[singing['songId']]['artistId']]['name']}</div>`
    res += `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${videos[singing['videoId']]['id']}?start=${singing['start']}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br>`;
  }

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
    res = res.filter(singingInfo => songs[singingInfo['songId']]['artistId'] == artistId)
  }

  $('#result').html(genHtml(res));
}


$('#video').on('change', function () {
  search()
});
$('#song').on('change', function () {
  search()
});
$('#artist').on('change', function () {
  search()
});