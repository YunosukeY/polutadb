import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { AppState, appState, defaultState } from './state';

function getInitialState(): AppState {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp)) as Map<number, boolean>) : defaultState.favos;
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : defaultState.sortedBy;

  return {
    favos,
    sortedBy,
    pagenum: 1,
  };
}

const Persistence: React.FC = () => {
  const [state, setState] = useRecoilState(appState);

  useEffect(() => {
    setState(getInitialState());
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...state.favos]));
    window.localStorage.setItem('sortedBy', String(state.sortedBy));
  }, [state]);

  return <></>;
};

export default Persistence;