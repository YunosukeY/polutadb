import * as React from 'react';

import HR from '../layout/HR';
import ResultHeader from '../result/ResultHeader';
import ResultTable from '../result/ResultTable';
import Pagenation from '../result/Pagenation';
import { Pane } from '../../lib/style';
import { useAppState } from '../../lib/AppState';
import { Query } from '../../lib/query';
import { search } from '../../lib/search';

export default function Result(props: {
  query: Query;
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const appState = useAppState();

  const result = search(props.query, appState.sortedBy); // ジャンルなどから計算できるので状態ではない
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
          (props.pagenum - 1) * appState.displaynum,
          Math.min(props.pagenum * appState.displaynum, result.length),
        )}
      />
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(result.length / appState.displaynum)}
      />
    </Pane>
  );
}
