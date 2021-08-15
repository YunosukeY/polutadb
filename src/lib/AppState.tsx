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
  const ret = defaultState;

  tmp = window.localStorage.getItem('favos');
  if (tmp !== null) ret.favos = new Map(JSON.parse(tmp)) as Map<number, boolean>;

  tmp = window.localStorage.getItem('displaynum');
  if (tmp !== null) ret.displaynum = Number(tmp);

  tmp = window.localStorage.getItem('displayMode');
  if (tmp !== null) ret.displayMode = Number(tmp);

  tmp = window.localStorage.getItem('sortedBy');
  if (tmp !== null) ret.sortedBy = Number(tmp);

  return ret;
}

export const appState = atom<AppState>({
  key: 'userState',
  default: defaultState,
});

export function StatePersistence() {
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
