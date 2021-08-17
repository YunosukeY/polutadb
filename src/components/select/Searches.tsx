import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import FullTextSearch from './FullTextSearch';
import Genre from './Genre';
import Type from './Type';
import Video from './Video';
import Song from './Song';
import Artist from './Artist';
import Inst from './Inst';
import Length from './Length';

const useStyles = makeStyles({
  gridItem: {
    paddingRight: '.75rem',
  },
});

const Searches: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <FullTextSearch />
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Genre />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Type />
        </Grid>
      </Grid>
      <div className={classes.gridItem}>
        <Video />
      </div>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Song />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Artist />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Inst />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Length />
        </Grid>
      </Grid>
    </>
  );
};
export default Searches;
