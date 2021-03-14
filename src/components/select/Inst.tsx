import * as React from 'react';

import { EachSelectProps } from './utils';

export default function Inst(props: EachSelectProps) {
  return (
    <label>
      <h6 className='text'>伴奏</h6>
      <div className='row'>
        <label className='col s4'>
          <input
            type='checkbox'
            className='filled-in'
            checked={props.query.withInst}
            onChange={(event) => {
              props.query.withInst = event.target.checked;
              props.setLocationSearch(props.query);
            }}
          />
          <span className='text'>伴奏あり</span>
        </label>
        <label className='col s8'>
          <input
            type='checkbox'
            className='filled-in'
            checked={props.query.aCappella}
            onChange={(event) => {
              props.query.aCappella = event.target.checked;
              props.setLocationSearch(props.query);
            }}
          />
          <span className='text'>なし（アカペラ）</span>
        </label>
      </div>
    </label>
  );
}
