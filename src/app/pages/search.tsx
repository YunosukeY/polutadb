import * as React from 'react';
import { useState } from 'react';
import queryString from 'query-string';

import { Query } from '../lib/query';
import { Selects } from '../components/select';
import Result from '../components/result';
import { ScrollToSearch } from '../components/scroll';

// eslint-disable-next-line max-lines-per-function
export default function Search(props: { rowqs: string }) {
  const qs = queryString.parse(props.rowqs);
  const query = new Query(qs);

  const [pagenum, setPagenum] = useState(1);

  function setLocationSearch(newQuery: Query) {
    setPagenum(1);
    window.location.href = `?${newQuery}#search`;
  }

  return (
    <>
      <ScrollToSearch />
      <Selects query={query} setLocationSearch={setLocationSearch} setPagenum={setPagenum} />
      <Result query={query} pagenum={pagenum} setPagenum={setPagenum} />
    </>
  );
}
