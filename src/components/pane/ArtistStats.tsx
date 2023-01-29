import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import HR from '../layout/HR';
import { Pane, Chartdiv } from '../../lib/style';
import { useGetArtist } from '../../data/utils';
import { useRecoilValue } from 'recoil';
import { artistsState, singingsState } from '../../lib/AppState';
import { Artist, Singing } from '../../data/types';

export default function ArtistStats() {
  const artists = useRecoilValue(artistsState);
  const singings = useRecoilValue(singingsState);
  const getArtist = useGetArtist();

  useEffect(() => {
    setChart(artists, singings, getArtist);
  });

  return (
    <Pane>
      <h4 style={{ textAlign: 'center' }}>{artists?.length} Artists</h4>
      <HR />
      <Chartdiv id='artist-stats' />
    </Pane>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart(artists: Artist[] | undefined, singings: Singing[] | undefined, getArtist: (song: string) => string) {
  am4core.useTheme(am4themes_animated);

  const chart = am4core.create('artist-stats', am4charts.PieChart);
  chart.data = calcArtistStats(artists, singings, getArtist);
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
    if (data[artist.name] <= border) {
      others++;
    }
  });

  let res: { artist: string; count: number }[] = [];
  artists?.forEach((artist) => {
    if (data[artist.name] > border) {
      res.push({ artist: artist.name, count: data[artist.name] });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ artist: `その他（${border}回以下）`, count: others });

  return res;
}
