import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { EachSelectProps } from './utils';
import Checkbox from './Checkbox';

export default function Inst(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>伴奏</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Checkbox
            xs={4}
            checked={props.query.withInst}
            onChange={(event: any) => {
              props.query.withInst = event.target.checked;
              props.setLocationSearch(props.query);
            }}
            label='伴奏あり'
          />
          <Checkbox
            xs={8}
            checked={props.query.aCappella}
            onChange={(event: any) => {
              props.query.aCappella = event.target.checked;
              props.setLocationSearch(props.query);
            }}
            label='なし（アカペラ）'
          />
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
