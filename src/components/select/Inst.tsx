import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { EachSelectProps } from './utils';

export default function Inst(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>伴奏</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Grid item xs={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.query.withInst}
                  onChange={(event) => {
                    props.query.withInst = event.target.checked;
                    props.setLocationSearch(props.query);
                  }}
                  color='primary'
                />
              }
              label='伴奏あり'
            />
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.query.aCappella}
                  onChange={(event) => {
                    props.query.aCappella = event.target.checked;
                    props.setLocationSearch(props.query);
                  }}
                  color='primary'
                />
              }
              label='なし（アカペラ）'
            />
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
