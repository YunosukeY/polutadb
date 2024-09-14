import Pagination from '@mui/material/Pagination';
import type * as React from 'react';

export default function Pagenation(props: { pagenum: number; setPagenum: (p: number) => void; lastPageNum: number }) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setPagenum(Number(value));
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: 40, paddingBottom: 40 }}>
      <Pagination
        count={props.lastPageNum}
        page={props.pagenum}
        onChange={handleChange}
        color='primary'
        shape='rounded'
        hidePrevButton
        hideNextButton
        style={{ display: 'inline-block' }}
        size='large'
      />
    </div>
  );
}
