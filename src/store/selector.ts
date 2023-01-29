import { selector } from 'recoil';
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
