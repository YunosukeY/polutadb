import React from 'react';

import Song from './Song';
import { Query } from '../../lib/query';

export default {
  title: 'select/Song',
};

export const showSong = () => {
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

  return <Song query={query} setLocationSearch={() => {}} />;
};

export const songZero = () => {
  const query: Query = {
    query: 'hoge',
    genre: 0,
    type: 0,
    video: 0,
    song: 0,
    artist: 0,
    withInst: true,
    aCappella: true,
    full: true,
    onechorus: true,
  };

  return <Song query={query} setLocationSearch={() => {}} />;
};
