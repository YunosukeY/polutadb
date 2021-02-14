import * as React from 'react';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StarIcon from '@material-ui/icons/Star';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
import { singings, getUrl, getArtist, getSong, getArtistId, getGenreId, getTypeId, Singing, getVideo } from './data';

export default function Result(props: {
  query: string;
  genre: number;
  type: number;
  video: number;
  song: number;
  artist: number;
  withInst: boolean;
  aCappella: boolean;
  full: boolean;
  onechorus: boolean;
  sortedBy: number;
  displaynum: number;
  displayMode: number;
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
}) {
  const result = search(
    props.query,
    props.video,
    props.song,
    props.artist,
    props.genre,
    props.type,
    props.withInst,
    props.aCappella,
    props.full,
    props.onechorus,
    props.sortedBy,
  ); // ジャンルなどから計算できるので状態ではない
  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    props.setPagenum(p);
    ref!.current!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='pane' id='result'>
      <div ref={ref} />
      <ResultHeader resultnum={result.length} />
      {props.displayMode == 0 && (
        <ResultTable
          table={result.slice(
            (props.pagenum - 1) * props.displaynum,
            Math.min(props.pagenum * props.displaynum, result.length),
          )}
          isFavo={props.isFavo}
          toggleFavo={props.toggleFavo}
        />
      )}
      {props.displayMode == 1 && (
        <SimpleResultTable
          table={result.slice(
            (props.pagenum - 1) * props.displaynum,
            Math.min(props.pagenum * props.displaynum, result.length),
          )}
          isFavo={props.isFavo}
          toggleFavo={props.toggleFavo}
        />
      )}
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(result.length / props.displaynum)}
      />
    </div>
  );
}

function ResultHeader(props: { resultnum: number }) {
  return (
    <h4 id='result-header'>
      {props.resultnum} Result{props.resultnum === 1 ? '' : 's'}
    </h4>
  );
}

interface ResultTableProps {
  table: Singing[];
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
}

