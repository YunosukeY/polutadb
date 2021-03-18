import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Radio from './Radio';

export default function DisplayFormat(props: { displayMode: number; setDisplayMode: (mode: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>表示形式</h6>
      </label>
      <form action='#'>
        <Grid container style={{ padding: 5 }}>
          <Radio
            text='通常表示'
            onChange={() => props.setDisplayMode(0)}
            checked={props.displayMode === 0}
            xs={4}
            sm={4}
          />
          <Radio
            text='簡易表示'
            onChange={() => props.setDisplayMode(1)}
            checked={props.displayMode === 1}
            xs={4}
            sm={4}
          />
        </Grid>
      </form>
    </>
  );
}
