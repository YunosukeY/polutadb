import { atom, DefaultValue, selector } from 'recoil';
import { Artist, Video, Song, Singing, Type, Data } from '../data/types';

export type DataAtom = {
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

export const dataAtom = atom<DataAtom>({
  key: 'store/dataAtom',
  default: {},
});

export const artistsSelector = selector({
  key: `${dataAtom.key}/artistsSelector`,
  get: ({ get }) => get(dataAtom).artists,
});

export const videosSelector = selector({
  key: `${dataAtom.key}/videosSelector`,
  get: ({ get }) => get(dataAtom).videos,
});

export const typesSelector = selector({
  key: `${dataAtom.key}/typesSelector`,
  get: ({ get }) => get(dataAtom).types,
});

export const songsSelector = selector({
  key: `${dataAtom.key}/songsSelector`,
  get: ({ get }) => get(dataAtom).songs,
});

export const singingsSelector = selector({
  key: `${dataAtom.key}/singingsSelector`,
  get: ({ get }) => get(dataAtom).singings,
});

export const initializedSelector = selector({
  key: `${dataAtom.key}/initializedSelector`,
  get: ({ get }) => {
    const state = get(dataAtom);
    return (
      state.artists !== undefined &&
      state.videos !== undefined &&
      state.types !== undefined &&
      state.songs !== undefined &&
      state.singings !== undefined
    );
  },
});
export const initializeSelector = selector<Data>({
  key: `${dataAtom.key}/initializeSelector`,
  get: () => {
    throw new Error();
  },
  set: ({ set }, newValue) => {
    newValue instanceof DefaultValue
      ? set(dataAtom, newValue)
      : set(dataAtom, (prev) => ({
          ...prev,
          ...newValue,
          singings: newValue.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
        }));
  },
});
