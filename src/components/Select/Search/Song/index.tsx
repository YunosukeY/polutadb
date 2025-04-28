import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import { useSongs } from '../../../../data/utils';
import { StyledFormControl, useOnChange } from '../util';

type SongProps = {
  song: number;
  setSong: (v: number) => void;
};

export default function Song({ song, setSong }: SongProps) {
  const onChangeSong = useOnChange(setSong, (q, v) => {
    q.song = v;
  });

  const songs = useSongs();
  return (
    <StyledFormControl variant='standard'>
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
    </StyledFormControl>
  );
}
