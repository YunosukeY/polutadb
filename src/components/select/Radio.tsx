import * as React from 'react';
import Grid, { GridSize } from '@material-ui/core/Grid';

export default function Radio(props: {
  text: string;
  onChange: (newValue: string) => void;
  checked: boolean;
  xs: GridSize;
  sm: GridSize;
}) {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <label>
        <input
          className='with-gap'
          type='radio'
          value={props.text}
          checked={props.checked}
          onChange={() => props.onChange(props.text)}
        />
        <span className='text'>{props.text}</span>
      </label>
    </Grid>
  );
}
