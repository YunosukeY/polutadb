import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { EachSelectProps } from './utils';

export default function Inst(props: EachSelectProps) {
  return (
    <label>
      <h6 className='text'>伴奏</h6>
      <Grid container style={{ padding: 5 }}>
        <Grid item xs={4}>
          <label>
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
        </Grid>
        <Grid item xs={8}>
          <label>
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
        </Grid>
      </Grid>
    </label>
  );
}
