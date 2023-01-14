import React, { useEffect } from 'react';
import { atom, useRecoilValue, useRecoilState } from 'recoil';

type AppState = {
  favos: Map<number, boolean>;
  sortedBy: number;
};

const defaultState: AppState = {
  favos: new Map<number, boolean>(),
  sortedBy: 0,
};

function getInitialState(): AppState {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp)) as Map<number, boolean>) : defaultState.favos;
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : defaultState.sortedBy;

  return {
    favos,
    sortedBy,
  };
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
