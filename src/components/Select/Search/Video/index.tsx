import * as React from 'react';
import FormControl from '@mui/material/FormControl';

import { useOnChange, useStyles } from '../util';
import { useVideos } from '../../../../data/utils';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

type VideoProps = {
  video: number;
  setVideo: (v: number) => void;
};

export default function Video({ video, setVideo }: VideoProps) {
  const classes = useStyles();

  const onChangeVideo = useOnChange(setVideo, (q, v) => (q.video = v));

  const videos = useVideos();
  return (
    <FormControl variant='standard' className={classes.formControl}>
      <Autocomplete
        options={videos}
        onChange={(e, v) => onChangeVideo(v == null ? -1 : v.i)}
        value={video === -1 ? { date: '', title: '', i: -1 } : videos.find((v) => v.i === video)}
        isOptionEqualToValue={(option) => option.i == video}
        getOptionLabel={(option) => (option.date && option.title ? `${option.date}: ${option.title}` : '')}
        renderInput={(params) => <TextField variant='standard' {...params} label='動画' />}
      />
    </FormControl>
  );
}
