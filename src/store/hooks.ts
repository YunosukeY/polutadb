import { useRecoilValue, useRecoilState } from 'recoil';
import { Data, Singing } from '../data/types';
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

export const useInit = () => {
  const [state, setState] = useRecoilState(appState);

  const initialized =
    state.artists !== undefined &&
    state.videos !== undefined &&
    state.types !== undefined &&
    state.songs !== undefined &&
    state.singings !== undefined;

  const initialize = (data: Data) => {
    setState((state) => ({
      ...state,
      ...data,
      singings: data.singings.map((o, i) => new Singing(i, o.video, o.song, o.start)),
    }));
  };

  return [initialized, initialize] as const;
};
