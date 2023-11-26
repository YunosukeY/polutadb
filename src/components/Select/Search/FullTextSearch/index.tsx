import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useOnChange } from '../util';
import { useDebounce, useMount } from 'react-use';
import { useRouter } from 'next/router';
import { Query } from '../../../../lib/query';

type FullTextSearchProps = {
  setQuery: (v: string) => void;
};

export default function FullTextSearch({ setQuery }: FullTextSearchProps) {
  const onChange = useOnChange(setQuery, (q, v) => (q.query = v));

  const [input, setInput] = React.useState('');
  const qs = new Query(useRouter().query);
  useMount(() => {
    setInput(qs.query);
  });
  useDebounce(() => onChange(input), 300, [input]);

  return (
    <TextField
      variant='standard'
      value={input}
      onChange={(e) => setInput(e.target.value)}
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
