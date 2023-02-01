import { Grid } from '@mui/material';
import * as React from 'react';
import { useWindowSize } from 'react-use';

import Search from './Search';
import Sort from './Sort';

export default function Select() {
  const width = Math.min(useWindowSize().width - 100, 1000);

  return (
    <Grid container justifyContent='center'>
      <Grid item style={{ width: width }}>
        <Search />
        <Sort />
      </Grid>
    </Grid>
  );
}
