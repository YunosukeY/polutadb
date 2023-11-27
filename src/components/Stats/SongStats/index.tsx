import * as React from 'react';

import HR from '../../common/HR';
import { useRecoilValue } from 'recoil';
import { Singing, Song } from '../../../data/types';
import { songsSelector, singingsSelector } from '../../../store/dataAtom';
import Pane from '../../common/Pane';
import { Grid, Typography } from '@mui/material';

type RowProps = {
  song: string | undefined;
  count: number | undefined;
  order: number;
};
const Row: React.FC<RowProps> = ({ song, count, order }) => {
  const fontSize = (() => {
    if (order === 1) {
      return '2rem';
    } else if (order <= 3) {
      return '1.7rem';
    } else if (order <= 10) {
      return '1.3rem';
    } else {
      return '1.15rem';
    }
  })();

  return (
    <Grid item style={{ fontSize }}>
      {/* eslint-disable-next-line no-irregular-whitespace */}
      {order}位　{song}：{count}回
    </Grid>
  );
};

export default function SongStats() {
  const songs = useRecoilValue(songsSelector);
  const singings = useRecoilValue(singingsSelector);
  const data = calcSongStats(songs, singings);

  return (
    <Pane>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        Top 10 Songs
      </Typography>
      <HR />
      <Grid container direction='column' alignItems='center' spacing={2} style={{ fontFamily: 'Comfortaa' }}>
        {data?.map((d, i) => i < 10 && <Row key={d.song} {...d} order={i + 1} />)}
      </Grid>
    </Pane>
  );
}

function calcSongStats(songs: Song[] | undefined, singings: Singing[] | undefined) {
  const data: { [index: string]: number } = {};
  songs?.forEach((song) => (data[song.title] = 0));
  singings?.forEach((singing) => data[singing.song]++);

  const res = songs?.map((song) => ({ song: song.title, count: data[song.title] })).sort((a, b) => b.count - a.count);
  return res;
}
