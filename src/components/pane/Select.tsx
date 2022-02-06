import { Grid } from '@material-ui/core';
import * as React from 'react';
import { useWindowSize } from 'react-use';

import Searches from '../select/Searches';
import Sort from '../select/Sort';

export default function Select() {
  const width = Math.min(useWindowSize().width - 100, 1000);

  return (
    <Grid container justify='center'>
      <Grid item style={{ width: width }}>
        <Searches />
        <Sort />
      </Grid>
    </Grid>
  );
}
