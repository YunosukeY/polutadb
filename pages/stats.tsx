import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { getGenre, getArtist } from '../data/utils';
import { artists } from '../data/artists';
import { songs, genres } from '../data/songs';
import { singings } from '../data/singings';

export default function Stats() {
  useEffect(() => {
    setChart();
  });

  return (
    <div id='stats'>
      <div className='pane'>
        <h4 className='center'>{genres.length} Genres</h4>
        <div className='chartdiv' id='genre-stats'></div>
      </div>
      <div className='pane'>
        <h4 className='center'>{artists.length} Artists</h4>
        <div className='chartdiv' id='artist-stats'></div>
      </div>
      <div className='pane'>
        <h4 className='center'>{songs.length} Songs</h4>
        <div className='chartdiv' id='song-stats'></div>
      </div>
    </div>
  );
}

// see https://www.amcharts.com/demos/pie-chart/
function setChart() {
  am4core.useTheme(am4themes_animated);

  {
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
  {
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
  {
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

function calcArtistStats() {
  const border = 4;

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
