import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import type * as React from 'react';

import { useCallback } from 'react';
import type { Form } from '../../../pages';
import Artist from './Artist';
import FullTextSearch from './FullTextSearch';
import Song from './Song';
import Type from './Type';
import Video from './Video';

type SearchProps = {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
};

const useStyles = makeStyles({
  gridItem: {
    paddingRight: '.75rem',
  },
});

const Search: React.FC<SearchProps> = ({ form, setForm }) => {
  const classes = useStyles();

  const setQuery = useCallback(
    (v: string) => {
      setForm((f) => ({ ...f, query: v }));
    },
    [setForm],
  );
  const setType = useCallback(
    (v: number) => {
      setForm((f) => ({ ...f, type: v }));
    },
    [setForm],
  );
  const setVideo = useCallback(
    (v: number) => {
      setForm((f) => ({ ...f, video: v }));
    },
    [setForm],
  );
  const setSong = useCallback(
    (v: number) => {
      setForm((f) => ({ ...f, song: v }));
    },
    [setForm],
  );
  const setArtist = useCallback(
    (v: number) => {
      setForm((f) => ({ ...f, artist: v }));
    },
    [setForm],
  );

  return (
    <>
      <FullTextSearch setQuery={setQuery} />
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.gridItem}>
          <Type type={form.type} setType={setType} />
        </Grid>
      </Grid>
      <div className={classes.gridItem}>
        <Video video={form.video} setVideo={setVideo} />
      </div>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Song song={form.song} setSong={setSong} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Artist artist={form.artist} setArtist={setArtist} />
        </Grid>
      </Grid>
    </>
  );
};
export default Search;
