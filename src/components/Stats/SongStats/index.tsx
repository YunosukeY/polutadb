import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import * as React from 'react';
import { useEffect } from 'react';
import type { Singing, Song } from '../../../data/types';
import { singingsAtom, songsAtom } from '../../../store/dataAtom';
import ChartDiv from '../../common/ChartDiv';
import HR from '../../common/HR';
import Pane from '../../common/Pane';
import { calcSongStats } from '../calc';

export default function SongStats() {
  const songs = useAtomValue(songsAtom);
  const singings = useAtomValue(singingsAtom);

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
    tooltipText: '{category}: {value}回',
  });
  series.labels.template.setAll({
    text: '{category}: {value}回',
  });
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  series.appear();
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  chart.appear();

  return root;
}
