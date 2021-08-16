import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { EachSelectProps, useStyles } from './utils';
import { getSongs } from '../../data/utils';

export default function Song(props: EachSelectProps) {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'song',
    control,
  });
  const onChangeSong = (event: any, value: any) => {
    if (value !== null) props.query.song = Number(value.i);
    else props.query.song = -1;
    props.setLocationSearch(props.query);
    onChange(value.i);
  };

  const songs = getSongs();
  const getIth = (i: number) => {
    for (const song of songs) {
      if (song.i === i) return song;
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={songs}
        onChange={onChangeSong}
        {...inputProps}
        value={props.query.song === -1 ? null : getIth(props.query.song)}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label='曲を選択' />}
      />
    </FormControl>
  );
}
