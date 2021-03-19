import React from 'react';

import FullTextSearch from './FullTextSearch';
import { Query } from '../../lib/query';

export default {
  title: 'select/FullTextSearch',
};

export const showFullTextSearch = () => {
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

  return <FullTextSearch query={query} setLocationSearch={() => {}} />;
};

export const searchHoge = () => {
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

  return <FullTextSearch query={query} setLocationSearch={() => {}} />;
};
