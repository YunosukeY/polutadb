import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getTypes } from '../../data/utils';

export default function Type(props: EachSelectProps) {
  const classes = useStyles();

  const types = getTypes().map((type) => (
    <MenuItem value={type.i} key={type.i}>
      {type.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>枠タイプ</InputLabel>
      <Select
        value={props.query.type === -1 ? '' : props.query.type}
        onChange={(event) => {
          props.query.type = Number(event.target.value);
          props.setLocationSearch(props.query);
        }}
      >
        <MenuItem value={-1}>-</MenuItem>
        {types}
      </Select>
    </FormControl>
  );
}
