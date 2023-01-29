import React from 'react';

import ResultCount from './ResultCount';

export default {
  title: 'result/ResultCount',
};

export const tenResults = () => {
  return <ResultCount resultnum={10} />;
};

export const zeroResults = () => {
  return <ResultCount resultnum={0} />;
};

export const oneResult = () => {
  return <ResultCount resultnum={1} />;
};
