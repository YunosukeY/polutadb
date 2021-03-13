import React from 'react';
import { useState } from 'react';

import Select from './Select';
import { Query } from '../../lib/Query';

export default {
  title: 'components/pane/Select',
};

export const showSelects = () => {
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
    setLocationSearch: (newQuery: Query) => {},
    setPagenum: setPagenum,
  };

  localStorage.clear();

  return <Select {...props} />;
};
