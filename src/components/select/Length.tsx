import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { EachSelectProps } from './utils';
import Checkbox from './Checkbox';

export default function Length(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>尺</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Checkbox
            xs={4}
            checked={props.query.full}
            onChange={(event: any) => {
              props.query.full = event.target.checked;
              props.setLocationSearch(props.query);
            }}
            label='フル尺'
          />
          <Checkbox
            xs={8}
            checked={props.query.onechorus}
            onChange={(event: any) => {
              props.query.onechorus = event.target.checked;
              props.setLocationSearch(props.query);
            }}
            label='ワンコーラス'
          />
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
