import path from 'path';
import base from 'paths.macro';
import React from 'react';

import ResultCount from '.';

export default {
  title: path.relative('/src', base),
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
