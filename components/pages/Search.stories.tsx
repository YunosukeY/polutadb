import React from 'react';
import { useEffect } from 'react';
import * as nextRouter from 'next/router';

import Search from './Search';
import { useAppState, useSetAppState } from '../../lib/AppState';

export default {
  title: 'pages/Search',
};

export const showSearch = () => {
  nextRouter.useRouter = () => ({
    query: {},
  });

  // set state
  const appState = useAppState();
  const setAppState = useSetAppState();
  if (appState.displayMode !== 0) {
    useEffect(() => {
      setAppState((state) => ({ ...state, displayMode: 0 }));
    });
  }

  return <Search />;
};
