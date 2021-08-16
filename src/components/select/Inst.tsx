import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import Checkbox from './Checkbox';

function WithInst() {
  const { control } = useFormContext();
  const {
    field: { value, ...inputProps },
  } = useController({
    name: 'withInst',
    control,
  });

  return <Checkbox xs={4} checked={value} label='伴奏あり' {...inputProps} />;
}

function ACappella() {
  const { control } = useFormContext();
  const {
    field: { value, ...inputProps },
  } = useController({
    name: 'aCappella',
    control,
  });

  return <Checkbox xs={8} checked={value} label='なし（アカペラ）' {...inputProps} />;
}

export default function Inst() {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>伴奏</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <WithInst />
          <ACappella />
          {/* <Checkbox
            xs={4}
            checked={props.query.performance}
            onChange={(event: any) => {
              props.query.performance = event.target.checked;
              props.setLocationSearch(props.query);
            }}
            label='演奏'
          /> */}
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
