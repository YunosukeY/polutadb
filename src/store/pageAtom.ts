import { atom, selector } from 'recoil';

export const pageAtom = atom<number>({
  key: 'store/pageAtom',
  default: 1,
});

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initPageSelector = selector<void>({
  key: `${pageAtom.key}/initPageSelector`,
  get: () => {
    return;
  },
  set: ({ set }) => {
    set(pageAtom, 1);
  },
});
