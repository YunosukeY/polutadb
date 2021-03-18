import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Radio from './Radio';

export default function Sort(props: { sortedBy: number; setSortedBy: (sortedBy: number) => void }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSortedBy(Number((event.target as HTMLInputElement).value));
  };

  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>ソート</FormLabel>
      <RadioGroup value={props.sortedBy} onChange={handleChange}>
        <Grid container style={{ padding: 5 }}>
          <Radio value={0} label='時系列順' xs={4} sm={2} />
          <Radio value={1} label='曲名順' xs={3} sm={2} />
          <Radio value={2} label='アーティスト名順' xs={5} sm={8} />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
