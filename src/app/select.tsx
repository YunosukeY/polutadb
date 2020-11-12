import * as React from 'react';
import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { mInit } from './materialize';
import { getGenres, getTypes, getVideos, getSongs, getArtists } from './data';

export function Select(props: {
  query: string, setQuery: (query: string) => void,
  genre: number, setGenre: (genre: number) => void,
  type: number, setType: (type: number) => void,
  video: number, setVideo: (video: number) => void,
  song: number, setSong: (song: number) => void,
  artist: number, setArtist: (artist: number) => void,
  withInst: boolean, setWithInst: (withInst: boolean) => void,
  aCappella: boolean, setACappella: (aCappella: boolean) => void,
  full: boolean, setFull: (full: boolean) => void,
  onechorus: boolean, setOnechorus: (onechorus: boolean) => void,
  displaynum: number, setDisplaynum: (displaynum: number) => void
}) {
  useEffect(() => {
    mInit();
  });

  // checkbox
  function onChange(setter: (v: boolean) => void) {
    return ((event: any) => setter(event.target.checked));
  }

  return (
    <div className='pane' id='select'>
      <h4>Search</h4>
      <FullTextSearch query={props.query} setQuery={props.setQuery} />
      <Genre genre={props.genre} setGenre={props.setGenre} />
      <Type type={props.type} setType={props.setType} />
      <Video video={props.video} setVideo={props.setVideo} />
      <Song song={props.song} setSong={props.setSong} />
      <Artist artist={props.artist} setArtist={props.setArtist} />
      <Inst withInst={props.withInst} setWithInst={onChange(props.setWithInst)} aCappella={props.aCappella} setACappella={onChange(props.setACappella)} />
      <Length full={props.full} setFull={onChange(props.setFull)} onechorus={props.onechorus} setOnechorus={onChange(props.setOnechorus)} />
      <Displaynum displaynum={props.displaynum} setDisplaynum={props.setDisplaynum} />
    </div>
  );
}

function FullTextSearch(props: { query: string, setQuery: (query: string) => void }) {
  // textをqueryで初期化
  const [text, setText] = useState(props.query);

  function onKeyDown(e: any) {
    if (e.key === 'Enter' && e.keyCode === 13) {
      props.setQuery(text);
    }
  }

  return (
    <div className='input-field'>
      <SearchIcon color='action' className='material-icons prefix' style={{ fontSize: 28 }} /> {/* queryにtextをセット */}
      <input id='icon_prefix' type='text' className='validate' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={onKeyDown} />
      <label htmlFor='icon_prefix'>全文検索</label>
    </div>
  )
}

function Genre(props: { genre: number, setGenre: (genre: number) => void }) {
  let genres = getGenres().map(genre => <option value={genre.i} key={genre.i}>{genre.name}</option>);
  return (
    <label>
      <h6 className='text' >曲ジャンル</h6>
      <select id='genre-selector' value={props.genre} onChange={(event) => props.setGenre(Number(event.target.value))}>
        <option value='-1' key='-1'>-</option>
        {genres}
      </select>
    </label>
  );
}

function Type(props: { type: number, setType: (type: number) => void }) {
  let types = getTypes().map(type => <option value={type.i} key={type.i}>{type.name}</option>);
  return (
    <label>
      <h6 className='text'>枠タイプ</h6>
      <select id='type-selector' value={props.type} onChange={(event) => props.setType(Number(event.target.value))}>
        <option value='-1' key='-1'>-</option>
        {types}
      </select>
    </label>
  );
}

function Video(props: { video: number, setVideo: (video: number) => void }) {
  let videos = getVideos().map(video => <option value={video.i} key={video.i}>{video.date}: {video.title}</option>);
  return (
    <label>
      <h6 className='text'>動画</h6>
      <select id='video-selector' value={props.video} onChange={(event) => props.setVideo(Number(event.target.value))}>
        <option value='-1' key='-1'>-</option>
        {videos}
      </select>
    </label>
  );
}

function Song(props: { song: number, setSong: (song: number) => void }) {
  let songs = getSongs().map(song => <option value={song.i} key={song.i}>{song.title}</option>);
  return (
    <label>
      <h6 className='text'>曲</h6>
      <select id='song-selector' value={props.song} onChange={(event) => props.setSong(Number(event.target.value))}>
        <option value='-1' key='-1'>-</option>
        {songs}
      </select>
    </label>
  );
}

function Artist(props: { artist: number, setArtist: (artist: number) => void }) {
  let artists = getArtists().map(artist => <option value={artist.i} key={artist.i}>{artist.name}</option>);
  return (
    <label>
      <h6 className='text'>アーティスト</h6>
      <select id='artist-selector' value={props.artist} onChange={(event) => props.setArtist(Number(event.target.value))}>
        <option value='-1' key='-1'>-</option>
        {artists}
      </select>
    </label>
  );
}

function Inst(props: { withInst: boolean, setWithInst: any, aCappella: boolean, setACappella: any }) {
  return (
    <label>
      <h6 className='text'>伴奏</h6>
      <div className='row'>
        <label className='col s4 m2'>
          <input type='checkbox' className='filled-in' checked={props.withInst} onChange={props.setWithInst} />
          <span className='text'>あり</span>
        </label>
        <label className='col s8 m10'>
          <input type='checkbox' className='filled-in' checked={props.aCappella} onChange={props.setACappella} />
          <span className='text'>なし（アカペラ）</span>
        </label>
      </div>
    </label>
  );
}

function Length(props: { full: boolean, setFull: any, onechorus: boolean, setOnechorus: any }) {
  return (
    <label>
      <h6 className='text'>尺</h6>
      <div className='row'>
        <label className='col s4 m2'>
          <input type='checkbox' className='filled-in' checked={props.full} onChange={props.setFull} />
          <span className='text'>フル</span>
        </label>
        <label className='col s8 m10'>
          <input type='checkbox' className='filled-in' checked={props.onechorus} onChange={props.setOnechorus} />
          <span className='text'>ワンコーラス</span>
        </label>
      </div>
    </label>
  );
}

function Displaynum(props: { displaynum: number, setDisplaynum: (displaynum: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio num={5} setDisplaynum={props.setDisplaynum} checked={props.displaynum === 5} />
        <Radio num={10} setDisplaynum={props.setDisplaynum} checked={props.displaynum === 10} />
        <Radio num={20} setDisplaynum={props.setDisplaynum} checked={props.displaynum === 20} />
      </form>
    </>
  );
}

function Radio(props: { num: number, setDisplaynum: (displaynum: number) => void, checked: boolean }) {
  return (
    <label className='col s2 m1'>
      <input className='with-gap' type='radio' value={props.num} checked={props.checked} onChange={() => props.setDisplaynum(props.num)} />
      <span className='text'>{props.num}</span>
    </label>
  );
}
