import React from 'react';
import * as nextRouter from 'next/router';

import KeyVisual from './KeyVisual';

export default {
  title: 'layout/KeyVisual',
};

export const showDeformed = () => {
  nextRouter.useRouter = () => ({
    pathname: '/hoge',
  });

  return <KeyVisual />;
};

export const showPickup = () => {
  nextRouter.useRouter = () => ({
    pathname: '/',
  });

  return <KeyVisual />;
};
