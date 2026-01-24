import { useAtom } from 'jotai';
import type React from 'react';
import { useMount, useUpdateEffect } from 'react-use';
import { favoAtom } from './favoAtom';
import { sortAtom } from './sortAtom';

function getInitialState(): [Map<number, boolean>, number] {
  let tmp;

  tmp = window.localStorage.getItem('favos');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const favos = tmp !== null ? new Map<number, boolean>(JSON.parse(tmp)) : new Map<number, boolean>();
  tmp = window.localStorage.getItem('sortedBy');
  const sortedBy = tmp !== null ? Number(tmp) : 0;

  return [favos, sortedBy];
}

const Persistence: React.FC = () => {
  const [favo, setFavo] = useAtom(favoAtom);
  const [sort, setSort] = useAtom(sortAtom);

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
