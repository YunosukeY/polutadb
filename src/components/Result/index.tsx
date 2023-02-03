import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Result from '../common/Result';
import { Query } from '../../lib/query';
import { useSearch } from '../../lib/search';
import { appState } from '../../store/state';
import { sortState } from '../../store/sortState';

export default function ResultPane() {
  const state = useRecoilValue(appState);
  const sort = useRecoilValue(sortState);
  const router = useRouter();
  const query = new Query(router.query);
  const result = useSearch(query, state, sort);

  return <Result result={result} isFavo={false} />;
}
