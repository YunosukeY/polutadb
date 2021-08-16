import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getVideos } from '../../data/utils';

export default function Video(props: EachSelectProps) {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name: 'video',
    control,
  });
  const onChangeVideo = (event: any) => {
    props.query.video = Number(event.target.value);
    props.setLocationSearch(props.query);
    onChange(event);
  };

  const videos = getVideos().map((video) => (
    <MenuItem value={video.i} key={video.i}>
      {video.date}: {video.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画を選択</InputLabel>
      <Select
        onChange={onChangeVideo}
        inputRef={ref}
        {...inputProps}
        value={props.query.video === -1 ? '' : props.query.video}
      >
        <MenuItem value={-1}>-</MenuItem>
        {videos}
      </Select>
    </FormControl>
  );
}
