import { selector, selectorFamily } from 'recoil';
import { Data, Singing } from '../data/types';
import { appState } from './state';

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

export const initializedState = selector({
  key: 'initializedState',
  get: ({ get }) => {
    const state = get(appState);
    return (
      state.artists !== undefined &&
      state.videos !== undefined &&
      state.types !== undefined &&
      state.songs !== undefined &&
      state.singings !== undefined
    );
  },
});
export const initializeState = selector<Data>({
  key: 'initializeState',
  get: () => {
    throw new Error();
  },
  set: ({ set }, newValue) => {
    set(appState, (prev) => ({
      ...prev,
      ...newValue,
      singings: (newValue as Data).singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
    }));
  },
});

export const favoState = selectorFamily<boolean, { singingId: number }>({
  key: 'favoState',
  get: ({ singingId }) => ({ get }) => Boolean(get(appState).favos.get(singingId)),
  set: ({ singingId }) => ({ set }, newValue) => {
    set(appState, (prev) => ({
      ...prev,
      favos: prev.favos.set(singingId, newValue as boolean),
    }));
  },
});
export const isFavoState = selector<(singingId: number) => boolean>({
  key: 'isFavoState',
  get: ({ get }) => (singingId: number) => Boolean(get(appState).favos.get(singingId)),
});
