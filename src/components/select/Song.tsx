import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useOnChange, useStyles } from './utils';
import { useSongs } from '../../data/utils';

export default function Song() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'song',
    control,
  });

  const onChangeSong = useOnChange(onChange, (q, v) => (q.song = v));

  const songs = useSongs();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={songs}
        onChange={(e, v) => onChangeSong(v == null ? -1 : v.i)}
        {...inputProps}
        value={value === -1 ? '' : value}
        getOptionSelected={(option) => option.i == value}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label='曲' />}
      />
    </FormControl>
  );
}
