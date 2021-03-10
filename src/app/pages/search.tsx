import * as React from 'react';
import { useState } from 'react';
import queryString from 'query-string';

import { Query } from '../lib/query';
import { Selects } from '../components/select';
import Result from '../components/result';
import { ScrollToSearch } from '../components/scroll';

// eslint-disable-next-line max-lines-per-function
export default function Search(props: {
  rowqs: string;
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

  return (
    <>
      <ScrollToSearch />
      <Selects
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
        setPagenum={setPagenum}
      />
      <Result
        query={query}
        pagenum={pagenum}
        setPagenum={setPagenum}
        isFavo={props.isFavo}
        toggleFavo={props.toggleFavo}
      />
    </>
  );
}
