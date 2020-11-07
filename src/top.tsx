import * as React from 'react';
import { useState } from 'react';
import queryString from 'query-string';
import { Select } from './select';
import { Result } from './result';

export function Top(props: { rowqs: string }) {
  let rowqs = props.rowqs;
  let qs = queryString.parse(rowqs);
  let genre = (qs.genre == null) ? -1 : Number(qs.genre);
  let type = (qs.type == null) ? -1 : Number(qs.type);
  let video = (qs.video == null) ? -1 : Number(qs.video);
  let song = (qs.song == null) ? -1 : Number(qs.song);
  let artist = (qs.artist == null) ? -1 : Number(qs.artist);
  let withInst = (qs.withInst == null) ? true : (qs.withInst == 'true');
  let aCappella = (qs.aCappella == null) ? true : (qs.aCappella == 'true');
  let full = (qs.full == null) ? true : (qs.full == 'true');
  let onechorus = (qs.onechorus == null) ? true : (qs.onechorus == 'true');

  const [displaynum, setDisplaynum] = useState(5);
  let hasResult = (rowqs == '') ? false : true;
  const [pagenum, setPagenum] = useState(1);

  function setGenre(newGenre: number) {
    setPagenum(1);
    window.location.href = `?genre=${newGenre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setType(newType: number) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${newType}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setVideo(newVideo: number) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${newVideo}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setSong(newSong: number) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${newSong}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setArtist(newArtist: number) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${newArtist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setWithInst(newWithInst: boolean) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${newWithInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setACappella(newACappella: boolean) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${newACappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setFull(newFull: boolean) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${newFull}&onechorus=${onechorus}#search`;
  }
  function setOnechorus(newOnechorus: boolean) {
    setPagenum(1);
    window.location.href = `?genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${newOnechorus}#search`;
  }

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    setDisplaynum(newDnum);
    setPagenum(1);
  }

  return (
    <>
      <About />
      <Select
        genre={genre} setGenre={setGenre}
        type={type} setType={setType}
        video={video} setVideo={setVideo}
        song={song} setSong={setSong}
        artist={artist} setArtist={setArtist}
        withInst={withInst} setWithInst={setWithInst}
        aCappella={aCappella} setACappella={setACappella}
        full={full} setFull={setFull}
        onechorus={onechorus} setOnechorus={setOnechorus}
        displaynum={displaynum} setDisplaynum={onDnumChange}
      />
      {hasResult && <Result
        genre={genre}
        type={type}
        video={video}
        song={song}
        artist={artist}
        withInst={withInst}
        aCappella={aCappella}
        full={full}
        onechorus={onechorus}
        displaynum={displaynum}
        pagenum={pagenum}
        setPagenum={setPagenum}
      />}
    </>
  );
}

function About() {
  return (
    <div className='pane'>
      <h4>About</h4>
        PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber 尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．<br />
      <br />
        ・表示件数を増やすと重くなる場合があります<br />
        ・不具合，ご要望は管理人ツイッターアカウントまでご連絡ください<br />
    </div>
  );
}
