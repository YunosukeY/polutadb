import * as React from 'react';
import Grid, { GridSize } from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function MyRadio(props: { value: number; label: string; xs: GridSize; sm: GridSize }) {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <FormControlLabel value={props.value} control={<Radio color='primary' />} label={props.label} />
    </Grid>
  );
}
