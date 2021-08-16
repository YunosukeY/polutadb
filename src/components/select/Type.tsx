import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { EachSelectProps, useStyles } from './utils';
import { getTypes } from '../../data/utils';

export default function Type(props: EachSelectProps) {
  const classes = useStyles();

  const { control } = useFormContext();
  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name: 'type',
    control,
  });
  const onChangeType = (event: any) => {
    props.query.type = Number(event.target.value);
    props.setLocationSearch(props.query);
    onChange(event);
  };

  const types = getTypes().map((type) => (
    <MenuItem value={type.i} key={type.i}>
      {type.name}
    </MenuItem>
  ));
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>動画のタイプを選択</InputLabel>
      <Select
        onChange={onChangeType}
        inputRef={ref}
        {...inputProps}
        value={props.query.type === -1 ? '' : props.query.type}
      >
        <MenuItem value={-1}>-</MenuItem>
        {types}
      </Select>
    </FormControl>
  );
}
