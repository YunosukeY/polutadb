import React from 'react';

import Genre from './Genre';
import { Query } from '../../lib/query';

export default {
  title: 'select/Genre',
};

export const showGenre = () => {
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

  return <Genre query={query} setLocationSearch={() => {}} />;
};

export const genreZero = () => {
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

  return <Genre query={query} setLocationSearch={() => {}} />;
};
