import * as React from 'react';
import { useState } from 'react';
import { singings, getUrl, getArtist, getSong, getArtistId, getGenreId, getTypeId, Singing } from './data';

export function Result(props: any) {
  const [pagenum, setPagenum] = useState(1);

  return (
    <>
      <ResultHeader resultnum={props.result.length} />
      <ResultTable table={props.result.slice((pagenum - 1) * props.displaynum, Math.min(pagenum * props.displaynum, props.result.length))} />
      <Pagenation pagenum={pagenum} setPagenum={setPagenum} displaynum={props.displaynum} lastPageNum={Math.ceil(props.result.length / props.displaynum)} />
    </>
  );
}

function ResultHeader(props: any) {
  return (
    <h4>
      {props.resultnum} Result{props.resultnum == 1 ? '' : 's'}
    </h4>
  );
}

function ResultTable(props: { table: Singing[] }) {
  return (
    <table><tbody>
      {props.table.map(singing => (
        <tr><td><div className='row' id='table-block'>
          <div className='col s12 m12 l8 xl8' id='iframe-content'>
            <iframe width='480' height='270' src={`https://www.youtube-nocookie.com/embed/${getUrl(singing.videoId)}?start=${singing.start}`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
          </div>
          <div className='col s12 m12 l4 xl4' id='result-table'>
            <h5 id='song-info'>
              『{getSong(singing.songId)}』<br />
              {getArtist(singing.songId)}
            </h5>
          </div>
        </div></td></tr>
      ))}
    </tbody></table>
  )
}

function Pagenation(props: any) {
  let n = 2; // 2つ隣のページまで表示させる

  let currentAround = [];
  for (let i = Math.max(props.pagenum - n, 1); i <= Math.min(props.pagenum + n, props.lastPageNum); i++) {
    if (i == props.pagenum)
      currentAround.push(<li className='active' id='current-page'><a>{i}</a></li>)
    else
      currentAround.push(<li className='waves-effect'><a onClick={() => props.setPagenum(i)}>{i}</a></li>);
  }

  return (
    <ul className='pagination' id='result-page'>
      {props.pagenum - n > 1 &&
        <>
          <li className='waves-effect'><a onClick={() => props.setPagenum(1)}>1</a></li>
          <li className='disabled'><a><i className='material-icons'>more_horiz</i></a></li>
        </>
      }
      {currentAround}
      {props.pagenum + n < props.lastPageNum &&
        <>
          <li className='disabled'><a><i className='material-icons'>more_horiz</i></a></li>
          <li className='waves-effect'><a onClick={() => props.setPagenum(props.lastPageNum)}>{props.lastPageNum}</a></li>
        </>
      }
    </ul>
  );
}

export function search(videoId: number, songId: number, artistId: number, genreId: number, typeId: number) {
  let tmpres = singings;
  if (videoId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo.videoId == videoId);
  }
  if (songId != -1) {
    tmpres = tmpres.filter(singingInfo => singingInfo.songId == songId);
  }
  if (artistId != -1) {
    tmpres = tmpres.filter(singingInfo => getArtistId(singingInfo.songId) == artistId);
  }
  if (genreId != -1) {
    tmpres = tmpres.filter(singingInfo => getGenreId(singingInfo.songId) == genreId);
  }
  if (typeId != -1) {
    tmpres = tmpres.filter(singingInfo => getTypeId(singingInfo.videoId) == typeId);
  }
  return tmpres;
}
