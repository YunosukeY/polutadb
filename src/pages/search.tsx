import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';

import { Query } from '../lib/query';
import Select from '../components/pane/Select';
import Result from '../components/pane/Result';

export default function Search() {
  const router = useRouter();
  const query = new Query(router.query);

  const [pagenum, setPagenum] = useState(1);

  // TODO: Selectの中に移動
  const methods = useForm();
  // React.useEffect(() => {
  //   methods.setValue('query', query.query);
  //   methods.setValue('genre', query.genre);
  //   methods.setValue('type', query.type);
  //   methods.setValue('video', query.video);
  //   methods.setValue('song', query.song);
  //   methods.setValue('artist', query.artist);
  //   methods.setValue('withInst', query.withInst);
  //   methods.setValue('aCappella', query.aCappella);
  //   methods.setValue('full', query.full);
  //   methods.setValue('onechorus', query.onechorus);
  // }, []);
  const q = methods.watch();
  React.useEffect(() => console.log(q));

  return (
    <FormProvider {...methods}>
      <Select query={query} setPagenum={setPagenum} />
      <Result query={query} pagenum={pagenum} setPagenum={setPagenum} />
    </FormProvider>
  );
}
