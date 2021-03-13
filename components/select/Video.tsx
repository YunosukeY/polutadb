import * as React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getVideos } from '../../data/utils';

export default function Video(props: EachSelectProps) {
  const classes = useStyles();

  const videos = getVideos().map((video) => (
    <MenuItem value={video.i} key={video.i}>
      {video.date}: {video.title}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画</InputLabel>
      <Select
        value={props.query.video === -1 ? '' : props.query.video}
        onChange={(event) => {
          props.query.video = Number(event.target.value);
          props.setLocationSearch(props.query);
        }}
      >
        <MenuItem value={-1}>-</MenuItem>
        {videos}
      </Select>
    </FormControl>
  );
}
