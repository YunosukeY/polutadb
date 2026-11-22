import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useDebounce } from 'react-use';
import { Query } from '../../../../lib/query';
import { useRouterReady } from '../../../../lib/useRouterReady';
import { useOnChange } from '../util';

type FullTextSearchProps = {
  setQuery: (v: string) => void;
};

export default function FullTextSearch({ setQuery }: FullTextSearchProps) {
  const onChange = useOnChange(setQuery, (q, v) => {
    q.query = v;
  });

  const [input, setInput] = React.useState('');
  useRouterReady((query) => {
    setInput(new Query(query).query);
  });
  // 利用者が入力したときだけURLに反映する。
  // マウント時の空の入力や、URLから復元した入力で反映すると、操作していないのにURLが書き換わる
  const edited = React.useRef(false);
  useDebounce(
    () => {
      if (!edited.current) return;
      edited.current = false;
      onChange(input);
    },
    300,
    [input],
  );

  return (
    <TextField
      variant='standard'
      value={input}
      onChange={(e) => {
        edited.current = true;
        setInput(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon style={{ color: '#949494' }} />
          </InputAdornment>
        ),
      }}
      fullWidth
      style={{ paddingTop: 16 }}
      // eslint-disable-next-line @typescript-eslint/naming-convention
      inputProps={{ 'aria-label': '全文検索' }}
    />
  );
}
