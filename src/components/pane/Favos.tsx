import * as React from 'react';
import { useState, useEffect } from 'react';

import FavoHeader from '../favos/FavoHeader';
import FavoSelect from '../favos/FavoSelect';
import ResultTable from '../result/ResultTable';
import Pagenation from '../result/Pagenation';
import { Pane } from '../../lib/style';
import { Singing } from '../../data/interfaces';
import { singings } from '../../data/singings';
import { useAppState, useSetAppState, getAppStateUtils } from '../../lib/AppState';

export default function Favos() {
  const appState = useAppState();

  const [pagenum, setPagenum] = useState(1);

  const favoList = getFavoList();

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
    <Pane>
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
    </Pane>
  );
}

function getFavoList() {
  const appState = useAppState();
  const setAppState = useSetAppState();
  const [isFavo] = getAppStateUtils(appState, setAppState);

  const res = new Array<Singing>();
  singings.forEach((singing) => {
    if (isFavo(singing.id)) {
      res.push(singing);
    }
  });
  res.reverse();
  return res;
}
