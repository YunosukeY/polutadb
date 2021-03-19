import React from 'react';

import Inst from './Inst';
import { Query } from '../../lib/query';

export default {
  title: 'select/Inst',
};

export const showInst = () => {
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

  return <Inst query={query} setLocationSearch={() => {}} />;
};
