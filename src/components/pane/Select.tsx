import * as React from 'react';
import { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Grid from '@material-ui/core/Grid';

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

import { useAppState, useSetAppState } from '../../lib/AppState';
import { Query } from '../../lib/query';

export default function Select(props: {
  query: Query;
  setLocationSearch: (newQuery: Query) => void;
  setPagenum: (pagenum: number) => void;
}) {
  const appState = useAppState();
  const setAppState = useSetAppState();

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
    setAppState((state) => ({ ...state, displaynum: newDnum }));
    props.setPagenum(1);
  }

  const fontsize = 28;

  return (
    <div className='pane' id='search'>
      {isHidden && (
        <h4 onClick={onClick} style={{ marginBottom: 0 }}>
          <ArrowRightIcon style={{ fontSize: fontsize }} />
          Search
        </h4>
      )}
      {!isHidden && (
        <>
          <h4 onClick={onClick}>
            <ArrowDropDownIcon style={{ fontSize: fontsize }} />
            Search
          </h4>
          <FullTextSearch query={props.query} setLocationSearch={props.setLocationSearch} />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Genre query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Type query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
          </Grid>
          <Video query={props.query} setLocationSearch={props.setLocationSearch} />
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Song query={props.query} setLocationSearch={props.setLocationSearch} />
            </Grid>
            <Grid item xs={12} sm={6}>
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
              <Displaynum displaynum={appState.displaynum} setDisplaynum={onDnumChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DisplayFormat
                displayMode={appState.displayMode}
                setDisplayMode={(displayMode: number) => {
                  setAppState((state) => ({ ...state, displayMode: displayMode }));
                }}
              />
            </Grid>
          </Grid>
          <Sort
            sortedBy={appState.sortedBy}
            setSortedBy={(sortedBy: number) => {
              setAppState((state) => ({ ...state, sortedBy: sortedBy }));
            }}
          />
        </>
      )}
    </div>
  );
}
