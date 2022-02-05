import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './utils';
import { getGenres } from '../../data/utils';

export default function Genre() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'genre',
    control,
  });

  const genres = getGenres().map((genre) => (
    <MenuItem value={genre.i} key={genre.i}>
      {genre.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>曲のジャンル</InputLabel>
      <Select inputRef={ref} {...inputProps} defaultValue=''>
        <MenuItem value={-1}>-</MenuItem>
        {genres}
      </Select>
    </FormControl>
  );
}
