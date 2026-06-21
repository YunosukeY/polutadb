import { useAtomValue, useSetAtom } from 'jotai/react';
import { useMount } from 'react-use';
import type { Data } from '../data/types';
import { initializeAtom, initializedAtom } from './dataAtom';

export const useInit = (data: Data) => {
  const initialized = useAtomValue(initializedAtom);
  const initialize = useSetAtom(initializeAtom);

  useMount(() => {
    if (!initialized) initialize(data);
  });

  return;
};
