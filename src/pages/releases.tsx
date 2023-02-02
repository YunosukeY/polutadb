/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from 'next';
import * as React from 'react';

import Releases from '../components/Releases';
import { fetchData } from '../data/data';
import { Data } from '../data/types';
import { useInit } from '../store/hooks';

const page: NextPage<Data> = (data) => {
  useInit(data);

  return <Releases />;
};
export default page;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
