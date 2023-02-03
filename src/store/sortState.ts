import { atom } from 'recoil';

export const sortState = atom<number>({
  key: 'store/sortState',
  default: 0,
});
