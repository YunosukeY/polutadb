import * as React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { EachSelectProps, useStyles } from './utils';
import { getArtists } from '../../data/utils';

export default function Artist(props: EachSelectProps) {
  const classes = useStyles();

  const artists = getArtists();
  const getIth = (i: number) => {
    for (const artist of artists) {
      if (artist.i === i) return artist;
    }
  };

  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={artists}
        value={props.query.artist === -1 ? null : getIth(props.query.artist)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='アーティストを選択' />}
        onChange={(event, value) => {
          if (value !== null) props.query.artist = Number(value.i);
          else props.query.artist = -1;
          props.setLocationSearch(props.query);
        }}
      />
    </FormControl>
  );
}
