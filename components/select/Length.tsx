import * as React from 'react';

import { EachSelectProps } from './utils';

export default function Length(props: EachSelectProps) {
  return (
    <label>
      <h6 className='text'>尺</h6>
      <div className='row'>
        <label className='col s4'>
          <input
            type='checkbox'
            className='filled-in'
            checked={props.query.full}
            onChange={(event) => {
              props.query.full = event.target.checked;
              props.setLocationSearch(props.query);
            }}
          />
          <span className='text'>フル</span>
        </label>
        <label className='col s8'>
          <input
            type='checkbox'
            className='filled-in'
            checked={props.query.onechorus}
            onChange={(event) => {
              props.query.onechorus = event.target.checked;
              props.setLocationSearch(props.query);
            }}
          />
          <span className='text'>ワンコーラス</span>
        </label>
      </div>
    </label>
  );
}
