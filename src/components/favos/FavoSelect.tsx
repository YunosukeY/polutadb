import * as React from 'react';
import { useRecoilState } from 'recoil';
import Grid from '@material-ui/core/Grid';

import DisplayFormat from '../select/DisplayFormat';
import Displaynum from '../select/Displaynum';
import { appState } from '../../lib/AppState';

export default function FavoSelect(props: { setPagenum: React.Dispatch<React.SetStateAction<number>> }) {
  const [state, setState] = useRecoilState(appState);

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Displaynum
          displaynum={state.displaynum}
          setDisplaynum={(displaynum: number) => {
            setState((state) => ({ ...state, displaynum: displaynum }));
            props.setPagenum(1);
          }}
        />
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
  );
}
