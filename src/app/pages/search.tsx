import * as React from 'react';
import { useState } from 'react';
import queryString from 'query-string';

import { Query } from '../lib/query';
import { Select } from '../components/select';
import Result from '../components/result';

// eslint-disable-next-line max-lines-per-function
export default function Search(props: {
  rowqs: string;
  displaynum: number;
  setDisplaynum: (displaynum: number) => void;
  displayMode: number;
  setDisplayMode: (mode: number) => void;
  sortedBy: number;
  setSortedBy: (sortedBy: number) => void;
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
}) {
  const qs = queryString.parse(props.rowqs);
  const query = new Query(qs);

  const [pagenum, setPagenum] = useState(1);

  function setQuery(newQuery: string) {
    setPagenum(1);
    query.query = newQuery;
    window.location.href = `?${query}#search`;
  }
  function setGenre(newGenre: number) {
    setPagenum(1);
    query.genre = newGenre;
    window.location.href = `?${query}#search`;
  }
  function setType(newType: number) {
    setPagenum(1);
    query.type = newType;
    window.location.href = `?${query}#search`;
  }
  function setVideo(newVideo: number) {
    setPagenum(1);
    query.video = newVideo;
    window.location.href = `?${query}#search`;
  }
  function setSong(newSong: number) {
    setPagenum(1);
    query.song = newSong;
    window.location.href = `?${query}#search`;
  }
  function setArtist(newArtist: number) {
    setPagenum(1);
    query.artist = newArtist;
    window.location.href = `?${query}#search`;
  }
  function setWithInst(newWithInst: boolean) {
    setPagenum(1);
    query.withInst = newWithInst;
    window.location.href = `?${query}#search`;
  }
  function setACappella(newACappella: boolean) {
    setPagenum(1);
    query.aCappella = newACappella;
    window.location.href = `?${query}#search`;
  }
  function setFull(newFull: boolean) {
    setPagenum(1);
    query.full = newFull;
    window.location.href = `?${query}#search`;
  }
  function setOnechorus(newOnechorus: boolean) {
    setPagenum(1);
    query.onechorus = newOnechorus;
    window.location.href = `?${query}#search`;
  }

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    props.setDisplaynum(newDnum);
    setPagenum(1);
  }

  return (
    <>
      <Select
        query={query}
        setQuery={setQuery}
        setGenre={setGenre}
        setType={setType}
        setVideo={setVideo}
        setSong={setSong}
        setArtist={setArtist}
        setWithInst={setWithInst}
        setACappella={setACappella}
        setFull={setFull}
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
