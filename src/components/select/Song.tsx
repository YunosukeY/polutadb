import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { EachSelectProps, useStyles } from './utils';
import { getSongs } from '../../data/utils';

export default function Song(props: EachSelectProps) {
  const classes = useStyles();

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
        value={props.query.song === -1 ? null : getIth(props.query.song)}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} label='曲を選択' />}
        onChange={(event, value) => {
          if (value !== null) props.query.song = Number(value.i);
          else props.query.song = -1;
          props.setLocationSearch(props.query);
        }}
      />
    </FormControl>
  );
}
