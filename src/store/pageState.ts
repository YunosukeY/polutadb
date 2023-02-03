import { atom, selector } from 'recoil';

export const pageState = atom<number>({
  key: 'store/pageState',
  default: 1,
});

export const initPage = selector<void>({
  key: 'initPage',
  get: () => {
    return;
  },
  set: ({ set }) => set(pageState, 1),
});
