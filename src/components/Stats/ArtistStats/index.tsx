import * as React from 'react';
import { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import HR from '../../common/HR';
import { useGetArtist } from '../../../data/utils';
import { useRecoilValue } from 'recoil';
import { Artist, Singing } from '../../../data/types';
import { artistsSelector, singingsSelector } from '../../../store/dataAtom';
import ChartDiv from '../../common/ChartDiv';
import Pane from '../../common/Pane';
import { Typography } from '@mui/material';

export default function ArtistStats() {
  const artists = useRecoilValue(artistsSelector);
  const singings = useRecoilValue(singingsSelector);
  const getArtist = useGetArtist();

  useEffect(() => {
    const root = setChart(artists, singings, getArtist);
    return () => {
      root.dispose();
    };
  }, [artists, getArtist, singings]);

  return (
    <Pane>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        {artists?.length} Artists
      </Typography>
      <HR />
      <ChartDiv id='artist-stats' />
    </Pane>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart(artists: Artist[] | undefined, singings: Singing[] | undefined, getArtist: (song: string) => string) {
  const root = am5.Root.new('artist-stats');
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(am5percent.PieChart.new(root, {}));

  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      categoryField: 'artist',
      valueField: 'count',
    }),
  );
  series.data.setAll(calcArtistStats(artists, singings, getArtist));

  series.slices.template.setAll({
    fillOpacity: 0.9,
    stroke: am5.color('#fff'),
    strokeWidth: 1,
  });
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  series.appear();
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  chart.appear();

  return root;
}

function calcArtistStats(
  artists: Artist[] | undefined,
  singings: Singing[] | undefined,
  getArtist: (song: string) => string,
) {
  const border = 12;

  const data: { [index: string]: number } = {};
  artists?.forEach((artist) => (data[artist.name] = 0));
  singings?.forEach((singing) => data[getArtist(singing.song)]++);
  // その他の計算
  let others = 0;
  artists?.forEach((artist) => {
    const count = data[artist.name];
    if (count !== undefined && count <= border) {
      others++;
    }
  });

  let res: { artist: string; count: number }[] = [];
  artists?.forEach((artist) => {
    const count = data[artist.name];
    if (count !== undefined && count > border) {
      res.push({ artist: artist.name, count });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ artist: `その他（${border}回以下）`, count: others });

  return res;
}
