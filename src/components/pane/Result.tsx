import * as React from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import HR from '../layout/HR';
import ResultHeader from '../result/ResultHeader';
import ResultTable from '../result/ResultTable';
import Pagenation from '../result/Pagenation';
import { Pane } from '../../lib/style';
import { appState } from '../../lib/AppState';
import { Query } from '../../lib/query';
import { search } from '../../lib/search';

export default function Result(props: { pagenum: number; setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  const state = useRecoilValue(appState);

  const router = useRouter();
  const query = new Query(router.query);
  const result = search(query, state.sortedBy);
  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    props.setPagenum(p);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Pane>
      <div ref={ref} />
      <ResultHeader resultnum={result.length} />
      <HR />
      <ResultTable
        singings={result.slice(
          (props.pagenum - 1) * state.displaynum,
          Math.min(props.pagenum * state.displaynum, result.length),
        )}
      />
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(result.length / state.displaynum)}
      />
    </Pane>
  );
}
