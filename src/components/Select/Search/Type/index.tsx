import * as React from 'react';
import FormControl from '@mui/material/FormControl';

import { useOnChange, useStyles } from '../util';
import { useTypes } from '../../../../data/utils';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

type TypeProps = {
  type: number;
  setType: (v: number) => void;
};

export default function Type({ type, setType }: TypeProps) {
  const classes = useStyles();

  const onChangeType = useOnChange(setType, (q, v) => {
    q.type = v;
  });

  const types = useTypes();
  return (
    <FormControl variant='standard' className={classes.formControl}>
      <Autocomplete
        options={types}
        onChange={(e, v) => {
          onChangeType(v == null ? -1 : v.i);
        }}
        value={type === -1 ? { name: '', i: -1 } : types.find((v) => v.i === type)}
        isOptionEqualToValue={(option) => option.i == type}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField variant='standard' {...params} label='動画のタイプ' />}
      />
    </FormControl>
  );
}
