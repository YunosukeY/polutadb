/*
 * React Context を用いた簡易 Store
 * https://mizchi.dev/202005271609-react-app-context
 */
import React, { Dispatch, SetStateAction, useContext, useState, useEffect } from 'react';

export interface AppState {
  favos: Map<number, boolean>;
  displaynum: number;
  displayMode: number;
  sortedBy: number;
}

function getInitialState(): AppState {
  let stickyValue;

  stickyValue = window.localStorage.getItem('favos');
  const favos =
    stickyValue !== null ? (new Map(JSON.parse(stickyValue)) as Map<number, boolean>) : new Map<number, boolean>();
  stickyValue = window.localStorage.getItem('displaynum');
  const displaynum = stickyValue !== null ? Number(stickyValue) : 5;
  stickyValue = window.localStorage.getItem('displayMode');
  const displayMode = stickyValue !== null ? Number(stickyValue) : 0;
  stickyValue = window.localStorage.getItem('sortedBy');
  const sortedBy = stickyValue !== null ? Number(stickyValue) : 0;

  return {
    favos: favos,
    displaynum: displaynum,
    displayMode: displayMode,
    sortedBy: sortedBy,
  };
}

const initialState = getInitialState();

const AppStateContext = React.createContext<AppState>(initialState);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const SetAppStateContext = React.createContext<Dispatch<SetStateAction<AppState>>>(() => {});

export function useAppState() {
  return useContext(AppStateContext);
}
export function useSetAppState() {
  return useContext(SetAppStateContext);
}

export function AppStateProvider(props: { initialState?: AppState; children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(props.initialState ?? initialState);

  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...state.favos]));
    window.localStorage.setItem('displaynum', String(state.displaynum));
    window.localStorage.setItem('displayMode', String(state.displayMode));
    window.localStorage.setItem('sortedBy', String(state.sortedBy));
  });

  return (
    <AppStateContext.Provider value={state}>
      <SetAppStateContext.Provider value={setState}>{props.children}</SetAppStateContext.Provider>
    </AppStateContext.Provider>
  );
}

export function getAppStateUtils(
  appState: AppState,
  setAppState: React.Dispatch<React.SetStateAction<AppState>>,
): [(singingId: number) => boolean, (singingId: number) => void] {
  const isFavo = (singingId: number) => {
    return appState.favos.has(singingId) && (appState.favos.get(singingId) as boolean);
  };

  const toggleFavo = (singingId: number) => {
    if (appState.favos.has(singingId)) {
      const f = appState.favos.get(singingId) as boolean;
      setAppState((state) => ({
        ...state,
        favos: new Map(state.favos.set(singingId, !f)),
      }));
    } else {
      setAppState((state) => ({
        ...state,
        favos: new Map(appState.favos.set(singingId, true)),
      }));
    }
  };

  return [isFavo, toggleFavo];
}
