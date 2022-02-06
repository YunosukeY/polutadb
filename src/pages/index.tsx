import React from 'react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import QueryStringUpdater from '../components/sideeffect/QueryStringUpdater';
import Select from '../components/pane/Select';
import Result from '../components/pane/Result';

export default function Home() {
  const [pagenum, setPagenum] = useState(1);

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <QueryStringUpdater setPagenum={setPagenum} />
      <Select />
      <Result pagenum={pagenum} setPagenum={setPagenum} />
    </FormProvider>
  );
}
