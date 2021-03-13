import * as React from 'react';

import Radio from './Radio';

export default function DisplayFormat(props: { displayMode: number; setDisplayMode: (mode: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>表示形式</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='通常' onChange={() => props.setDisplayMode(0)} checked={props.displayMode === 0} colsize='s4' />
        <Radio
          text='簡易表示'
          onChange={() => props.setDisplayMode(1)}
          checked={props.displayMode === 1}
          colsize='s8'
        />
      </form>
    </>
  );
}
