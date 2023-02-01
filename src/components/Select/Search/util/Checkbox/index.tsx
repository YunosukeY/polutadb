import * as React from 'react';
import Grid, { GridSize } from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox as MuiCheckbox } from '@mui/material';

type CheckboxProps = { xs: GridSize; checked: boolean; onChange: any; label: string };

// eslint-disable-next-line react/display-name
const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => (
  <Grid item xs={props.xs}>
    <FormControlLabel
      control={<MuiCheckbox checked={props.checked} onChange={props.onChange} color='primary' ref={ref} />}
      label={props.label}
    />
  </Grid>
));

export default Checkbox;
