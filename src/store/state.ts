import { atom } from 'recoil';
import { Artist, Video, Song, Singing, Type } from '../data/types';

export type AppState = {
  artists?: Artist[];
  videos?: Video[];
  types?: Type[];
  songs?: Song[];
  singings?: Singing[];
};

export const appState = atom<AppState>({
  key: 'userState',
  default: {},
});
