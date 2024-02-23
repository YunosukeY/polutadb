import { atom, selector } from 'recoil';

export const pageAtom = atom<number>({
  key: 'store/pageAtom',
  default: 1,
});

export const initPageSelector = selector<void>({
  key: `${pageAtom.key}/initPageSelector`,
  get: () => {
    return;
  },
  set: ({ set }) => { set(pageAtom, 1); },
});
