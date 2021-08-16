import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import { EachSelectProps } from './utils';
import Checkbox from './Checkbox';

function Full(props: EachSelectProps) {
  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'full',
    control,
  });
  const onChangeFull = (event: any) => {
    props.query.full = event.target.checked;
    props.setLocationSearch(props.query);
    onChange(event);
  };

  return <Checkbox xs={4} checked={props.query.full} label='フル尺' onChange={onChangeFull} {...inputProps} />;
}

function Onechorus(props: EachSelectProps) {
  const { control } = useFormContext();
  const {
    field: { onChange, ...inputProps },
  } = useController({
    name: 'onechorus',
    control,
  });
  const onChangeOnechorus = (event: any) => {
    props.query.onechorus = event.target.checked;
    props.setLocationSearch(props.query);
    onChange(event);
  };

  return (
    <Checkbox
      xs={8}
      checked={props.query.onechorus}
      label='ワンコーラス'
      onChange={onChangeOnechorus}
      {...inputProps}
    />
  );
}

export default function Length(props: EachSelectProps) {
  return (
    <FormControl style={{ width: '100%' }}>
      <FormLabel>尺</FormLabel>
      <FormGroup>
        <Grid container style={{ padding: 5 }}>
          <Full {...props} />
          <Onechorus {...props} />
        </Grid>
      </FormGroup>
    </FormControl>
  );
}
