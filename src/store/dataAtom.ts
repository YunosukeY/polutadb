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

// Initialize atom acts as a write-only atom to set the data.
export const initializeAtom = atom(
  null, // Read part is not used, can be null or undefined
  (get, set, newValue: Data) => {
    // Assuming newValue is always of type Data when used to set
    set(dataAtom, (prev) => ({
      ...prev,
      ...newValue,
      singings: newValue.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
    }));
  },
);
