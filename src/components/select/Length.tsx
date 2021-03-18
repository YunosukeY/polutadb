import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { EachSelectProps } from './utils';

export default function Length(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>尺</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.query.full}
                  onChange={(event) => {
                    props.query.full = event.target.checked;
                    props.setLocationSearch(props.query);
                  }}
                  color='primary'
                />
              }
              label='フル尺'
            />
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.query.onechorus}
                  onChange={(event) => {
                    props.query.onechorus = event.target.checked;
                    props.setLocationSearch(props.query);
                  }}
                  color='primary'
                />
              }
              label='ワンコーラス'
            />
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
