import * as React from 'react';
import { useState } from 'react';
import { mInit } from './materialize';
import { getGenres, getTypes, getVideos, getSongs, getArtists, getGenreId } from './data';

export class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <div className='row'>
          <div className='col s12 m12 l10 offset-l1 xl8 offset-xl2' id='sp'>
            <Top />
          </div>
        </div>
      </div>
    );
  }
}

class Top extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Select />
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div className='block description-block'>
        <h4>About</h4>
        PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br />
        <br />
        ・表示件数を増やすと重くなる場合があります<br />
        ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br />
      </div>
    );
  }
}

class Select extends React.Component {
  componentDidMount() {
    mInit();
  }

  render() {
    return (
      <div className='block select-block'>
        <h4>Search</h4>
        <Genre />
        <Type />
        <Video />
        <Song />
        <Artist />
        <Number />
      </div>
    );
  }
}

class Genre extends React.Component {
  render() {
    let genres = getGenres().map(genre => <option value={genre.i}>{genre.name}</option>);
    return (
      <label>
        <h6>曲ジャンル</h6>
        <select name='genre' id='genre'>
          <option value='-1'>-</option>
          {genres}
        </select>
      </label>
    );
  }
}

class Type extends React.Component {
  render() {
    let types = getTypes().map(type => <option value={type.i}>{type.name}</option>);
    return (
      <label>
        <h6>枠タイプ</h6>
        <select name='type' id='type'>
          <option value='-1'>-</option>
          {types}
        </select>
      </label>
    );
  }
}

class Video extends React.Component {
  render() {
    let videos = getVideos().map(video => <option value={video.i}>{video.date}: {video.title}</option>);
    return (
      <label>
        <h6>動画</h6>
        <select name='video' id='video'>
          <option value='-1'>-</option>
          {videos}
        </select>
      </label>
    );
  }
}

class Song extends React.Component {
  render() {
    let songs = getSongs().map(song => <option value={song.i}>{song.title}</option>);
    return (
      <label>
        <h6>曲</h6>
        <select name='song' id='song'>
          <option value='-1'>-</option>
          {songs}
        </select>
      </label>
    );
  }
}

class Artist extends React.Component {
  render() {
    let artists = getArtists().map(artist => <option value={artist.i}>{artist.name}</option>);
    return (
      <label>
        <h6>アーティスト</h6>
        <select name='artist' id='artist'>
          <option value='-1'>-</option>
          {artists}
        </select>
      </label>
    );
  }
}

function Radio(props: any) {
  return (
    <label className='col s2 m1'>
      <input className='with-gap' name='display-num' type='radio' value='{props.num}' />
      <span>{props.num}</span>
    </label>
  );
}

class Number extends React.Component {
  render() {
    return (
      <div>
        <label>
          <h6>表示件数</h6>
        </label>
        <form action='#' className='row'>
          <Radio num='5' />
          <Radio num='10' />
          <Radio num='20' />
        </form>
      </div>
    );
  }
}