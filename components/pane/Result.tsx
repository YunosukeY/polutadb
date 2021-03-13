import * as React from 'react';

import ResultHeader from '../result/ResultHeader';
import ResultTable from '../result/ResultTable';
import SimpleResultTable from '../result/SimpleResultTable';
import Pagenation from '../result/Pagenation';
import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';
import { Query } from '../../lib/Query';
import { search } from '../../lib/search';

export default function Result(props: {
  query: Query;
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const appState = useAppState();
  const setAppState = useSetAppState();
  const [isFavo, toggleFavo] = getAppStateUtils(appState, setAppState);

  const result = search(props.query, appState.sortedBy); // ジャンルなどから計算できるので状態ではない
  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    props.setPagenum(p);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='pane' id='result'>
      <div ref={ref} />
      <ResultHeader resultnum={result.length} />
      {appState.displayMode == 0 && (
        <ResultTable
          table={result.slice(
            (props.pagenum - 1) * appState.displaynum,
            Math.min(props.pagenum * appState.displaynum, result.length),
          )}
          isFavo={isFavo}
          toggleFavo={toggleFavo}
        />
      )}
      {appState.displayMode == 1 && (
        <SimpleResultTable
          table={result.slice(
            (props.pagenum - 1) * appState.displaynum,
            Math.min(props.pagenum * appState.displaynum, result.length),
          )}
          isFavo={isFavo}
          toggleFavo={toggleFavo}
        />
      )}
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(result.length / appState.displaynum)}
      />
    </div>
  );
}
