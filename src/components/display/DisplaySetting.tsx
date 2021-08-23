import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';

export default function DisplaySetting(props: { setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Displaynum setPagenum={props.setPagenum} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <DisplayFormat />
      </Grid>
    </Grid>
  );
}
