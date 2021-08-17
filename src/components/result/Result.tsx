import * as React from 'react';
import { useRecoilValue } from 'recoil';

import HR from '../layout/HR';
import ResultHeader from '../result/ResultHeader';
import ResultTable from '../result/ResultTable';
import Pagenation from '../result/Pagenation';
import FavoHeader from '../favos/FavoHeader';
import { appState } from '../../lib/AppState';
import { Singing } from '../../data/interfaces';

export default function Result(props: {
  result: Singing[];
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
  isFavo: boolean;
}) {
  const state = useRecoilValue(appState);

  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    props.setPagenum(p);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={ref} />
      {props.isFavo ? <FavoHeader favonum={props.result.length} /> : <ResultHeader resultnum={props.result.length} />}
      <HR />
      <ResultTable
        singings={props.result.slice(
          (props.pagenum - 1) * state.displaynum,
          Math.min(props.pagenum * state.displaynum, props.result.length),
        )}
      />
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(props.result.length / state.displaynum)}
      />
    </>
  );
}
