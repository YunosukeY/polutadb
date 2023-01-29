import * as React from 'react';
import { useFormContext, useController } from 'react-hook-form';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useOnChange } from '../util';

export default function FullTextSearch() {
  const { control } = useFormContext();
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'query',
    control,
    defaultValue: '',
  });

  const onChange = useOnChange(inputProps.onChange, (q, v) => (q.query = v));

  return (
    <TextField
      inputRef={ref}
      {...inputProps}
      onChange={(e) => onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon style={{ color: '#949494' }} />
          </InputAdornment>
        ),
      }}
      fullWidth
      style={{ paddingTop: 16 }}
      inputProps={{ 'aria-label': 'Full-text search' }}
    />
  );
}
