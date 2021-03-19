import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { getGenre } from '../../data/utils';
import { genres } from '../../data/songs';
import { singings } from '../../data/singings';

export default function GenreStats() {
  useEffect(() => {
    setChart();
  });

  return (
    <div className='pane'>
      <h4 style={{ textAlign: 'center' }}>{genres.length} Genres</h4>
      <div className='chartdiv' id='genre-stats'></div>
    </div>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart() {
  am4core.useTheme(am4themes_animated);

  const chart = am4core.create('genre-stats', am4charts.PieChart);
  chart.data = calcGenreStats();
  const pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = 'count';
  pieSeries.dataFields.category = 'genre';
  pieSeries.slices.template.stroke = am4core.color('#fff');
  pieSeries.slices.template.strokeOpacity = 1;
  pieSeries.hiddenState.properties.opacity = 1;
  pieSeries.hiddenState.properties.endAngle = -90;
  pieSeries.hiddenState.properties.startAngle = -90;
  chart.hiddenState.properties.radius = am4core.percent(0);
}

function calcGenreStats() {
  // インデックスシグネチャ
  const data: { [index: string]: number } = {};
  // 各ジャンルを初期化
  genres.forEach((genre) => (data[genre.name] = 0));
  // 集計
  singings.forEach((singing) => data[getGenre(singing.songId)]++);

  // 結果を格納
  let res: { genre: string; count: number }[] = [];
  genres.forEach((genre) => res.push({ genre: genre.name, count: data[genre.name] }));
  res = res.sort((a, b) => b.count - a.count);
  return res;
}
