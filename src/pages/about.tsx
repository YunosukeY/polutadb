import { NextPage } from 'next';
import * as React from 'react';

import About from '../components/pane/About';
import { data } from '../data/data';
import { Data } from '../data/interfaces';
import { useInit } from '../lib/AppState';

const Top: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  if (!isInit) init(data);

  return <About />;
};
export default Top;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: data,
  };
}
