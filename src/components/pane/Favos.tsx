import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import DisplaySetting from '../display/DisplaySetting';
import Result from '../result/Result';
import { Pane } from '../../lib/style';
import { Singing } from '../../data/interfaces';
import { singings } from '../../data/singings';
import { appState, useIsFavo } from '../../lib/AppState';

export default function Favos() {
  const state = useRecoilValue(appState);
  const [pagenum, setPagenum] = useState(1);
  const favoList = getFavoList();

  useEffect(() => {
    if (favoList.length === (pagenum - 1) * state.displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return (
    <>
      <Pane>
        <DisplaySetting setPagenum={setPagenum} />
      </Pane>
      <Result result={favoList} pagenum={pagenum} setPagenum={setPagenum} isFavo={true} />
    </>
  );
}

function getFavoList() {
  const isFavo = useIsFavo();

  const res = new Array<Singing>();
  singings.forEach((singing) => {
    if (isFavo(singing.id)) {
      res.push(singing);
    }
  });
  res.reverse();
  return res;
}
