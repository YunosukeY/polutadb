import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';
import ResultTable from '../result/ResultTable';
import Pagenation from '../result/Pagenation';
import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';
import { Singing } from '../../data/interfaces';
import { singings } from '../../data/singings';

export default function Favos() {
  const appState = useAppState();
  const setAppState = useSetAppState();
  const [isFavo] = getAppStateUtils(appState, setAppState);

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
      <FavoSelect setPagenum={setPagenum} />
      <div ref={ref} />
      <FavoHeader favonum={favoList.length} />
      <ResultTable
        singings={favoList.slice(
          (pagenum - 1) * appState.displaynum,
          Math.min(pagenum * appState.displaynum, favoList.length),
        )}
      />
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
    <h4 id='favo-header' style={{ marginTop: '1rem' }}>
      {props.favonum} Favorite{props.favonum === 1 ? '' : 's'}
    </h4>
  );
}

function FavoSelect(props: { setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  const appState = useAppState();
  const setAppState = useSetAppState();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Displaynum
          displaynum={appState.displaynum}
          setDisplaynum={(displaynum: number) => {
            setAppState((state) => ({ ...state, displaynum: displaynum }));
            props.setPagenum(1);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DisplayFormat
          displayMode={appState.displayMode}
          setDisplayMode={(displayMode: number) => {
            setAppState((state) => ({ ...state, displayMode: displayMode }));
          }}
        />
      </Grid>
    </Grid>
  );
}
