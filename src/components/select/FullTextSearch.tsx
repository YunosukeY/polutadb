import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { EachSelectProps } from './utils';

export default function FullTextSearch(props: EachSelectProps) {
  // textをqueryで初期化
  const [text, setText] = useState(props.query.query);

  function onKeyDown(e: any) {
    if (e.key === 'Enter' && e.keyCode === 13) {
      props.query.query = text;
      props.setLocationSearch(props.query);
    }
  }

  return (
    <>
      <Grid container spacing={1} alignItems='flex-end'>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <TextField label='全文検索' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={onKeyDown} />
        </Grid>
      </Grid>
    </>
  );
}
