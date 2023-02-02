/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from 'next';
import * as React from 'react';
import { useMount } from 'react-use';

import Favos from '../components/Favos';
import { fetchData } from '../data/data';
import { Data } from '../data/types';
import { useInit } from '../store/hooks';

const page: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  useMount(() => {
    if (!isInit) init(data);
  });

  return <Favos />;
};
export default page;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
