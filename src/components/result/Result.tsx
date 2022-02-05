import * as React from 'react';

import ResultHeader from '../result/ResultHeader';
import Pagenation from '../result/Pagenation';
import FavoHeader from '../favos/FavoHeader';
import { Singing } from '../../data/interfaces';
import ResultCards from './ResultCards';

const displaynum = 50;

export default function Result(props: {
  result: Singing[];
  pagenum: number;
  setPagenum: React.Dispatch<React.SetStateAction<number>>;
  isFavo: boolean;
}) {
  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    props.setPagenum(p);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={ref} />
      <div style={{ textAlign: 'center', marginTop: 100, paddingBottom: 50 }}>
        {props.isFavo ? <FavoHeader favonum={props.result.length} /> : <ResultHeader resultnum={props.result.length} />}
      </div>
      <ResultCards
        singings={props.result.slice(
          (props.pagenum - 1) * displaynum,
          Math.min(props.pagenum * displaynum, props.result.length),
        )}
      />
      <Pagenation
        pagenum={props.pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(props.result.length / displaynum)}
      />
    </>
  );
}
