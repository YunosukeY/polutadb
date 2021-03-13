import React from 'react';
import { useState, useEffect } from 'react';

import Result from './Result';
import { Query } from '../../lib/Query';
import { useAppState, useSetAppState } from '../../lib/AppState';

export default {
  title: 'pane/Result',
};

export const showResult = () => {
  // create props
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

  // set state
  const appState = useAppState();
  const setAppState = useSetAppState();
  if (appState.displayMode !== 0) {
    useEffect(() => {
      setAppState((state) => ({ ...state, displayMode: 0 }));
    });
  }

  return <Result {...props} />;
};

export const showSimpleResult = () => {
  // create props
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

  // set state
  const appState = useAppState();
  const setAppState = useSetAppState();
  if (appState.displayMode !== 1) {
    useEffect(() => {
      setAppState((state) => ({ ...state, displayMode: 1 }));
    });
  }

  return <Result {...props} />;
};
