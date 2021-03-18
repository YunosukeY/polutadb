import * as React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function Pagenation(props: { pagenum: number; setPagenum: (p: number) => void; lastPageNum: number }) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    props.setPagenum(Number(value));
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: 10 }}>
      <Pagination
        count={props.lastPageNum}
        page={props.pagenum}
        onChange={handleChange}
        color='primary'
        shape='rounded'
        hidePrevButton
        hideNextButton
        style={{ backgroundColor: 'white', display: 'inline-block' }}
      />
    </div>
  );
}
