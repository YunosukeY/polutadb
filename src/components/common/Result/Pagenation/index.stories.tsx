import path from 'path';
import base from 'paths.macro';
import React from 'react';

import Pagenation from '.';

export default {
  title: path.relative('/src', base),
};

export const firstPage = () => {
  return <Pagenation pagenum={1} setPagenum={() => {}} lastPageNum={10} />;
};

export const middlePage = () => {
  return <Pagenation pagenum={10} setPagenum={() => {}} lastPageNum={100} />;
};
