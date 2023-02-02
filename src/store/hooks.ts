import { useMount } from 'react-use';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { Data } from '../data/types';
import { initializedState, initializeState } from './selector';
import { appState } from './state';

export const useIsFavo = () => {
  const state = useRecoilValue(appState);

  return (singingId: number) => {
    return state.favos.has(singingId) && (state.favos.get(singingId) as boolean);
  };
};

export const useToggleFavo = () => {
  const [state, setState] = useRecoilState(appState);

  return (singingId: number) => {
    if (state.favos.has(singingId)) {
      const f = state.favos.get(singingId) as boolean;
      setState((state) => ({
        ...state,
        favos: new Map(state.favos.set(singingId, !f)),
      }));
    } else {
      setState((state) => ({
        ...state,
        favos: new Map(state.favos.set(singingId, true)),
      }));
    }
  };
};

export const useInit = (data: Data) => {
  const initialized = useRecoilValue(initializedState);
  const initialize = useSetRecoilState(initializeState);

  useMount(() => {
    if (!initialized) initialize(data);
  });

  return;
};
