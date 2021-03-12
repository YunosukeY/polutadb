import React from 'react';
import { useState, useEffect } from 'react';

import Result from './Result';
import { Query } from '../lib/Query';
import { useSetAppState } from '../lib/AppState';

export default {
  title: 'components/Result',
};

export const showResult = () => {
  const query: Query = {
    query: '',
    genre: -1,
    type: -1,
    video: -1,
    song: -1,
    artist: -1,
    withInst: true,
    aCappella: true,
    full: true,
    onechorus: true,
  };
  const [pagenum, setPagenum] = useState(1);
  const props = {
    query: query,
    pagenum: pagenum,
    setPagenum: setPagenum,
  };

  return <Result {...props} />;
};

export const showSimpleResult = React.memo(() => {
  const query: Query = {
    query: '',
    genre: -1,
    type: -1,
    video: -1,
    song: -1,
    artist: -1,
    withInst: true,
    aCappella: true,
    full: true,
    onechorus: true,
  };
  const [pagenum, setPagenum] = useState(1);
  const props = {
    query: query,
    pagenum: pagenum,
    setPagenum: setPagenum,
  };

  const setAppState = useSetAppState();
  console.log('mounted');
  useEffect(() => {
    console.log('set state');
    setAppState((state) => ({ ...state, displayMode: 1 }));
  }, []);

  return <Result {...props} />;
});
