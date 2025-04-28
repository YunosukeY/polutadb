import * as React from 'react';

import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';
import { useTypes } from '../../../../data/utils';
import { useOnChange, StyledFormControl } from '../util';

type TypeProps = {
  type: number;
  setType: (v: number) => void;
};

export default function Type({ type, setType }: TypeProps) {
  const onChangeType = useOnChange(setType, (q, v) => {
    q.type = v;
  });

  const types = useTypes();
  return (
    <StyledFormControl variant='standard'>
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
    </StyledFormControl>
  );
}
