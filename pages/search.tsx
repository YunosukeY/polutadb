import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Query } from '../lib/Query';
import Selects from '../components/Selects';
import Result from '../components/Result';

export default function Search() {
  const router = useRouter();
  const query = new Query(router.query);

  const [pagenum, setPagenum] = useState(1);

  function setLocationSearch(newQuery: Query) {
    setPagenum(1);
    router.push(`/search?${newQuery}`, undefined, { scroll: false });
  }

  return (
    <>
      <Selects query={query} setLocationSearch={setLocationSearch} setPagenum={setPagenum} />
      <Result query={query} pagenum={pagenum} setPagenum={setPagenum} />
    </>
  );
}
