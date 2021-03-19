import React from 'react';

import Sort from './Sort';

export default {
  title: 'select/Sort',
};

export const showSort = () => {
  return <Sort sortedBy={0} setSortedBy={() => {}} />;
};
