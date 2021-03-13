import React from 'react';
import * as nextRouter from 'next/router';

import Top from '../pages/index';

export default {
  title: 'pages/index',
};

export const showTop = () => {
  nextRouter.useRouter = () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '',
    basePath: '',
  });

  nextRouter.router = {
    push: () => {},
    prefetch: () => new Promise((resolve, reject) => {}),
  };

  return <Top />;
};
