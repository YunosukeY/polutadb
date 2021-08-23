import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import QueryStringUpdater from '../components/sideeffect/QueryStringUpdater';
import Select from '../components/pane/Select';
import Result from '../components/pane/Result';

export default function Search() {
  const [pagenum, setPagenum] = useState(1);

  const methods = useForm();

  useEffect(() => {
    console.log(methods.watch());
  });

  return (
    <FormProvider {...methods}>
      <QueryStringUpdater setPagenum={setPagenum} />
      <Select setPagenum={setPagenum} />
      <Result pagenum={pagenum} setPagenum={setPagenum} />
    </FormProvider>
  );
}
