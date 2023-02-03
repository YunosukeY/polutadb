import React, { useEffect } from 'react';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';
import { favoState } from './favoState';
import { sortState } from './sortState';

function getInitialState(): [Map<number, boolean>, number] {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  const favos = tmp !== null ? (new Map(JSON.parse(tmp)) as Map<number, boolean>) : new Map<number, boolean>();
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : 0;

  return [favos, sortedBy];
}

const Persistence: React.FC = () => {
  const [favo, setFavo] = useRecoilState(favoState);
  const [sort, setSort] = useRecoilState(sortState);

  useMount(() => {
    const [favo, sort] = getInitialState();
    setFavo(favo);
    setSort(sort);
  });

  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([favo]));
    window.localStorage.setItem('sortedBy', String(sort));
  }, [favo, sort]);

  return <></>;
};

export default Persistence;
