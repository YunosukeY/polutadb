import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Grid from '@material-ui/core/Grid';

import About from '../components/pane/About';
import Card from '../components/top/Card';

export default function Top() {
  const spacing = 2;
  return (
    <>
      <About />
      <div style={{ paddingTop: 8, paddingBottom: 8 }}>
        <Grid container spacing={spacing}>
          <Card link='/' title='Search' icon={SearchIcon} />
          <Card link='/favos' title='Favorites' icon={StarIcon} />
          <Card link='/stats' title='Statistics' icon={DonutLargeIcon} />
          <Card link='/releases' title='Release Notes' icon={ImportContactsIcon} />
        </Grid>
      </div>
    </>
  );
}
