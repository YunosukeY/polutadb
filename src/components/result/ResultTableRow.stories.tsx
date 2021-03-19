import React from 'react';

import ResultTableRow from './ResultTableRow';
import { Singing } from '../../data/interfaces';

export default {
  title: 'result/ResultTableRow',
};

export const showResultTableRow = () => {
  const singing = new Singing(0, 0, 0, 0);

  return <ResultTableRow singing={singing} i={1} />;
};
