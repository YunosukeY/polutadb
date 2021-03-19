import React from 'react';

import Artist from './Artist';
import { Query } from '../../lib/query';

export default {
  title: 'select/Artist',
};

export const showArtist = () => {
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

  return <Artist query={query} setLocationSearch={() => {}} />;
};

export const artistZero = () => {
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

  return <Artist query={query} setLocationSearch={() => {}} />;
};
