import * as React from 'react';

import Radio from './Radio';

export default function Displaynum(props: { displaynum: number; setDisplaynum: (displaynum: number) => void }) {
  const colsize = 's2';
  return (
    <>
      <label>
        <h6 className='text'>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='5件' onChange={() => props.setDisplaynum(5)} checked={props.displaynum === 5} colsize={colsize} />
        <Radio
          text='10件'
          onChange={() => props.setDisplaynum(10)}
          checked={props.displaynum === 10}
          colsize={colsize}
        />
        <Radio
          text='20件'
          onChange={() => props.setDisplaynum(20)}
          checked={props.displaynum === 20}
          colsize={colsize}
        />
        <Radio
          text='50件'
          onChange={() => props.setDisplaynum(50)}
          checked={props.displaynum === 50}
          colsize={colsize}
        />
      </form>
    </>
  );
}
