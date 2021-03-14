import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getSongs } from '../../data/utils';

export default function Song(props: EachSelectProps) {
  const classes = useStyles();

  const songs = getSongs().map((song) => (
    <MenuItem value={song.i} key={song.i}>
      {song.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>曲を選択</InputLabel>
      <Select
        value={props.query.song === -1 ? '' : props.query.song}
        onChange={(event) => {
          props.query.song = Number(event.target.value);
          props.setLocationSearch(props.query);
        }}
      >
        <MenuItem value={-1}>-</MenuItem>
        {songs}
      </Select>
    </FormControl>
  );
}
