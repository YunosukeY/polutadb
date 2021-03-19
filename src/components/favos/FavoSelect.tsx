import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';
import { useAppState, useSetAppState } from '../../lib/AppState';

export default function FavoSelect(props: { setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  const appState = useAppState();
  const setAppState = useSetAppState();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Displaynum
          displaynum={appState.displaynum}
          setDisplaynum={(displaynum: number) => {
            setAppState((state) => ({ ...state, displaynum: displaynum }));
            props.setPagenum(1);
          }}
        />
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
  );
}
