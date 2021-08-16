import React, { useEffect } from 'react';
import { atom, useRecoilValue, useRecoilState } from 'recoil';

interface AppState {
  favos: Map<number, boolean>;
  displaynum: number;
  displayMode: number;
  sortedBy: number;
}

const defaultState: AppState = {
  favos: new Map<number, boolean>(),
  displaynum: 5,
  displayMode: 0,
  sortedBy: 0,
};

function getInitialState(): AppState {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp)) as Map<number, boolean>) : defaultState.favos;
  tmp = window.localStorage.getItem('displaynum');
  const displaynum = tmp !== null ? Number(tmp) : defaultState.displaynum;
  tmp = window.localStorage.getItem('displayMode');
  const displayMode = tmp !== null ? Number(tmp) : defaultState.displayMode;
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : defaultState.sortedBy;

  return {
    favos,
    displaynum,
    displayMode,
    sortedBy,
  };
}

export const appState = atom<AppState>({
  key: 'userState',
  default: defaultState,
});

export function StatePersistence() {
  console.log(1);

  const [state, setState] = useRecoilState(appState);

  useEffect(() => {
    setState(getInitialState());
  }, []);

  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...state.favos]));
    window.localStorage.setItem('displaynum', String(state.displaynum));
    window.localStorage.setItem('displayMode', String(state.displayMode));
    window.localStorage.setItem('sortedBy', String(state.sortedBy));
  }, [state]);

  return <></>;
}

export const useIsFavo = () => {
  const state = useRecoilValue(appState);

  return (singingId: number) => {
    return state.favos.has(singingId) && (state.favos.get(singingId) as boolean);
  };
};

export const useToggleFavo = () => {
  const [state, setState] = useRecoilState(appState);

  return (singingId: number) => {
    if (state.favos.has(singingId)) {
      const f = state.favos.get(singingId) as boolean;
      setState((state) => ({
        ...state,
        favos: new Map(state.favos.set(singingId, !f)),
      }));
    } else {
      setState((state) => ({
        ...state,
        favos: new Map(state.favos.set(singingId, true)),
      }));
    }
  };
};
