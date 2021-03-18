import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import { EachSelectProps } from './utils';

export default function Length(props: EachSelectProps) {
  return (
    <label>
      <h6 className='text'>尺</h6>
      <Grid container style={{ padding: 5 }}>
        <Grid item xs={4}>
          <label>
            <input
              type='checkbox'
              className='filled-in'
              checked={props.query.full}
              onChange={(event) => {
                props.query.full = event.target.checked;
                props.setLocationSearch(props.query);
              }}
            />
            <span className='text'>フル尺</span>
          </label>
        </Grid>
        <Grid item xs={8}>
          <label>
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
        </Grid>
      </Grid>
    </label>
  );
}
