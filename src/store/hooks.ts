import { useMount } from 'react-use';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Data } from '../data/types';
import { initializedSelector, initializeSelector } from './dataAtom';

export const useInit = (data: Data) => {
  const initialized = useRecoilValue(initializedSelector);
  const initialize = useSetRecoilState(initializeSelector);

  useMount(() => {
    if (!initialized) initialize(data);
  });

  return;
};
