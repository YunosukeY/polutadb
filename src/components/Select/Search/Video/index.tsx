import * as React from 'react';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import { useVideos } from '../../../../data/utils';
import { StyledFormControl, useOnChange } from '../util';

type VideoProps = {
  video: number;
  setVideo: (v: number) => void;
};

export default function Video({ video, setVideo }: VideoProps) {
  const onChangeVideo = useOnChange(setVideo, (q, v) => {
    q.video = v;
  });

  const videos = useVideos();
  return (
    <StyledFormControl variant='standard'>
      <Autocomplete
        options={videos}
        onChange={(e, v) => {
          onChangeVideo(v == null ? -1 : v.i);
        }}
        value={video === -1 ? { date: '', title: '', i: -1 } : videos.find((v) => v.i === video)}
        isOptionEqualToValue={(option) => option.i == video}
        getOptionLabel={(option) => (option.date && option.title ? `${option.date}: ${option.title}` : '')}
        renderInput={(params) => <TextField variant='standard' {...params} label='動画' />}
      />
    </StyledFormControl>
  );
}
