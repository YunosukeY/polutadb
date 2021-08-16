import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getGenres } from '../../data/utils';

export default function Genre(props: EachSelectProps) {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name: 'genre',
    control,
  });
  const onChangeSelect = (event: any) => {
    props.query.genre = Number(event.target.value);
    props.setLocationSearch(props.query);
    onChange(event);
  };

  const genres = getGenres().map((genre) => (
    <MenuItem value={genre.i} key={genre.i}>
      {genre.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>曲のジャンルを選択</InputLabel>
      <Select
        onChange={onChangeSelect}
        inputRef={ref}
        {...inputProps}
        value={props.query.genre === -1 ? '' : props.query.genre}
      >
        <MenuItem value={-1}>-</MenuItem>
        {genres}
      </Select>
    </FormControl>
  );
}
