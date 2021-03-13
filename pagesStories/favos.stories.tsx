import React from 'react';
import { useEffect } from 'react';

import Favos from '../pages/favos';
import { useAppState, useSetAppState } from '../lib/AppState';

export default {
  title: 'pages/favos',
};

export const showFavos = () => {
  // set state
  const appState = useAppState();
  const setAppState = useSetAppState();
  if (appState.displayMode !== 0 || appState.favos.size !== 1) {
    useEffect(() => {
      setAppState((state) => ({ ...state, displayMode: 0, favos: new Map([[0, true]]) }));
    });
  }

  return <Favos />;
};
