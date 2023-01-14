import { NextPage } from 'next';
import * as React from 'react';
import { useEffect } from 'react';

import Releases from '../components/pane/Releases';
import { data } from '../data/data';
import { Data } from '../data/interfaces';
import { useInit } from '../lib/AppState';

const page: NextPage<Data> = (data) => {
  const [isInit, init] = useInit();
  useEffect(() => {
    if (!isInit) init(data);
  }, []);

  return <Releases />;
};
export default page;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: data,
  };
}
