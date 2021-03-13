import * as React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Pagenation(props: { pagenum: number; setPagenum: (p: number) => void; lastPageNum: number }) {
  const n = 2; // 2つ隣のページまで表示させる

  const currentAround = [];
  for (let i = Math.max(props.pagenum - n, 1); i <= Math.min(props.pagenum + n, props.lastPageNum); i++) {
    if (i === props.pagenum)
      currentAround.push(
        <li className='active' key={i}>
          <a>{i}</a>
        </li>,
      );
    else
      currentAround.push(
        <li className='waves-effect' key={i}>
          <a onClick={() => props.setPagenum(i)}>{i}</a>
        </li>,
      );
  }

  return (
    <ul className='pagination'>
      {props.pagenum - n > 1 && (
        <>
          <li className='waves-effect' key='1'>
            <a onClick={() => props.setPagenum(1)}>1</a>
          </li>
          <li className='disabled' key='1'>
            <a>
              <MoreHorizIcon color='disabled' style={{ fontSize: 30 }} />
            </a>
          </li>
        </>
      )}
      {currentAround}
      {props.pagenum + n < props.lastPageNum && (
        <>
          <li className='disabled'>
            <a>
              <MoreHorizIcon color='disabled' style={{ fontSize: 30 }} />
            </a>
          </li>
          <li className='waves-effect'>
            <a onClick={() => props.setPagenum(props.lastPageNum)}>{props.lastPageNum}</a>
          </li>
        </>
      )}
    </ul>
  );
}
