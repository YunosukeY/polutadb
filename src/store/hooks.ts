import { useMount } from 'react-use';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import type { Data } from '../data/types';
import { initializeSelector, initializedSelector } from './dataAtom';

export const useInit = (data: Data) => {
  const initialized = useRecoilValue(initializedSelector);
  const initialize = useSetRecoilState(initializeSelector);

  useMount(() => {
    if (!initialized) initialize(data);
  });

  return;
};
