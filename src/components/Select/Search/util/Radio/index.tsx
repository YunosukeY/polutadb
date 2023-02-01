import * as React from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function MyRadio(props: { value: number; label: string; xs: GridSize; sm: GridSize }) {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <FormControlLabel value={props.value} control={<Radio color='primary' />} label={props.label} />
    </Grid>
  );
}
