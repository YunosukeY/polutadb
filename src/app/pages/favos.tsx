import * as React from 'react';
import { useState, useEffect } from 'react';

import { ResultTable, SimpleResultTable, Pagenation } from '../components/result';
import { Displaynum, DisplayFormat } from '../components/select';
import { ScrollToTopOnMount } from '../components/scroll';
import { Singing } from '../data/utils';
import { singings } from '../data/singings';

export default function Favos(props: {
  isFavo: (singingId: number) => boolean;
  toggleFavo: (singingId: number) => void;
  displaynum: number;
  setDisplaynum: (displaynum: number) => void;
  displayMode: number;
  setDisplayMode: (mode: number) => void;
}) {
  const [pagenum, setPagenum] = useState(1);

  const favoList = new Array<Singing>();
  singings.forEach((singing) => {
    if (props.isFavo(singing.id)) {
      favoList.push(singing);
    }
  });
  favoList.reverse();

  const ref = React.createRef<HTMLDivElement>();
  const onPageClick = (p: number) => {
    setPagenum(p);
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (favoList.length === (pagenum - 1) * props.displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return (
    <div className='pane' id='favo'>
      <ScrollToTopOnMount />
      <div className='row' style={{ paddingBottom: 0 }}>
        <div className='col m6 s12'>
          <Displaynum
            displaynum={props.displaynum}
            setDisplaynum={(displaynum: number) => {
              props.setDisplaynum(displaynum);
              setPagenum(1);
            }}
          />
        </div>
        <div className='col m6 s12'>
          <DisplayFormat displayMode={props.displayMode} setDisplayMode={props.setDisplayMode} />
        </div>
      </div>
      <div ref={ref} />
      <FavoHeader favonum={favoList.length} />
      {props.displayMode == 0 && (
        <ResultTable
          table={favoList.slice(
            (pagenum - 1) * props.displaynum,
            Math.min(pagenum * props.displaynum, favoList.length),
          )}
          isFavo={props.isFavo}
          toggleFavo={props.toggleFavo}
        />
      )}
      {props.displayMode == 1 && (
        <SimpleResultTable
          table={favoList.slice(
            (pagenum - 1) * props.displaynum,
            Math.min(pagenum * props.displaynum, favoList.length),
          )}
          isFavo={props.isFavo}
          toggleFavo={props.toggleFavo}
        />
      )}
      <Pagenation
        pagenum={pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(favoList.length / props.displaynum)}
      />
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
