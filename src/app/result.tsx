import * as React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import { singings, getUrl, getArtist, getSong, getArtistId, getGenreId, getTypeId, Singing, getVideo } from './data';

export default function Result(props: {
  query: string,
  genre: number,
  type: number,
  video: number,
  song: number,
  artist: number,
  withInst: boolean,
  aCappella: boolean,
  full: boolean,
  onechorus: boolean,
  displaynum: number,
  pagenum: number,
  setPagenum: React.Dispatch<React.SetStateAction<number>>,
  isFavo: (singingId: number) => boolean,
  toggleFavo: (singingId: number) => void
}) {
  const result = search(props.query, props.video, props.song, props.artist, props.genre, props.type, props.withInst, props.aCappella, props.full, props.onechorus); // ジャンルなどから計算できるので状態ではない
  const ref = React.createRef<HTMLDivElement>()
  const onPageClick = ((p: number) => {
    props.setPagenum(p)
    ref!.current!.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className='pane' id='result'>
      <div ref={ref} />
      <ResultHeader resultnum={result.length} />
      <ResultTable
        table={result.slice((props.pagenum - 1) * props.displaynum, Math.min(props.pagenum * props.displaynum, result.length))}
        isFavo={props.isFavo}
        toggleFavo={props.toggleFavo}
      />
      <Pagenation pagenum={props.pagenum} setPagenum={onPageClick} lastPageNum={Math.ceil(result.length / props.displaynum)} />
    </div >
  );
}

function ResultHeader(props: { resultnum: number }) {
  return (
    <h4 id='result-header'>
      {props.resultnum} Result{props.resultnum === 1 ? '' : 's'}
    </h4>
  );
}

export function ResultTable(props: { table: Singing[], isFavo: (singingId: number) => boolean, toggleFavo: (singingId: number) => void }) {
  return (
    <table><tbody>
      {props.table.map((singing, i) => (
        <tr key={i}><td><div className='row'>
          <div className='col s12 m12 l8 xl8' id='iframe-content'>
            <iframe width='480' height='270' src={`https://www.youtube-nocookie.com/embed/${getUrl(singing.videoId)}?start=${singing.start}`} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen title={getVideo(singing.videoId)}></iframe>
          </div>
          <div className='col s12 m12 l4 xl4' id='result-table'>
            <h5 id='song-info'>
              『{getSong(singing.songId)}』<br />
              {getArtist(singing.songId)} <br />
              {(singing.withInst === false) && <div className='supplemental-info'>アカペラ</div>}
              {(singing.full === false) && <div className='supplemental-info'>ワンコーラス</div>}
              <Star isFavo={props.isFavo(singing.id)} onClick={() => props.toggleFavo(singing.id)} />
              <Tweet singing={singing} />
            </h5>
          </div>
        </div></td></tr>
      ))}
    </tbody></table>
  )
}

const fontSize = 24

function Star(props: { isFavo: boolean, onClick: () => void }) {
  const color = 'gold'

  return (
    <IconButton onClick={props.onClick} style={{ background: 'white' }}>
      { props.isFavo && <StarIcon style={{ fontSize: fontSize, color: color }} />}
      { !props.isFavo && <StarBorderIcon style={{ fontSize: fontSize, color: color }} />}
    </IconButton >
  );
}

function Tweet(props: { singing: Singing }) {
  const youtubeURL = `https://youtu.be/${getUrl(props.singing.videoId)}?t=${props.singing.start}`
  const tweetURL = `https://twitter.com/intent/tweet?text=${getSong(props.singing.songId)} / ${getArtist(props.singing.songId)}&url=${youtubeURL}&hashtags=ぽるうた,尾丸ポルカ`;
  const onClick = () => {
    window.open(encodeURI(decodeURI(tweetURL)));
  }
  return (
    <IconButton onClick={onClick} style={{ background: 'white' }
    }>
      <TwitterIcon style={{ fontSize: fontSize, color: 'rgb(0,172,237)' }} />
    </IconButton >
  );
}

export function Pagenation(props: { pagenum: number, setPagenum: (p: number) => void, lastPageNum: number }) {
  const n = 2; // 2つ隣のページまで表示させる

  const currentAround = [];
  for (let i = Math.max(props.pagenum - n, 1); i <= Math.min(props.pagenum + n, props.lastPageNum); i++) {
    if (i === props.pagenum)
      currentAround.push(<li className='active' key={i}><a>{i}</a></li>)
    else
      currentAround.push(<li className='waves-effect' key={i}><a onClick={() => props.setPagenum(i)}>{i}</a></li>);
  }

  return (
    <ul className='pagination'>
      {props.pagenum - n > 1 &&
        <>
          <li className='waves-effect' key='1'><a onClick={() => props.setPagenum(1)}>1</a></li>
          <li className='disabled' key='1'><a><MoreHorizIcon color='disabled' style={{ fontSize: 30 }} /></a></li>
        </>
      }
      {currentAround}
      {props.pagenum + n < props.lastPageNum &&
        <>
          <li className='disabled'><a><MoreHorizIcon color='disabled' style={{ fontSize: 30 }} /></a></li>
          <li className='waves-effect'><a onClick={() => props.setPagenum(props.lastPageNum)}>{props.lastPageNum}</a></li>
        </>
      }
    </ul>
  );
}

function search(query: string, videoId: number, songId: number, artistId: number, genreId: number, typeId: number, withInst: boolean, aCappella: boolean, full: boolean, onechorus: boolean) {
  let tmpres: Singing[] = JSON.parse(JSON.stringify(singings));

  const normalizedQuery = query.toLowerCase();
  if (query !== '') {
    tmpres = tmpres.filter(singingInfo => fullTextFilter(singingInfo, normalizedQuery));
  }

  if (videoId !== -1)
    tmpres = tmpres.filter(singingInfo => singingInfo.videoId === videoId);
  if (songId !== -1)
    tmpres = tmpres.filter(singingInfo => singingInfo.songId === songId);
  if (artistId !== -1)
    tmpres = tmpres.filter(singingInfo => getArtistId(singingInfo.songId) === artistId);
  if (genreId !== -1)
    tmpres = tmpres.filter(singingInfo => getGenreId(singingInfo.songId) === genreId);
  if (typeId !== -1)
    tmpres = tmpres.filter(singingInfo => getTypeId(singingInfo.videoId) === typeId);

  if (withInst === false)
    tmpres = tmpres.filter(singingInfo => singingInfo.withInst === false);
  if (aCappella === false)
    tmpres = tmpres.filter(singingInfo => singingInfo.withInst === true);

  if (full === false)
    tmpres = tmpres.filter(singingInfo => singingInfo.full === false);
  if (onechorus === false)
    tmpres = tmpres.filter(singingInfo => singingInfo.full === true);

  tmpres.reverse();
  return tmpres;
}

function fullTextFilter(singing: Singing, query: string) {
  const song = getSong(singing.songId).toLowerCase();
  const artist = getArtist(singing.songId).toLowerCase();
  const video = getVideo(singing.videoId).toLowerCase();

  return song.indexOf(query) !== -1 || artist.indexOf(query) !== -1 || video.indexOf(query) !== -1;
}