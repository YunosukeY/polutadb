import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';

import { useOnChange, useStyles } from './utils';
import { useVideos } from '../../data/utils';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

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
        getOptionSelected={(option) => option.i == value}
        getOptionLabel={(option) => (option.date && option.title ? `${option.date}: ${option.title}` : '')}
        renderInput={(params) => <TextField {...params} label='動画' />}
      />
    </FormControl>
  );
}
