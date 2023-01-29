import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';

import { useOnChange, useStyles } from '../util';
import { useTypes } from '../../../../data/utils';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

export default function Type() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'type',
    control,
    defaultValue: -1,
  });

  const onChangeType = useOnChange(onChange, (q, v) => (q.type = v));

  const types = useTypes();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={types}
        onChange={(e, v) => onChangeType(v == null ? -1 : v.i)}
        {...inputProps}
        value={value === -1 ? { name: '', i: -1 } : types.find((v) => v.i === value)}
        getOptionSelected={(option) => option.i == value}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='動画のタイプ' />}
      />
    </FormControl>
  );
}
