import { atom } from 'jotai';
import { type Artist, type Data, Singing, type Song, type Type, type Video } from '../data/types';

export type DataAtom = {
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

export const dataAtom = atom<DataAtom>({});

export const artistsAtom = atom((get) => get(dataAtom).artists);
export const videosAtom = atom((get) => get(dataAtom).videos);
export const typesAtom = atom((get) => get(dataAtom).types);
export const songsAtom = atom((get) => get(dataAtom).songs);
export const singingsAtom = atom((get) => get(dataAtom).singings);

export const initializedAtom = atom((get) => {
  const state = get(dataAtom);
  return (
    state.artists !== undefined &&
    state.videos !== undefined &&
    state.types !== undefined &&
    state.songs !== undefined &&
    state.singings !== undefined
  );
});
/** 書き込み専用 */
export const initializeAtom = atom(null, (_get, set, data: Data) => {
  set(dataAtom, (prev) => ({
    ...prev,
    ...data,
    singings: data.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
  }));
});
