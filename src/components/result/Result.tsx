import * as React from 'react';

import ResultHeader from '../result/ResultHeader';
import Pagenation from '../result/Pagenation';
import FavoHeader from '../favos/FavoHeader';
import { Singing } from '../../data/interfaces';
import ResultCards from './ResultCards';
import { useDisplayNum } from '../../lib/useWidth';
import { useRecoilState } from 'recoil';
import { appState } from '../../lib/AppState';

export default function Result(props: { result: Singing[]; isFavo: boolean }) {
  const [state, setState] = useRecoilState(appState);

  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    setState((state) => ({ ...state, pagenum: p }));
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const displaynum = useDisplayNum();

  return (
    <>
      <div ref={ref} />
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        {props.isFavo ? <FavoHeader favonum={props.result.length} /> : <ResultHeader resultnum={props.result.length} />}
      </div>
      <ResultCards
        singings={props.result.slice(
          (state.pagenum - 1) * displaynum,
          Math.min(state.pagenum * displaynum, props.result.length),
        )}
      />
      <Pagenation
        pagenum={state.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(props.result.length / displaynum)}
      />
    </>
  );
}
