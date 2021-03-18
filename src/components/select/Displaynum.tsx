import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Radio from './Radio';

export default function Displaynum(props: { displaynum: number; setDisplaynum: (displaynum: number) => void }) {
  const colsize = 3;
  return (
    <>
      <label>
        <h6 className='text'>表示件数</h6>
      </label>
      <form action='#'>
        <Grid container style={{ padding: 5 }}>
          <Radio
            text='5件'
            onChange={() => props.setDisplaynum(5)}
            checked={props.displaynum === 5}
            xs={colsize}
            sm={colsize}
          />
          <Radio
            text='10件'
            onChange={() => props.setDisplaynum(10)}
            checked={props.displaynum === 10}
            xs={colsize}
            sm={colsize}
          />
          <Radio
            text='20件'
            onChange={() => props.setDisplaynum(20)}
            checked={props.displaynum === 20}
            xs={colsize}
            sm={colsize}
          />
          <Radio
            text='50件'
            onChange={() => props.setDisplaynum(50)}
            checked={props.displaynum === 50}
            xs={colsize}
            sm={colsize}
          />
        </Grid>
      </form>
    </>
  );
}
