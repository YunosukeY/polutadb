import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';

import { useOnChange, useStyles } from '../util';
import { useVideos } from '../../../../data/utils';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

export default function Video() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { onChange, value, ...inputProps },
  } = useController({
    name: 'video',
    control,
    defaultValue: -1,
  });

  const onChangeVideo = useOnChange(onChange, (q, v) => (q.video = v));

  const videos = useVideos();
  return (
    <FormControl className={classes.formControl}>
      <Autocomplete
        options={videos}
        onChange={(e, v) => onChangeVideo(v == null ? -1 : v.i)}
        {...inputProps}
        value={value === -1 ? { date: '', title: '', i: -1 } : videos.find((v) => v.i === value)}
        isOptionEqualToValue={(option) => option.i == value}
        getOptionLabel={(option) => (option.date && option.title ? `${option.date}: ${option.title}` : '')}
        renderInput={(params) => <TextField {...params} label='動画' />}
      />
    </FormControl>
  );
}
