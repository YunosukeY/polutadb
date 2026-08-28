import * as React from 'react';

import { useAtom } from 'jotai/react';
import type { Singing } from '../../../data/types';
import { useDisplayNum } from '../../../lib/useWidth';
import { pageAtom } from '../../../store/pageAtom';
import FavoCount from './FavoCount';
import Pagenation from './Pagenation';
import ResultCards from './ResultCards';
import ResultCount from './ResultCount';

export default function Result(props: { result: Singing[]; isFavo: boolean }) {
  const [pagenum, setPagenum] = useAtom(pageAtom);

  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    setPagenum(p);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const displaynum = useDisplayNum();

  return (
    <>
      <div ref={ref} />
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        {props.isFavo ? <FavoCount favonum={props.result.length} /> : <ResultCount resultnum={props.result.length} />}
      </div>
      <ResultCards
        singings={props.result.slice((pagenum - 1) * displaynum, Math.min(pagenum * displaynum, props.result.length))}
      />
      <Pagenation
        pagenum={pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(props.result.length / displaynum)}
      />
    </>
  );
}
