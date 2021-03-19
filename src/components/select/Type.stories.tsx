import React from 'react';

import Type from './Type';
import { Query } from '../../lib/query';

export default {
  title: 'select/Type',
};

export const showType = () => {
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

  return <Type query={query} setLocationSearch={() => {}} />;
};

export const typeZero = () => {
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

  return <Type query={query} setLocationSearch={() => {}} />;
};
