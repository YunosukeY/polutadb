import * as React from 'react';
import { useState, useEffect } from 'react';

import Result from '../result/Result';
import { Singing } from '../../data/interfaces';
import { singingsState, useIsFavo } from '../../lib/AppState';
import { useDisplayNum } from '../../lib/useWidth';
import { useRecoilValue } from 'recoil';

export default function Favos() {
  const [pagenum, setPagenum] = useState(1);
  const favoList = getFavoList();

  const displaynum = useDisplayNum();

  useEffect(() => {
    // FIXME
    if (favoList.length === (pagenum - 1) * displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return <Result result={favoList} pagenum={pagenum} setPagenum={setPagenum} isFavo={true} />;
}

function getFavoList() {
  const singings = useRecoilValue(singingsState);

  const isFavo = useIsFavo();

  const res = new Array<Singing>();
  singings?.forEach((singing) => {
    if (isFavo(singing.id)) {
      res.push(singing);
    }
  });
  res.reverse();
  return res;
}
