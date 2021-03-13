import * as React from 'react';

import Radio from './Radio';

export default function Sort(props: { sortedBy: number; setSortedBy: (sortedBy: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>ソート</h6>
      </label>
      <form action='#' className='row'>
        <Radio text='時系列順' onChange={() => props.setSortedBy(0)} checked={props.sortedBy === 0} colsize='s4 m2' />
        <Radio text='曲名順' onChange={() => props.setSortedBy(1)} checked={props.sortedBy === 1} colsize='s3 m2' />
        <Radio
          text='アーティスト名順'
          onChange={() => props.setSortedBy(2)}
          checked={props.sortedBy === 2}
          colsize='s5 m8'
        />
      </form>
    </>
  );
}
