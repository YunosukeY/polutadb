import * as React from 'react';
import Grid, { GridSize } from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function MyCheckbox(props: { xs: GridSize; checked: boolean; onChange: any; label: string }) {
  return (
    <Grid item xs={props.xs}>
      <FormControlLabel
        control={<Checkbox checked={props.checked} onChange={props.onChange} color='primary' />}
        label={props.label}
      />
    </Grid>
  );
}
