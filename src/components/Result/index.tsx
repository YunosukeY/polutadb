import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Result from '../common/Result';
import { Query } from '../../lib/query';
import { useSearch } from '../../lib/search';
import { appState } from '../../store/state';

export default function ResultPane() {
  const state = useRecoilValue(appState);
  const router = useRouter();
  const query = new Query(router.query);
  const result = useSearch(query, state);

  return <Result result={result} isFavo={false} />;
}
