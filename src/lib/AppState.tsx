import React, { useEffect } from 'react';
import { atom, useRecoilValue, useRecoilState, selector } from 'recoil';
import { Artist, Data, Singing, Song, Type, Video } from '../data/types';

export type AppState = {
  favos: Map<number, boolean>;
  sortedBy: number;
  pagenum: number;
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

const defaultState: AppState = {
  favos: new Map<number, boolean>(),
  sortedBy: 0,
  pagenum: 1,
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
    pagenum: 1,
  };
}

export const appState = atom<AppState>({
  key: 'userState',
  default: defaultState,
});

export const artistsState = selector({
  key: 'artistsState',
  get: ({ get }) => get(appState).artists,
});
export const videosState = selector({
  key: 'videosState',
  get: ({ get }) => get(appState).videos,
});
export const typesState = selector({
  key: 'typesState',
  get: ({ get }) => get(appState).types,
});
export const songsState = selector({
  key: 'songsState',
  get: ({ get }) => get(appState).songs,
});
export const singingsState = selector({
  key: 'singingsState',
  get: ({ get }) => get(appState).singings,
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

export const useInit = () => {
  const [state, setState] = useRecoilState(appState);

  const initialized =
    state.artists !== undefined &&
    state.videos !== undefined &&
    state.types !== undefined &&
    state.songs !== undefined &&
    state.singings !== undefined;

  const initialize = (data: Data) => {
    setState((state) => ({
      ...state,
      ...data,
      singings: data.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
    }));
  };

  return [initialized, initialize] as const;
};
