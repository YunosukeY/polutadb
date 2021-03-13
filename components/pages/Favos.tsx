import * as React from 'react';
import { useState, useEffect } from 'react';

import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';
import ResultTable from '../result/ResultTable';
import SimpleResultTable from '../result/SimpleResultTable';
import Pagenation from '../result/Pagenation';
import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';
import { Singing, singings } from '../../data/singings';

export default function Favos() {
  const appState = useAppState();
  const setAppState = useSetAppState();
  const [isFavo, toggleFavo] = getAppStateUtils(appState, setAppState);

  const [pagenum, setPagenum] = useState(1);

  const favoList = new Array<Singing>();
  singings.forEach((singing) => {
    if (isFavo(singing.id)) {
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
    if (favoList.length === (pagenum - 1) * appState.displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return (
    <div className='pane' id='favo'>
      <div className='row' style={{ paddingBottom: 0 }}>
        <div className='col m6 s12'>
          <Displaynum
            displaynum={appState.displaynum}
            setDisplaynum={(displaynum: number) => {
              setAppState((state) => ({ ...state, displaynum: displaynum }));
              setPagenum(1);
            }}
          />
        </div>
        <div className='col m6 s12'>
          <DisplayFormat
            displayMode={appState.displayMode}
            setDisplayMode={(displayMode: number) => {
              setAppState((state) => ({ ...state, displayMode: displayMode }));
            }}
          />
        </div>
      </div>
      <div ref={ref} />
      <FavoHeader favonum={favoList.length} />
      {appState.displayMode == 0 && (
        <ResultTable
          table={favoList.slice(
            (pagenum - 1) * appState.displaynum,
            Math.min(pagenum * appState.displaynum, favoList.length),
          )}
          isFavo={isFavo}
          toggleFavo={toggleFavo}
        />
      )}
      {appState.displayMode == 1 && (
        <SimpleResultTable
          table={favoList.slice(
            (pagenum - 1) * appState.displaynum,
            Math.min(pagenum * appState.displaynum, favoList.length),
          )}
          isFavo={isFavo}
          toggleFavo={toggleFavo}
        />
      )}
      <Pagenation
        pagenum={pagenum}
        setPagenum={onPageClick}
        lastPageNum={Math.ceil(favoList.length / appState.displaynum)}
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
