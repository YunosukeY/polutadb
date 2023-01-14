import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import QueryStringUpdater from '../components/sideeffect/QueryStringUpdater';
import Select from '../components/pane/Select';
import Result from '../components/pane/Result';
import { Data } from '../data/interfaces';
import { data } from '../data/data';
import { NextPage } from 'next';
import { useInit } from '../lib/AppState';

const Home: NextPage<Data> = (data) => {
  const [pagenum, setPagenum] = useState(1);

  const methods = useForm();

  const [isInit, init] = useInit();
  useEffect(() => {
    if (!isInit) init(data);
  }, []);

  return (
    <FormProvider {...methods}>
      <QueryStringUpdater setPagenum={setPagenum} />
      <Select />
      <Result pagenum={pagenum} setPagenum={setPagenum} />
    </FormProvider>
  );
};
export default Home;

export async function getStaticProps(): Promise<{ props: Data }> {
  return {
    props: data,
  };
}
