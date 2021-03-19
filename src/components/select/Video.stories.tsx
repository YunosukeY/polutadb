import React from 'react';

import Video from './Video';
import { Query } from '../../lib/query';

export default {
  title: 'select/Video',
};

export const showVideo = () => {
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

  return <Video query={query} setLocationSearch={() => {}} />;
};

export const videoZero = () => {
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

  return <Video query={query} setLocationSearch={() => {}} />;
};
