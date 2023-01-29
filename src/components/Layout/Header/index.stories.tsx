import path from 'path';
import base from 'paths.macro';
import React from 'react';

import Header from '.';

export default {
  title: path.relative('/src', base),
};

export const showHeader = () => {
  return <Header />;
};
