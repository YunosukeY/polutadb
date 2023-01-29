import * as React from 'react';
import { useEffect } from 'react';

import Result from '../result/Result';
import { Singing } from '../../data/types';
import { appState, singingsState, useIsFavo } from '../../lib/AppState';
import { useDisplayNum } from '../../lib/useWidth';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Favos() {
  const [state, setState] = useRecoilState(appState);
  const favoList = getFavoList();
  const displaynum = useDisplayNum();

  useEffect(() => {
    if (favoList.length !== 0 && favoList.length === (state.pagenum - 1) * displaynum) {
      setState((s) => ({ ...s, pagenum: state.pagenum - 1 }));
    }
  });

  return <Result result={favoList} isFavo={true} />;
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
