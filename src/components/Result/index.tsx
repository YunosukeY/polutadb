import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import Result from '../common/Result';
import { Query } from '../../lib/query';
import { useSearch } from '../../lib/search';
import { dataAtom } from '../../store/dataAtom';
import { sortAtom } from '../../store/sortAtom';

export default function ResultPane() {
  const state = useRecoilValue(dataAtom);
  const sort = useRecoilValue(sortAtom);
  const router = useRouter();
  const query = new Query(router.query);
  const result = useSearch(query, state, sort);

  return <Result result={result} isFavo={false} />;
}
