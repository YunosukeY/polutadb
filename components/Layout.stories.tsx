import React from 'react';
import * as nextRouter from 'next/router';

import Layout from './Layout';

export default {
  title: 'components/Layout',
};

export const showDeformed = () => {
  nextRouter.useRouter = () => ({
    pathname: '/hoge',
  });

  return <Layout />;
};

export const showPickup = () => {
  nextRouter.useRouter = () => ({
    pathname: '/',
  });

  return <Layout />;
};
