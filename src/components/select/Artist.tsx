import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { EachSelectProps, useStyles } from './utils';
import { getArtists } from '../../data/utils';

export default function Artist(props: EachSelectProps) {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'artist',
    control,
  });
  const onChangeArtist = (event: any, value: any) => {
    if (value !== null) props.query.artist = Number(value.i);
    else props.query.artist = -1;
    props.setLocationSearch(props.query);
    onChange(value.i);
  };

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
        onChange={onChangeArtist}
        {...inputProps}
        value={props.query.artist === -1 ? null : getIth(props.query.artist)}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label='アーティストを選択' />}
      />
    </FormControl>
  );
}
