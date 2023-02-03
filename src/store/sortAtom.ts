import { atom } from 'recoil';

export const sortAtom = atom<number>({
  key: 'store/sortAtom',
  default: 0,
});
