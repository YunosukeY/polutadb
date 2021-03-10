import * as React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { Query } from '../lib/query';
import { Selects } from '../components/select';
import Result from '../components/result';
import { ScrollToSearch } from '../components/scroll';

export default function Search() {
  const history = useHistory();
  const qs = queryString.parse(history.location.search);
  const query = new Query(qs);

  const [pagenum, setPagenum] = useState(1);

  function setLocationSearch(newQuery: Query) {
    setPagenum(1);
    history.push(`/?${newQuery}#search`);
  }

  return (
    <>
      <ScrollToSearch />
      <Selects query={query} setLocationSearch={setLocationSearch} setPagenum={setPagenum} />
      <Result query={query} pagenum={pagenum} setPagenum={setPagenum} />
    </>
  );
}
