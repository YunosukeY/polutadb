import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from './Radio';

export default function Displaynum(props: { displaynum: number; setDisplaynum: (displaynum: number) => void }) {
  const colsize = 3;
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setDisplaynum(Number((event.target as HTMLInputElement).value));
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>表示件数</FormLabel>
      <RadioGroup value={props.displaynum} onChange={handleChange}>
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