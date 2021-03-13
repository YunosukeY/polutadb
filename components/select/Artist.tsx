import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getArtists } from '../../data/utils';

export default function Artist(props: EachSelectProps) {
  const classes = useStyles();

  const artists = getArtists().map((artist) => (
    <MenuItem value={artist.i} key={artist.i}>
      {artist.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>アーティスト</InputLabel>
      <Select
        value={props.query.artist === -1 ? '' : props.query.artist}
        onChange={(event) => {
          props.query.artist = Number(event.target.value);
          props.setLocationSearch(props.query);
        }}
      >
        <MenuItem value={-1}>-</MenuItem>
        {artists}
      </Select>
    </FormControl>
  );
}
