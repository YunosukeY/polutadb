import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useOnChange, useStyles } from './utils';
import { useVideos } from '../../data/utils';

export default function Video() {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'video',
    control,
    defaultValue: -1,
  });

  const onChange = useOnChange(inputProps.onChange, (q, v) => (q.video = v));

  const videos = useVideos().map((video) => (
    <MenuItem value={video.i} key={video.i}>
      {video.date}: {video.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画</InputLabel>
      <Select inputRef={ref} {...inputProps} defaultValue='' onChange={(e) => onChange(e.target.value)}>
        <MenuItem value={-1}>-</MenuItem>
        {videos}
      </Select>
    </FormControl>
  );
}
