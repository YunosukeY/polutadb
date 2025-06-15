import { atom } from 'jotai';
import { RESET } from 'jotai/utils';

export const favoAtom = atom<Map<number, boolean>>(new Map<number, boolean>());

export const favoAtomFamily = (singingId: number) =>
  atom(
    (get) => Boolean(get(favoAtom).get(singingId)),
    (get, set, newValue: boolean) => {
      set(favoAtom, (prev) => new Map(prev.set(singingId, newValue)));
    },
  );
