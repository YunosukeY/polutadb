import React from 'react';

import Length from './Length';
import { Query } from '../../lib/query';

export default {
  title: 'select/Length',
};

export const showLength = () => {
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

  return <Length query={query} setLocationSearch={() => {}} />;
};
