import React from 'react';
import { useMount, useUpdateEffect } from 'react-use';
import { useRecoilState } from 'recoil';
import { favoAtom } from './favoAtom';
import { sortAtom } from './sortAtom';

function getInitialState(): [Map<number, boolean>, number] {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp))) : new Map<number, boolean>();
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : 0;

  return [favos, sortedBy];
}

const Persistence: React.FC = () => {
  const [favo, setFavo] = useRecoilState(favoAtom);
  const [sort, setSort] = useRecoilState(sortAtom);

  useMount(() => {
    const [favo, sort] = getInitialState();
    setFavo(favo);
    setSort(sort);
  });
  useUpdateEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...favo]));
    window.localStorage.setItem('sortedBy', String(sort));
  }, [favo, sort]);

  return <></>;
};

export default Persistence;
