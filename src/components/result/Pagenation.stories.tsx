import React from 'react';

import Pagenation from './Pagenation';

export default {
  title: 'result/Pagenation',
};

export const firstPage = () => {
  return <Pagenation pagenum={1} setPagenum={() => {}} lastPageNum={10} />;
};

export const middlePage = () => {
  return <Pagenation pagenum={10} setPagenum={() => {}} lastPageNum={100} />;
};
