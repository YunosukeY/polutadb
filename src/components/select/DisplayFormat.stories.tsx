import React from 'react';

import DisplayFormat from './DisplayFormat';

export default {
  title: 'select/DisplayFormat',
};

export const showDisplayFormat = () => {
  return <DisplayFormat displayMode={0} setDisplayMode={() => {}} />;
};
