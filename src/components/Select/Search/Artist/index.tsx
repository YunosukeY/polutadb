import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useOnChange, useStyles } from '../util';
import { useArtists } from '../../../../data/utils';

type ArtistProps = {
  artist: number;
  setArtist: (v: number) => void;
};

export default function Artist({ artist, setArtist }: ArtistProps) {
  const classes = useStyles();

  const onChangeArtist = useOnChange(setArtist, (q, v) => {
    q.artist = v;
  });

  const artists = useArtists();
  return (
    <FormControl variant='standard' className={classes.formControl}>
      <Autocomplete
        options={artists}
        onChange={(e, v) => {
          onChangeArtist(v == null ? -1 : v.i);
        }}
        value={artist === -1 ? { name: '', i: -1 } : artists.find((v) => v.i === artist)}
        isOptionEqualToValue={(option) => option.i == artist}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField variant='standard' {...params} label='アーティスト' />}
      />
    </FormControl>
  );
}
