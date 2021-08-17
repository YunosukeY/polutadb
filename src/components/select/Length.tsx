import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from './Checkbox';

function Full() {
  const { control } = useFormContext();
  const {
    field: { value, ...inputProps },
  } = useController({
    name: 'full',
    control,
    defaultValue: true,
  });

  return <Checkbox xs={4} checked={value} label='フル尺' {...inputProps} />;
}

function Onechorus() {
  const { control } = useFormContext();
  const {
    field: { value, ...inputProps },
  } = useController({
    name: 'onechorus',
    control,
    defaultValue: true,
  });

  return <Checkbox xs={8} checked={value} label='ワンコーラス' {...inputProps} />;
}

export default function Length() {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>尺</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Full />
          <Onechorus />
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
