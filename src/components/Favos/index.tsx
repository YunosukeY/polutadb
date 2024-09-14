import * as React from 'react';
import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';
import type { Singing } from '../../data/types';
import { useDisplayNum } from '../../lib/useWidth';
import { singingsSelector } from '../../store/dataAtom';
import { favoAtom } from '../../store/favoAtom';
import { pageAtom } from '../../store/pageAtom';
import Result from '../common/Result';

export default function Favos() {
  const [pagenum, setPagenum] = useRecoilState(pageAtom);
  const favoList = useFavoList();
  const displaynum = useDisplayNum();

  useEffect(() => {
    if (favoList.length !== 0 && favoList.length === (pagenum - 1) * displaynum) {
      setPagenum(pagenum - 1);
    }
  }, [displaynum, favoList.length, pagenum, setPagenum]);

  return <Result result={favoList} isFavo={true} />;
}

function useFavoList() {
  const singings = useRecoilValue(singingsSelector);

  const isFavo = useRecoilValue(favoAtom);

  const res = new Array<Singing>();
  singings?.forEach((singing) => {
    if (isFavo.get(singing.id)) {
      res.push(singing);
    }
  });
  res.reverse();
  return res;
}
