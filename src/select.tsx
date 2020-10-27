import * as React from 'react';
import { useEffect } from 'react';
import { mInit } from './materialize';
import { getGenres, getTypes, getVideos, getSongs, getArtists } from './data';

export function Select(props: any) {
  useEffect(() => {
    mInit();
  });

  return (
    <div className='block select-block'>
      <h4>Search</h4>
      <Genre genre={props.genre} setGenre={props.setGenre} />
      <Type type={props.type} setType={props.setType} />
      <Video video={props.video} setVideo={props.setVideo} />
      <Song song={props.song} setSong={props.setSong} />
      <Artist artist={props.artist} setArtist={props.setArtist} />
      <Displaynum displaynum={props.displaynum} setDisplaynum={props.setDisplaynum} />
    </div>
  );
}

function Genre(props: any) {
  let genres = getGenres().map(genre => <option value={genre.i}>{genre.name}</option>);
  return (
    <label>
      <h6>曲ジャンル</h6>
      <select name='genre' id='genre' value={props.genre} onChange={(event) => props.setGenre(event.target.value)}>
        <option value='-1'>-</option>
        {genres}
      </select>
    </label>
  );
}

function Type(props: any) {
  let types = getTypes().map(type => <option value={type.i}>{type.name}</option>);
  return (
    <label>
      <h6>枠タイプ</h6>
      <select name='type' id='type' value={props.type} onChange={(event) => props.setType(event.target.value)}>
        <option value='-1'>-</option>
        {types}
      </select>
    </label>
  );
}

function Video(props: any) {
  let videos = getVideos().map(video => <option value={video.i}>{video.date}: {video.title}</option>);
  return (
    <label>
      <h6>動画</h6>
      <select name='video' id='video' value={props.video} onChange={(event) => props.setVideo(event.target.value)}>
        <option value='-1'>-</option>
        {videos}
      </select>
    </label>
  );
}

function Song(props: any) {
  let songs = getSongs().map(song => <option value={song.i}>{song.title}</option>);
  return (
    <label>
      <h6>曲</h6>
      <select name='song' id='song' value={props.song} onChange={(event) => props.setSong(event.target.value)}>
        <option value='-1'>-</option>
        {songs}
      </select>
    </label>
  );
}

function Artist(props: any) {
  let artists = getArtists().map(artist => <option value={artist.i}>{artist.name}</option>);
  return (
    <label>
      <h6>アーティスト</h6>
      <select name='artist' id='artist' value={props.artist} onChange={(event) => props.setArtist(event.target.value)}>
        <option value='-1'>-</option>
        {artists}
      </select>
    </label>
  );
}

function Radio(props: any) {
  return (
    <label className='col s2 m1'>
      <input className='with-gap' name='display-num' type='radio' value={props.num} checked={props.checked} onClick={() => props.setDisplaynum(props.num)} />
      <span>{props.num}</span>
    </label>
  );
}

function Displaynum(props: any) {
  return (
    <div>
      <label>
        <h6>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio num='5' setDisplaynum={props.setDisplaynum} checked={props.displaynum == 5} />
        <Radio num='10' setDisplaynum={props.setDisplaynum} checked={props.displaynum == 10} />
        <Radio num='20' setDisplaynum={props.setDisplaynum} checked={props.displaynum == 20} />
      </form>
    </div>
  );
}
