import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import RadioGroup from '@mui/material/RadioGroup';
import type * as React from 'react';
import { useRecoilState } from 'recoil';

import { sortAtom } from '../../../store/sortAtom';
import Radio from '../Search/util/Radio';

export default function Sort() {
  const [sort, setSort] = useRecoilState(sortAtom);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(Number(event.target.value));
  };

  return (
    <FormControl variant='standard' style={{ width: '100%' }}>
      <FormLabel>ソート</FormLabel>
      <RadioGroup value={sort} onChange={handleChange}>
        <Grid container style={{ padding: 5 }}>
          <Radio value={0} label='時系列順' xs={4} sm={2} />
          <Radio value={1} label='曲名順' xs={3} sm={2} />
          <Radio value={2} label='アーティスト名順' xs={5} sm={8} />
        </Grid>
      </RadioGroup>
    </FormControl>
  );
}
