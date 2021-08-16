import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { useStyles } from './utils';
import { getArtists } from '../../data/utils';

export default function Artist() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'artist',
    control,
  });
  const onChangeArtist = (event: any, value: any) => {
    if (value !== null) onChange(value.i);
  };

  const artists = getArtists();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={artists}
        onChange={onChangeArtist}
        {...inputProps}
        value={value === -1 ? '' : value}
        getOptionSelected={(option) => option.i === value}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='アーティストを選択' />}
      />
    </FormControl>
  );
}
