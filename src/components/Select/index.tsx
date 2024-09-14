import { Grid } from '@mui/material';
import type * as React from 'react';
import { useWindowSize } from 'react-use';

import type { Form } from '../../pages';
import Search from './Search';
import Sort from './Sort';

type SelectProps = {
  form: Form;
  setForm: React.Dispatch<React.SetStateAction<Form>>;
};

export default function Select({ form, setForm }: SelectProps) {
  const width = Math.min(useWindowSize().width - 100, 1000);

  return (
    <Grid container justifyContent='center'>
      <Grid item style={{ width: width }}>
        <Search form={form} setForm={setForm} />
        <Sort />
      </Grid>
    </Grid>
  );
}
