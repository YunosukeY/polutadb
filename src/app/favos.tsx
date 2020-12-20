import * as React from 'react';
import { useState } from 'react';
import { Singing, singings } from './data';
import { ResultTable, Pagenation } from './result';
import { Displaynum } from './select';

export default function Favos(props: { isFavo: (singingId: number) => boolean, toggleFavo: (singingId: number) => void }) {
  const [pagenum, setPagenum] = useState(1);
  const [displaynum, setDisplaynum] = useState(5);

  const favoList = new Array<Singing>();
  singings.forEach((singing) => {
    if (props.isFavo(singing.id)) {
      favoList.push(singing);
    }
  });
  favoList.reverse();

  const ref = React.createRef<HTMLDivElement>()
  const onPageClick = ((p: number) => {
    setPagenum(p)
    ref!.current!.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className='pane' id='favo'>
      <Displaynum
        displaynum={displaynum}
        setDisplaynum={(displaynum: number) => {
          setDisplaynum(displaynum);
          setPagenum(1);
        }}
      />
      <div ref={ref} />
      <FavoHeader favonum={favoList.length} />
      <ResultTable
        table={favoList.slice((pagenum - 1) * displaynum, Math.min(pagenum * displaynum, favoList.length))}
        isFavo={props.isFavo}
        toggleFavo={props.toggleFavo}
      />
      <Pagenation pagenum={pagenum} setPagenum={onPageClick} lastPageNum={Math.ceil(favoList.length / displaynum)} />
    </div>
  );
}

function FavoHeader(props: { favonum: number }) {
  return (
    <h4 id='favo-header'>
      {props.favonum} Favorite{props.favonum === 1 ? '' : 's'}
    </h4>
  );
}
