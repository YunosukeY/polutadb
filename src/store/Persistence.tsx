import React, { useEffect } from 'react';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';
import { sortState } from './sortState';
import { AppState, appState, defaultState } from './state';

function getInitialState(): [AppState, number] {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp)) as Map<number, boolean>) : defaultState.favos;
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : 0;

  return [
    {
      favos,
    },
    sortedBy,
  ];
}

const Persistence: React.FC = () => {
  const [state, setState] = useRecoilState(appState);
  const [sort, setSort] = useRecoilState(sortState);

  useMount(() => {
    const [state, sort] = getInitialState();
    setState(state);
    setSort(sort);
  });

  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...state.favos]));
    window.localStorage.setItem('sortedBy', String(sort));
  }, [sort, state]);

  return <></>;
};

export default Persistence;
