import * as React from 'react';
import { useEffect } from 'react';

import Result from '../common/Result';
import { Singing } from '../../data/types';
import { useDisplayNum } from '../../lib/useWidth';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isFavoState, singingsState } from '../../store/selector';
import { pageState } from '../../store/pageState';

export default function Favos() {
  const [pagenum, setPagenum] = useRecoilState(pageState);
  const favoList = useFavoList();
  const displaynum = useDisplayNum();

  useEffect(() => {
    if (favoList.length !== 0 && favoList.length === (pagenum - 1) * displaynum) {
      setPagenum(pagenum - 1);
    }
  });

  return <Result result={favoList} isFavo={true} />;
}

function useFavoList() {
  const singings = useRecoilValue(singingsState);

  const isFavo = useRecoilValue(isFavoState);

  const res = new Array<Singing>();
  singings?.forEach((singing) => {
    if (isFavo(singing.id)) {
      res.push(singing);
    }
  });
  res.reverse();
  return res;
}
