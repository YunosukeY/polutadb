import { atom } from 'jotai';

export const pageAtom = atom<number>(1);

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const initPageAtom = atom(
  null, // read
  (get, set) => {
    set(pageAtom, 1);
  },
);
