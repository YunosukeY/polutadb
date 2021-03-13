import * as React from 'react';
import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { EachSelectProps } from './utils';

export default function FullTextSearch(props: EachSelectProps) {
  // textをqueryで初期化
  const [text, setText] = useState(props.query.query);

  function onKeyDown(e: any) {
    if (e.key === 'Enter' && e.keyCode === 13) {
      props.query.query = text;
      props.setLocationSearch(props.query);
    }
  }

  return (
    <div className='input-field'>
      <SearchIcon color='action' className='material-icons prefix' style={{ fontSize: 28 }} />{' '}
      {/* queryにtextをセット */}
      <input
        id='icon_prefix'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <label htmlFor='icon_prefix'>全文検索</label>
    </div>
  );
}
