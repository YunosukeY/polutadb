import React from 'react';

import SimpleResultTableRow from './SimpleResultTableRow';
import { Singing } from '../../data/interfaces';

export default {
  title: 'result/SimpleResultTableRow',
};

export const showSimpleResultTableRow = () => {
  const singing = new Singing(0, 0, 0, 0);

  return <SimpleResultTableRow singing={singing} i={1} />;
};
