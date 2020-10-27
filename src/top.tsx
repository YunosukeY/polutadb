import * as React from 'react';
import { useState, useEffect } from 'react';
import { Select } from './select';
import { Result, search } from './result';
import { Singing } from './data';

export function Top() {
  const [genre, setGenre] = useState(-1);
  const [type, setType] = useState(-1);
  const [video, setVideo] = useState(-1);
  const [song, setSong] = useState(-1);
  const [artist, setArtist] = useState(-1);
  const [displaynum, setDisplaynum] = useState(5);
  const [hasResult, setHasResult] = useState(false);
  const [result, setResult] = useState(Array<Singing>());

  function onGenreChange(newGenre: number) {
    setGenre(newGenre);
    setResult(search(video, song, artist, newGenre, type));
    setHasResult(true);
  };

  function onTypeChange(newType: number) {
    setType(newType);
    setResult(search(video, song, artist, genre, newType));
    setHasResult(true);
  };

  function onVideoChange(newVideo: number) {
    setVideo(newVideo);
    setResult(search(newVideo, song, artist, genre, type));
    setHasResult(true);
  };

  function onSongChange(newSong: number) {
    setSong(newSong);
    setResult(search(video, newSong, artist, genre, type));
    setHasResult(true);
  };

  function onArtistChange(newArtist: number) {
    setArtist(newArtist);
    setResult(search(video, song, newArtist, genre, type));
    setHasResult(true);
  };

  return (
    <>
      <About />
      <Select
        genre={genre} setGenre={onGenreChange}
        type={type} setType={onTypeChange}
        video={video} setVideo={onVideoChange}
        song={song} setSong={onSongChange}
        artist={artist} setArtist={onArtistChange}
        displaynum={displaynum} setDisplaynum={setDisplaynum}
      />
      {hasResult && <Result result={result} displaynum={displaynum} />}
    </>
  );
}

function About() {
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
