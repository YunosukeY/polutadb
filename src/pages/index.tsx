import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import Select from '../components/pane/Select';
import Result from '../components/pane/Result';
import { Data } from '../data/types';
import { fetchData } from '../data/data';
import { NextPage } from 'next';
import FormUpdater from '../components/sideeffect/FormUpdater';
import { useInit } from '../store/hooks';

const Home: NextPage<Data> = (data) => {
  const methods = useForm();

  const [isInit, init] = useInit();
  useEffect(() => {
    if (!isInit) init(data);
  }, []);

  return (
    <FormProvider {...methods}>
      <FormUpdater />
      <Select />
      <Result />
    </FormProvider>
  );
};
export default Home;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: await fetchData(),
  };
}
