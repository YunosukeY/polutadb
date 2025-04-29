import { useAtomValue } from 'jotai/react';
import { useRouter } from 'next/router';
import * as React from 'react';

import { Query } from '../../lib/query';
import { useSearch } from '../../lib/search';
import { dataAtom } from '../../store/dataAtom';
import { sortAtom } from '../../store/sortAtom';
import Result from '../common/Result';

export default function ResultPane() {
  const state = useAtomValue(dataAtom);
  const sort = useAtomValue(sortAtom);
  const router = useRouter();
  const query = new Query(router.query);
  const result = useSearch(query, state, sort);

  return <Result result={result} isFavo={false} />;
}
