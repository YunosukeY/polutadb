import { atom } from 'jotai';

export const pageAtom = atom(1);

/** 書き込み専用。1ページ目に戻す */
export const initPageAtom = atom(null, (_get, set) => {
  set(pageAtom, 1);
});
