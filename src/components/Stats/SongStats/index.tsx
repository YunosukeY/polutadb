import * as React from 'react';
import { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

import HR from '../../common/HR';
import { useRecoilValue } from 'recoil';
import { Singing, Song } from '../../../data/types';
import { songsSelector, singingsSelector } from '../../../store/dataAtom';
import Pane from '../../common/Pane';
import ChartDiv from '../../common/ChartDiv';
import { Typography } from '@mui/material';

export default function SongStats() {
  const songs = useRecoilValue(songsSelector);
  const singings = useRecoilValue(singingsSelector);

  useEffect(() => {
    const root = setChart(songs, singings);
    return () => {
      root.dispose();
    };
  }, [singings, songs]);

  return (
    <Pane>
      <Typography variant='h4' style={{ textAlign: 'center' }}>
        {songs?.length} Songs
      </Typography>
      <HR />
      <ChartDiv id='song-stats' />
    </Pane>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart(songs: Song[] | undefined, singings: Singing[] | undefined) {
  const root = am5.Root.new('song-stats');
  root.setThemes([am5themes_Animated.new(root)]);

  const chart = root.container.children.push(am5percent.PieChart.new(root, {}));

  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      categoryField: 'song',
      valueField: 'count',
    }),
  );
  series.data.setAll(calcSongStats(songs, singings));

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

function calcSongStats(songs: Song[] | undefined, singings: Singing[] | undefined) {
  const border = 8;

  const data: { [index: string]: number } = {};
  songs?.forEach((song) => (data[song.title] = 0));
  singings?.forEach((singing) => data[singing.song]++);
  // その他の計算
  let others = 0;
  songs?.forEach((song) => {
    const count = data[song.title];
    if (count !== undefined && count <= border) {
      others++;
    }
  });

  let res: { song: string; count: number }[] = [];
  songs?.forEach((song) => {
    const count = data[song.title];
    if (count !== undefined && count > border) {
      res.push({ song: song.title, count });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ song: `その他（${border}回以下）`, count: others });

  return res;
}
