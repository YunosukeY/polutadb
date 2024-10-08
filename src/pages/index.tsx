import React, { useState } from 'react';

import type { NextPage } from 'next';
import Result from '../components/Result';
import Select from '../components/Select';
import FormUpdater from '../components/sideeffect/FormUpdater';
import { fetchData } from '../data/data';
import type { Data } from '../data/types';
import { useInit } from '../store/hooks';

export type Form = {
  query: string;
  type: number;
  video: number;
  song: number;
  artist: number;
};

const Home: NextPage<Data> = (data) => {
  const [form, setForm] = useState<Form>({
    query: '',
    type: -1,
    video: -1,
    song: -1,
    artist: -1,
  });
  useInit(data);

  return (
    <>
      <Select form={form} setForm={setForm} />
      <Result />
      <FormUpdater form={form} setForm={setForm} />
    </>
  );
};
export default Home;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
