import { NextPage } from 'next';
import * as React from 'react';
import { useMount } from 'react-use';

import Stats from '../components/Stats';
import { fetchData } from '../data/data';
import { Data } from '../data/types';
import { useInit } from '../store/hooks';

const StatsPage: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  useMount(() => {
    if (!isInit) init(data);
  });

  return <Stats />;
};
export default StatsPage;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
