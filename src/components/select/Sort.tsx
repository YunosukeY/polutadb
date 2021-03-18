import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Radio from './Radio';

export default function Sort(props: { sortedBy: number; setSortedBy: (sortedBy: number) => void }) {
  return (
    <>
      <label>
        <h6 className='text'>ソート</h6>
      </label>
      <form action='#'>
        <Grid container style={{ padding: 5 }}>
          <Radio text='時系列順' onChange={() => props.setSortedBy(0)} checked={props.sortedBy === 0} xs={4} sm={2} />
          <Radio text='曲名順' onChange={() => props.setSortedBy(1)} checked={props.sortedBy === 1} xs={3} sm={2} />
          <Radio
            text='アーティスト名順'
            onChange={() => props.setSortedBy(2)}
            checked={props.sortedBy === 2}
            xs={5}
            sm={8}
          />
        </Grid>
      </form>
    </>
  );
}
