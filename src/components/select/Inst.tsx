import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { EachSelectProps } from './utils';
import Checkbox from './Checkbox';

function WithInst(props: EachSelectProps) {
  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'withInst',
    control,
  });
  const onChangeWithInst = (event: any) => {
    props.query.withInst = event.target.checked;
    props.setLocationSearch(props.query);
    onChange(event);
  };

  return (
    <Checkbox xs={4} checked={props.query.withInst} label='伴奏あり' onChange={onChangeWithInst} {...inputProps} />
  );
}

function ACappella(props: EachSelectProps) {
  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'aCappella',
    control,
  });
  const onChangeACappella = (event: any) => {
    props.query.aCappella = event.target.checked;
    props.setLocationSearch(props.query);
    onChange(event);
  };

  return (
    <Checkbox
      xs={8}
      checked={props.query.aCappella}
      label='なし（アカペラ）'
      onChange={onChangeACappella}
      {...inputProps}
    />
  );
}

export default function Inst(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>伴奏</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <WithInst {...props} />
          <ACappella {...props} />
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
