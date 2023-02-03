import { atom, DefaultValue, selector } from 'recoil';
import { Artist, Video, Song, Singing, Type, Data } from '../data/types';

export type DataState = {
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

export const dataState = atom<DataState>({
  key: 'store/dataState',
  default: {},
});

export const artistsState = selector({
  key: 'artistsState',
  get: ({ get }) => get(dataState).artists,
});

export const videosState = selector({
  key: 'videosState',
  get: ({ get }) => get(dataState).videos,
});

export const typesState = selector({
  key: 'typesState',
  get: ({ get }) => get(dataState).types,
});

export const songsState = selector({
  key: 'songsState',
  get: ({ get }) => get(dataState).songs,
});

export const singingsState = selector({
  key: 'singingsState',
  get: ({ get }) => get(dataState).singings,
});

export const initializedState = selector({
  key: 'initializedState',
  get: ({ get }) => {
    const state = get(dataState);
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
    newValue instanceof DefaultValue
      ? set(dataState, newValue)
      : set(dataState, (prev) => ({
          ...prev,
          ...newValue,
          singings: newValue.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
        }));
  },
});
