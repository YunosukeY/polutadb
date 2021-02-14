import * as React from 'react';
import { useState } from 'react';
import queryString from 'query-string';
import { Select } from './select';
import Result from './result';

export default function Top(props: {
  rowqs: string;
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
  displaynum: number;
  setDisplaynum: (displaynum: number) => void;
  displayMode: number;
  setDisplayMode: (mode: number) => void;
  sortedBy: number;
  setSortedBy: (sortedBy: number) => void;
}) {
  const rowqs = props.rowqs;
  const qs = queryString.parse(rowqs);
  const query = qs.query == null ? '' : String(qs.query);
  const genre = qs.genre == null ? -1 : Number(qs.genre);
  const type = qs.type == null ? -1 : Number(qs.type);
  const video = qs.video == null ? -1 : Number(qs.video);
  const song = qs.song == null ? -1 : Number(qs.song);
  const artist = qs.artist == null ? -1 : Number(qs.artist);
  const withInst = qs.withInst == null ? true : qs.withInst === 'true';
  const aCappella = qs.aCappella == null ? true : qs.aCappella === 'true';
  const full = qs.full == null ? true : qs.full === 'true';
  const onechorus = qs.onechorus == null ? true : qs.onechorus === 'true';

  const hasResult = rowqs === '' ? false : true;
  const [pagenum, setPagenum] = useState(1);

  function setQuery(newQuery: string) {
    setPagenum(1);
    window.location.href = `?query=${newQuery}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setGenre(newGenre: number) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${newGenre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setType(newType: number) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${newType}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setVideo(newVideo: number) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${newVideo}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setSong(newSong: number) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${newSong}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setArtist(newArtist: number) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${newArtist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setWithInst(newWithInst: boolean) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${newWithInst}&aCappella=${aCappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setACappella(newACappella: boolean) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${newACappella}&full=${full}&onechorus=${onechorus}#search`;
  }
  function setFull(newFull: boolean) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${newFull}&onechorus=${onechorus}#search`;
  }
  function setOnechorus(newOnechorus: boolean) {
    setPagenum(1);
    window.location.href = `?query=${query}&genre=${genre}&type=${type}&video=${video}&song=${song}&artist=${artist}&withInst=${withInst}&aCappella=${aCappella}&full=${full}&onechorus=${newOnechorus}#search`;
  }

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    props.setDisplaynum(newDnum);
    setPagenum(1);
  }

  return (
    <>
      {!hasResult && <About />}
      <Select
        query={query}
        setQuery={setQuery}
        genre={genre}
        setGenre={setGenre}
        type={type}
        setType={setType}
        video={video}
        setVideo={setVideo}
        song={song}
        setSong={setSong}
        artist={artist}
        setArtist={setArtist}
        withInst={withInst}
        setWithInst={setWithInst}
        aCappella={aCappella}
        setACappella={setACappella}
        full={full}
        setFull={setFull}
        onechorus={onechorus}
        setOnechorus={setOnechorus}
        displaynum={props.displaynum}
        setDisplaynum={onDnumChange}
        displayMode={props.displayMode}
        setDisplayMode={props.setDisplayMode}
        sortedBy={props.sortedBy}
        setSortedBy={props.setSortedBy}
      />
      <Result
        query={query}
        genre={genre}
        type={type}
        video={video}
        song={song}
        artist={artist}
        withInst={withInst}
        aCappella={aCappella}
        full={full}
        onechorus={onechorus}
        sortedBy={props.sortedBy}
        displaynum={props.displaynum}
        displayMode={props.displayMode}
        pagenum={pagenum}
        setPagenum={setPagenum}
        isFavo={props.isFavo}
        toggleFavo={props.toggleFavo}
      />
    </>
  );
}

function About() {
  return (
    <div className='pane' id='about'>
      <h4>About</h4>
      <Describe style={{}} />
    </div>
  );
}

function Describe(props: { style: any }) {
  return (
    <div style={props.style}>
      PolutaDB（ぽるうたデータベース）では，ホロライブ所属の VTuber
      尾丸ポルカさんの歌（通称：ぽるうた）を検索することができます．
      <br />
      <br />
      ・表示件数を増やすと重くなる場合があります
      <br />
      ・お気に入り情報はブラウザに保存されるため，キャッシュクリアにご注意ください
      <br />
      ・不具合，ご要望は<a href='https://twitter.com/k1m1tsu'>管理人Twitter</a>までご連絡ください
      <br />
    </div>
  );
}
