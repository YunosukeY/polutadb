import * as React from 'react';

import Radio from './Radio';

export default function Displaynum(props: { displaynum: number; setDisplaynum: (displaynum: number) => void }) {
  const onChange = (newValue: string) => props.setDisplaynum(Number(newValue));
  const colsize = 's2';
  return (
    <>
      <label>
        <h6 className='text'>表示件数</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='5' onChange={onChange} checked={props.displaynum === 5} colsize={colsize} />
        <Radio text='10' onChange={onChange} checked={props.displaynum === 10} colsize={colsize} />
        <Radio text='20' onChange={onChange} checked={props.displaynum === 20} colsize={colsize} />
        <Radio text='50' onChange={onChange} checked={props.displaynum === 50} colsize={colsize} />
      </form>
    </>
  );
}
