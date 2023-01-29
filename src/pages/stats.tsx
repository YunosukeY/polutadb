import { NextPage } from 'next';
import * as React from 'react';
import { useEffect } from 'react';

import ArtistStats from '../components/pane/ArtistStats';
import SongStats from '../components/pane/SongStats';
import { fetchData } from '../data/data';
import { Data } from '../data/types';
import { useInit } from '../store/hooks';

const Stats: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  useEffect(() => {
    if (!isInit) init(data);
  }, []);

  return (
    <>
      <ArtistStats />
      <SongStats />
    </>
  );
};
export default Stats;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
