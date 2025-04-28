import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
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

const StyledGridItem = styled(Grid)({
  paddingRight: '.75rem',
});

const StyledDiv = styled('div')({
  paddingRight: '.75rem',
});

const Search: React.FC<SearchProps> = ({ form, setForm }) => {
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
        <StyledGridItem item xs={12} sm={12}>
          <Type type={form.type} setType={setType} />
        </StyledGridItem>
      </Grid>
      <StyledDiv>
        <Video video={form.video} setVideo={setVideo} />
      </StyledDiv>
      <Grid container>
        <StyledGridItem item xs={12} sm={6}>
          <Song song={form.song} setSong={setSong} />
        </StyledGridItem>
        <StyledGridItem item xs={12} sm={6}>
          <Artist artist={form.artist} setArtist={setArtist} />
        </StyledGridItem>
      </Grid>
    </>
  );
};
export default Search;
