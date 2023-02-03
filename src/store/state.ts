import { atom } from 'recoil';
import { Artist, Video, Song, Singing, Type } from '../data/types';

export type AppState = {
  favos: Map<number, boolean>;
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

export const defaultState: AppState = {
  favos: new Map<number, boolean>(),
};

export const appState = atom<AppState>({
  key: 'userState',
  default: defaultState,
});
