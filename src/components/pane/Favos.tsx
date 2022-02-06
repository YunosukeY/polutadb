import * as React from 'react';
import { useState, useEffect } from 'react';

import Result from '../result/Result';
import { Singing } from '../../data/interfaces';
import { singings } from '../../data/singings';
import { useIsFavo } from '../../lib/AppState';
import { useDisplayNum } from '../../lib/useWidth';

export default function Favos() {
  const [pagenum, setPagenum] = useState(1);
  const favoList = getFavoList();

  const displaynum = useDisplayNum();

  useEffect(() => {
    if (favoList.length === (pagenum - 1) * displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return <Result result={favoList} pagenum={pagenum} setPagenum={setPagenum} isFavo={true} />;
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
