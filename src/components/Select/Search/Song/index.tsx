import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import { useSongs } from '../../../../data/utils';
import { useOnChange, useStyles } from '../util';

type SongProps = {
  song: number;
  setSong: (v: number) => void;
};

export default function Song({ song, setSong }: SongProps) {
  const classes = useStyles();

  const onChangeSong = useOnChange(setSong, (q, v) => {
    q.song = v;
  });

  const songs = useSongs();
  return (
    <FormControl variant='standard' className={classes.formControl}>
      <Autocomplete
        options={songs}
        onChange={(e, v) => {
          onChangeSong(v == null ? -1 : v.i);
        }}
        value={song === -1 ? { title: '', i: -1 } : songs.find((v) => v.i === song)}
        isOptionEqualToValue={(option) => option.i == song}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField variant='standard' {...params} label='曲' />}
      />
    </FormControl>
  );
}
