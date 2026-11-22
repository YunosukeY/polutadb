import { atom, type WritableAtom } from 'jotai';

export const favoAtom = atom<Map<number, boolean>>(new Map<number, boolean>());

type FavoAtom = WritableAtom<boolean, [boolean], void>;
const family = new Map<number, FavoAtom>();

/** 歌唱データ1件のお気に入り状態。同じIDには同じatomを返す（描画のたびに作り直すと購読し直しになる） */
export const favoAtomFamily = (singingId: number): FavoAtom => {
  let favo = family.get(singingId);
  if (favo === undefined) {
    favo = atom(
      (get) => Boolean(get(favoAtom).get(singingId)),
      (_get, set, newValue: boolean) => {
        set(favoAtom, (prev) => new Map(prev).set(singingId, newValue));
      },
    );
    family.set(singingId, favo);
  }
  return favo;
};
