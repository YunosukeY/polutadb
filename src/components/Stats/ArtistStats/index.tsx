import * as React from 'react';
import HR from '../../common/HR';
import { useGetArtist } from '../../../data/utils';
import { useRecoilValue } from 'recoil';
import { Artist, Singing } from '../../../data/types';
import { artistsSelector, singingsSelector } from '../../../store/dataAtom';
import Pane from '../../common/Pane';
import { Grid, Typography } from '@mui/material';

type RowProps = {
  artist: string | undefined;
  count: number | undefined;
  order: number;
};
const Row: React.FC<RowProps> = ({ artist, count, order }) => {
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
      {order}位　{artist}：{count}回
    </Grid>
  );
};

export default function ArtistStats() {
  const artists = useRecoilValue(artistsSelector);
  const singings = useRecoilValue(singingsSelector);
  const getArtist = useGetArtist();
  const data = calcArtistStats(artists, singings, getArtist);

  return (
    <Pane>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        Top 10 Artists
      </Typography>
      <HR />
      <Grid container direction='column' alignItems='center' spacing={2} style={{ fontFamily: 'Comfortaa' }}>
        {data?.map((d, i) => i < 10 && <Row key={d.artist} {...d} order={i + 1} />)}
      </Grid>
    </Pane>
  );
}

function calcArtistStats(
  artists: Artist[] | undefined,
  singings: Singing[] | undefined,
  getArtist: (song: string) => string,
) {
  const data: { [index: string]: number } = {};
  artists?.forEach((artist) => (data[artist.name] = 0));
  singings?.forEach((singing) => data[getArtist(singing.song)]++);

  const res = artists
    ?.map((artist) => ({ artist: artist.name, count: data[artist.name] }))
    .sort((a, b) => b.count - a.count);
  return res;
}