export function ResultTable(props: ResultTableProps) {
  const fontsize = 24;
  return (
    <table>
      <tbody>
        {props.table.map((singing, i) => (
          <tr key={i}>
            <td>
              <div className='row'>
                <div className='col s12 m12 l8 xl8' id='iframe-content'>
                  <div style={{ borderRadius: 5, margin: 'auto', overflow: 'hidden' }} id='iframe-wrapper'>
                    <iframe
                      id='usual-iframe'
                      width='480'
                      height='270'
                      src={`https://www.youtube-nocookie.com/embed/${getUrl(singing.videoId)}?start=${singing.start}`}
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      title={getVideo(singing.videoId)}
                    />
                  </div>
                </div>
                <div className='col s12 m12 l4 xl4' id='result-table'>
                  <h5 id='song-info'>
                    『{getSong(singing.songId)}』<br />
                    {getArtist(singing.songId)} <br />
                    {singing.withInst === false && <div className='supplemental-info'>アカペラ</div>}
                    {singing.full === false && <div className='supplemental-info'>ワンコーラス</div>}
                    <Star
                      isFavo={props.isFavo(singing.id)}
                      onClick={() => props.toggleFavo(singing.id)}
                      fontsize={fontsize}
                    />
                    <Tweet singing={singing} fontsize={fontsize} />
                  </h5>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function SimpleResultTable(props: ResultTableProps) {
  const centering = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const fontsize = 28;
  return (
    <table>
      <tbody>
        {props.table.map((singing, i) => {
          return (
            <tr key={i}>
              <td style={{ paddingTop: 0 }}>
                <div
                  className='row'
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 0 }}
                >
                  <div className='col s12 m9' style={{ textAlign: 'center' }}>
                    <h6>
                      『{getSong(singing.songId)}』{getArtist(singing.songId)} <br />
                      {singing.withInst === false && <>アカペラ</>}
                      {singing.withInst === false && singing.full === false && <> </>}
                      {singing.full === false && <>ワンコーラス</>}
                    </h6>
                  </div>
                  <div className='col s12 m3' style={centering}>
                    <Youtube singing={singing} fontsize={fontsize} />
                    <Star
                      isFavo={props.isFavo(singing.id)}
                      onClick={() => props.toggleFavo(singing.id)}
                      fontsize={fontsize}
                    />
                    <Tweet singing={singing} fontsize={fontsize} />
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Youtube(props: { singing: Singing; fontsize: number }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div
      id='iframe-content'
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <iframe
        id='simple-iframe'
        width='800'
        height='450'
        src={`https://www.youtube-nocookie.com/embed/${getUrl(props.singing.videoId)}?start=${props.singing.start}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title={getVideo(props.singing.videoId)}
      />
    </div>
  );
  const color = '#ff0f1a';

  return (
    <>
      <IconButton onClick={handleOpen} style={{ background: 'white' }}>
        <YouTubeIcon style={{ fontSize: props.fontsize, color: color }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </>
  );
}

function Star(props: { isFavo: boolean; onClick: () => void; fontsize: number }) {
  const color = 'gold';

  return (
    <IconButton onClick={props.onClick} style={{ background: 'white' }}>
      {props.isFavo && <StarIcon style={{ fontSize: props.fontsize, color: color }} />}
      {!props.isFavo && <StarBorderIcon style={{ fontSize: props.fontsize, color: color }} />}
    </IconButton>
  );
}

function Tweet(props: { singing: Singing; fontsize: number }) {
  const youtubeURL = `https://youtu.be/${getUrl(props.singing.videoId)}?t=${props.singing.start}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${getSong(props.singing.songId)} / ${getArtist(
    props.singing.songId,
  )}&url=${youtubeURL}&hashtags=ぽるうた,尾丸ポルカ`;
  const onClick = () => {
    window.open(encodeURI(decodeURI(tweetURL)));
  };
  return (
    <IconButton onClick={onClick} style={{ background: 'white' }}>
      <TwitterIcon style={{ fontSize: props.fontsize, color: 'rgb(0,172,237)' }} />
    </IconButton>
  );
}

export function Pagenation(props: { pagenum: number; setPagenum: (p: number) => void; lastPageNum: number }) {
  const n = 2; // 2つ隣のページまで表示させる

  const currentAround = [];
  for (let i = Math.max(props.pagenum - n, 1); i <= Math.min(props.pagenum + n, props.lastPageNum); i++) {
    if (i === props.pagenum)
      currentAround.push(
        <li className='active' key={i}>
          <a>{i}</a>
        </li>,
      );
    else
      currentAround.push(
        <li className='waves-effect' key={i}>
          <a onClick={() => props.setPagenum(i)}>{i}</a>
        </li>,
      );
  }

  return (
    <ul className='pagination'>
      {props.pagenum - n > 1 && (
        <>
          <li className='waves-effect' key='1'>
            <a onClick={() => props.setPagenum(1)}>1</a>
          </li>
          <li className='disabled' key='1'>
            <a>
              <MoreHorizIcon color='disabled' style={{ fontSize: 30 }} />
            </a>
          </li>
        </>
      )}
      {currentAround}
      {props.pagenum + n < props.lastPageNum && (
        <>
          <li className='disabled'>
            <a>
              <MoreHorizIcon color='disabled' style={{ fontSize: 30 }} />
            </a>
          </li>
          <li className='waves-effect'>
            <a onClick={() => props.setPagenum(props.lastPageNum)}>{props.lastPageNum}</a>
          </li>
        </>
      )}
    </ul>
  );
}

function search(
  query: string,
  videoId: number,
  songId: number,
  artistId: number,
  genreId: number,
  typeId: number,
  withInst: boolean,
  aCappella: boolean,
  full: boolean,
  onechorus: boolean,
  sortedBy: number,
) {
  let tmpres: Singing[] = JSON.parse(JSON.stringify(singings));

  const normalizedQuery = query.toLowerCase();
  if (query !== '') {
    tmpres = tmpres.filter((singingInfo) => fullTextFilter(singingInfo, normalizedQuery));
  }

  if (videoId !== -1) tmpres = tmpres.filter((singingInfo) => singingInfo.videoId === videoId);
  if (songId !== -1) tmpres = tmpres.filter((singingInfo) => singingInfo.songId === songId);
  if (artistId !== -1) tmpres = tmpres.filter((singingInfo) => getArtistId(singingInfo.songId) === artistId);
  if (genreId !== -1) tmpres = tmpres.filter((singingInfo) => getGenreId(singingInfo.songId) === genreId);
  if (typeId !== -1) tmpres = tmpres.filter((singingInfo) => getTypeId(singingInfo.videoId) === typeId);

  if (withInst === false) tmpres = tmpres.filter((singingInfo) => singingInfo.withInst === false);
  if (aCappella === false) tmpres = tmpres.filter((singingInfo) => singingInfo.withInst === true);

  if (full === false) tmpres = tmpres.filter((singingInfo) => singingInfo.full === false);
  if (onechorus === false) tmpres = tmpres.filter((singingInfo) => singingInfo.full === true);

  tmpres.reverse();
  if (sortedBy === 1) {
    tmpres.sort(compBySongTitle);
  } else if (sortedBy === 2) {
    tmpres.sort(compByArtistName);
  }

  return tmpres;
}

function fullTextFilter(singing: Singing, query: string) {
  const song = getSong(singing.songId).toLowerCase();
  const artist = getArtist(singing.songId).toLowerCase();
  const video = getVideo(singing.videoId).toLowerCase();

  return song.indexOf(query) !== -1 || artist.indexOf(query) !== -1 || video.indexOf(query) !== -1;
}

function compBySongTitle(x: Singing, y: Singing) {
  const xTitle = getSong(x.songId);
  const yTitle = getSong(y.songId);

  if (xTitle > yTitle) return 1;
  else if (xTitle < yTitle) return -1;
  else return 0;
}

function compByArtistName(x: Singing, y: Singing) {
  const xArtist = getArtist(x.songId);
  const yArtist = getArtist(y.songId);

  if (xArtist > yArtist) return 1;
  else if (xArtist < yArtist) return -1;
  else return 0;
}
