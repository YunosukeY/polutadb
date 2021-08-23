import * as React from 'react';
import { useRecoilState } from 'recoil';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from './Radio';
import { appState } from '../../lib/AppState';

export default function DisplayFormat() {
  const [state, setState] = useRecoilState(appState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, displayMode: Number(event.target.value) }));
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>表示形式</FormLabel>
      <RadioGroup value={state.displayMode} onChange={handleChange}>
        <Grid container style={{ padding: 5 }}>
          <Radio value={0} label='通常表示' xs={4} sm={4} />
          <Radio value={1} label='簡易表示' xs={4} sm={4} />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
