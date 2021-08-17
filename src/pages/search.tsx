import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import { Query } from '../lib/query';
import Select from '../components/pane/Select';
import Result from '../components/pane/Result';

export default function Search() {
  const [pagenum, setPagenum] = useState(1);

  const methods = useForm();

  const watch = methods.watch();
  const router = useRouter();
  const query = new Query(router.query);
  useEffect(() => {
    const q = new Query(watch);
    if (!q.equals(query)) {
      setPagenum(1);
      router.push(`/search?${q}`, undefined, { scroll: false });
    }
  }, [watch]);

  return (
    <FormProvider {...methods}>
      <Select setPagenum={setPagenum} />
      <Result pagenum={pagenum} setPagenum={setPagenum} />
    </FormProvider>
  );
}
