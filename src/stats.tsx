import * as React from 'react';
import { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { songs, genres, artists, singings, getGenre, getArtist } from './data';

export function Stats() {
  useEffect(() => {
    setChart();
  });

  return (
    <div>
      <h4 className='center'>Genres</h4>
      <div className='chartdiv' id='genre-stats'></div>
      <h4 className='center'>Artists</h4>
      <div className='chartdiv' id='artist-stats'></div>
      <h4 className='center'>Songs</h4>
      <div className='chartdiv' id='song-stats'></div>
    </div>
  );
}

function calcGenreStats() {
  // インデックスシグネチャ
  let data: { [index: string]: number; } = {};
  // 各ジャンルを初期化
  genres.forEach(genre => data[genre.name] = 0);
  // 集計
  singings.forEach(singing => data[getGenre(singing.songId)]++);

  // 結果を格納
  let res: any[] = [];
  genres.forEach(genre => res.push({ 'genre': genre.name, 'count': data[genre.name] }));
  res = res.sort((a, b) => b.count - a.count);
  return res;
}

function calcArtistStats() {
  let data: { [index: string]: number; } = {};
  artists.forEach(artist => data[artist.name] = 0);
  singings.forEach(singing => data[getArtist(singing.songId)]++);
  // その他の計算
  let others = 0;
  artists.forEach(artist => {
    if (data[artist.name] <= 2) {
      others++;
    }
  });

  let res: any[] = [];
  artists.forEach(artist => {
    if (data[artist.name] > 2) {
      res.push({ 'artist': artist.name, 'count': data[artist.name] });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ 'artist': 'その他', 'count': others });

  return res;
}

function calcSongStats() {
  let data: { [index: string]: number; } = {};
  songs.forEach(song => data[song.title] = 0);
  singings.forEach(singing => data[songs[singing.songId].title]++);
  // その他の計算
  let others = 0;
  songs.forEach(song => {
    if (data[song.title] <= 1) {
      others++;
    }
  });

  let res: any[] = [];
  songs.forEach(song => {
    if (data[song.title] > 1) {
      res.push({ 'song': song.title, 'count': data[song.title] });
    }
  });
  res = res.sort((a, b) => b.count - a.count);
  res.push({ 'song': 'その他', 'count': others });

  return res;
}

export function setChart() {
  am4core.useTheme(am4themes_animated);

  {
    let chart = am4core.create('genre-stats', am4charts.PieChart);
    chart.data = calcGenreStats();
    let pieSeries = chart.series.push(new am4charts.PieSeries());
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
    let chart = am4core.create('artist-stats', am4charts.PieChart);
    chart.data = calcArtistStats();
    let pieSeries = chart.series.push(new am4charts.PieSeries());
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
    let chart = am4core.create('song-stats', am4charts.PieChart);
    chart.data = calcSongStats();
    let pieSeries = chart.series.push(new am4charts.PieSeries());
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
