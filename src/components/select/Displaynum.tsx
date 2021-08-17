import * as React from 'react';
import { useRecoilState } from 'recoil';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from './Radio';
import { appState } from '../../lib/AppState';

export default function Displaynum(props: { setPagenum: (pagenum: number) => void }) {
  const [state, setState] = useRecoilState(appState);

  const colsize = 3;

  // 表示件数が更新されたら1ページ目に戻す
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({ ...state, displaynum: Number(event.target.value) }));
    props.setPagenum(1);
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>表示件数</FormLabel>
      <RadioGroup value={state.displaynum} onChange={handleChange}>
        <Grid container style={{ padding: 5 }}>
          <Radio value={5} label='5件' xs={colsize} sm={colsize} />
          <Radio value={10} label='10件' xs={colsize} sm={colsize} />
          <Radio value={20} label='20件' xs={colsize} sm={colsize} />
          <Radio value={50} label='50件' xs={colsize} sm={colsize} />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
