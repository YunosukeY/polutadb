import { useMount } from 'react-use';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Data } from '../data/types';
import { initializedState, initializeState } from './selector';

export const useInit = (data: Data) => {
  const initialized = useRecoilValue(initializedState);
  const initialize = useSetRecoilState(initializeState);

  useMount(() => {
    if (!initialized) initialize(data);
  });

  return;
};
