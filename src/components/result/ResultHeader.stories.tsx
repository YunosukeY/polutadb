import React from 'react';

import ResultHeader from './ResultHeader';

export default {
  title: 'result/ResultHeader',
};

export const tenResults = () => {
  return <ResultHeader resultnum={10} />;
};

export const zeroResults = () => {
  return <ResultHeader resultnum={0} />;
};

export const oneResult = () => {
  return <ResultHeader resultnum={1} />;
};
