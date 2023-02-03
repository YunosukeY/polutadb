import { atom, DefaultValue, selector, selectorFamily } from 'recoil';

export const favoState = atom<Map<number, boolean>>({
  key: 'store/favoState',
  default: new Map<number, boolean>(),
});

export const favoSelector = selectorFamily<boolean, { singingId: number }>({
  key: `${favoState.key}/favoSelector`,
  get: ({ singingId }) => ({ get }) => Boolean(get(favoState).get(singingId)),
  set: ({ singingId }) => ({ set }, newValue) => {
    newValue instanceof DefaultValue
      ? set(favoState, newValue)
      : set(favoState, (prev) => prev.set(singingId, newValue));
  },
});
export const isFavoSelector = selector<(singingId: number) => boolean>({
  key: `${favoState.key}/isFavoSelector`,
  get: ({ get }) => (singingId: number) => Boolean(get(favoState).get(singingId)),
});
