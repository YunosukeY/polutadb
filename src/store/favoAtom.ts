import { atom, DefaultValue, selectorFamily } from 'recoil';

export const favoAtom = atom<Map<number, boolean>>({
  key: 'store/favoAtom',
  default: new Map<number, boolean>(),
});

export const favoSelector = selectorFamily<boolean, { singingId: number }>({
  key: `${favoAtom.key}/favoSelector`,
  get:
    ({ singingId }) =>
    ({ get }) =>
      Boolean(get(favoAtom).get(singingId)),
  set:
    ({ singingId }) =>
    ({ set }, newValue) => {
      newValue instanceof DefaultValue
        ? set(favoAtom, newValue)
        : set(favoAtom, (prev) => new Map(prev.set(singingId, newValue)));
    },
});
