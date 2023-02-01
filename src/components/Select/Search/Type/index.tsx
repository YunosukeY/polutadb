import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';

import { useOnChange, useStyles } from '../util';
import { useTypes } from '../../../../data/utils';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

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
        isOptionEqualToValue={(option) => option.i == value}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='動画のタイプ' />}
      />
    </FormControl>
  );
}
