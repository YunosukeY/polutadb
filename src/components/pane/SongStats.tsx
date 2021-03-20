import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { Pane, Chartdiv } from '../../lib/style';
import { songs } from '../../data/songs';
import { singings } from '../../data/singings';

export default function SongStats() {
  useEffect(() => {
    setChart();
  });

  return (
    <Pane>
      <h4 style={{ textAlign: 'center' }}>{songs.length} Songs</h4>
      <Chartdiv id='song-stats' />
    </Pane>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart() {
  am4core.useTheme(am4themes_animated);

  const chart = am4core.create('song-stats', am4charts.PieChart);
  chart.data = calcSongStats();
  const pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'count';
  pieSeries.dataFields.category = 'song';
  pieSeries.slices.template.stroke = am4core.color('#fff');
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  chart.hiddenState.properties.radius = am4core.percent(0);
}

function calcSongStats() {
  const border = 3;

  const data: { [index: string]: number } = {};
  songs.forEach((song) => (data[song.title] = 0));
  singings.forEach((singing) => data[songs[singing.songId].title]++);
  // その他の計算
  let others = 0;
  songs.forEach((song) => {
    if (data[song.title] <= border) {
      others++;
    }
  });

  let res: { song: string; count: number }[] = [];
  songs.forEach((song) => {
    if (data[song.title] > border) {
      res.push({ song: song.title, count: data[song.title] });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ song: `その他（${border}回以下）`, count: others });

  return res;
}
