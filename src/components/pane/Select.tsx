import * as React from 'react';
import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';

import HR from '../layout/HR';
import FullTextSearch from '../select/FullTextSearch';
import Genre from '../select/Genre';
import Type from '../select/Type';
import Video from '../select/Video';
import Song from '../select/Song';
import Artist from '../select/Artist';
import Inst from '../select/Inst';
import Length from '../select/Length';
import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';
import Sort from '../select/Sort';
import { Pane } from '../../lib/style';
import { appState } from '../../lib/AppState';
import { Query } from '../../lib/query';

const useStyles = makeStyles({
  h4: {
    marginBottom: 0,
  },
  icon: {
    fontSize: 28,
  },
  gridItem: {
    paddingRight: '.75rem',
  },
});

export default function Select(props: {
  query: Query;
  setLocationSearch: (newQuery: Query) => void;
  setPagenum: (pagenum: number) => void;
}) {
  const [state, setState] = useRecoilState(appState);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem('isHidden');
    setIsHidden(stickyValue !== null ? stickyValue === 'true' : false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('isHidden', String(isHidden));
  });

  const onClick = () => {
    setIsHidden(!isHidden);
  };

  // 表示件数が更新されたら1ページ目に戻す
  function onDnumChange(newDnum: number) {
    setState((state) => ({ ...state, displaynum: newDnum }));
    props.setPagenum(1);
  }

  const classes = useStyles();

  return (
    <Pane>
      {isHidden && (
        <h4 onClick={onClick} className={classes.h4}>
          <ArrowRightIcon className={classes.icon} />
          Search
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick}>
            <ArrowDropDownIcon className={classes.icon} />
            Search
          </h4>
          <HR />
          <FullTextSearch query={props.query} setLocationSearch={props.setLocationSearch} />
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Genre query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Type query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
          </Grid>
          <div className={classes.gridItem}>
            <Video query={props.query} setLocationSearch={props.setLocationSearch} />
          </div>
          <Grid container>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Song query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridItem}>
              <Artist query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Inst query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Length query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Displaynum displaynum={state.displaynum} setDisplaynum={onDnumChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DisplayFormat
                displayMode={state.displayMode}
                setDisplayMode={(displayMode: number) => {
                  setState((state) => ({ ...state, displayMode: displayMode }));
                }}
              />
            </Grid>
          </Grid>
          <Sort
            sortedBy={state.sortedBy}
            setSortedBy={(sortedBy: number) => {
              setState((state) => ({ ...state, sortedBy: sortedBy }));
            }}
          />
        </>
      )}
    </Pane>
  );
}
