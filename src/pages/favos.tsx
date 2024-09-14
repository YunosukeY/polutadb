/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from 'next';
import * as React from 'react';

import Favos from '../components/Favos';
import { fetchData } from '../data/data';
import type { Data } from '../data/types';
import { useInit } from '../store/hooks';

const page: NextPage<Data> = (data) => {
  useInit(data);

  return <Favos />;
};
export default page;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
