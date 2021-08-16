import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStyles } from './utils';
import { getVideos } from '../../data/utils';

export default function Video() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'video',
    control,
  });

  const videos = getVideos().map((video) => (
    <MenuItem value={video.i} key={video.i}>
      {video.date}: {video.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画を選択</InputLabel>
      <Select inputRef={ref} {...inputProps} defaultValue=''>
        <MenuItem value={-1}>-</MenuItem>
        {videos}
      </Select>
    </FormControl>
  );
}
