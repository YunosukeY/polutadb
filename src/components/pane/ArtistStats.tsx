import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import HR from '../layout/HR';
import { Pane, Chartdiv } from '../../lib/style';
import { getArtist } from '../../data/utils';
import { artists } from '../../data/artists';
import { singings } from '../../data/singings';

export default function ArtistStats() {
  useEffect(() => {
    setChart();
  });

  return (
    <Pane>
      <h4 style={{ textAlign: 'center' }}>{artists.length} Artists</h4>
      <HR />
      <Chartdiv id='artist-stats' />
    </Pane>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart() {
  am4core.useTheme(am4themes_animated);

  const chart = am4core.create('artist-stats', am4charts.PieChart);
  chart.data = calcArtistStats();
  const pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'count';
  pieSeries.dataFields.category = 'artist';
  pieSeries.slices.template.stroke = am4core.color('#fff');
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  chart.hiddenState.properties.radius = am4core.percent(0);
}

function calcArtistStats() {
  const border = 9;

  const data: { [index: string]: number } = {};
  artists.forEach((artist) => (data[artist.name] = 0));
  singings.forEach((singing) => data[getArtist(singing.songId)]++);
  // その他の計算
  let others = 0;
  artists.forEach((artist) => {
    if (data[artist.name] <= border) {
      others++;
    }
  });

  let res: { artist: string; count: number }[] = [];
  artists.forEach((artist) => {
    if (data[artist.name] > border) {
      res.push({ artist: artist.name, count: data[artist.name] });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ artist: `その他（${border}回以下）`, count: others });

  return res;
}
