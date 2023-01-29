import * as React from 'react';
import { useRecoilState } from 'recoil';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from '../Search/util/Radio';
import { appState } from '../../../store/state';

export default function Sort() {
  const [state, setState] = useRecoilState(appState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, sortedBy: Number(event.target.value) }));
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>ソート</FormLabel>
      <RadioGroup value={state.sortedBy} onChange={handleChange}>
        <Grid container style={{ padding: 5 }}>
          <Radio value={0} label='時系列順' xs={4} sm={2} />
          <Radio value={1} label='曲名順' xs={3} sm={2} />
          <Radio value={2} label='アーティスト名順' xs={5} sm={8} />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
