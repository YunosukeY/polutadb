import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function FullTextSearch() {
  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'query',
    control,
  });

  return (
    <TextField
      label='全文検索'
      inputRef={ref}
      {...inputProps}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon style={{ color: '#949494' }} />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
}
