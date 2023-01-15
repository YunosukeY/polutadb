import { NextPage } from 'next';
import * as React from 'react';
import { useEffect } from 'react';

import About from '../components/pane/About';
import { fetchData } from '../data/data';
import { Data } from '../data/interfaces';
import { useInit } from '../lib/AppState';

const Top: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  useEffect(() => {
    if (!isInit) init(data);
  }, []);

  return <About />;
};
export default Top;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
