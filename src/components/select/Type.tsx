import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './utils';
import { useTypes } from '../../data/utils';

export default function Type() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'type',
    control,
  });

  const types = useTypes().map((type) => (
    <MenuItem value={type.i} key={type.i}>
      {type.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画のタイプ</InputLabel>
      <Select inputRef={ref} {...inputProps} defaultValue=''>
        <MenuItem value={-1}>-</MenuItem>
        {types}
      </Select>
    </FormControl>
  );
}
