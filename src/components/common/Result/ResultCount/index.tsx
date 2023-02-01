import { Typography } from '@mui/material';
import * as React from 'react';

export default function ResultCount(props: { resultnum: number }) {
  return (
    <div>
      <Typography variant='h4' style={{ display: 'inline', color: '#ef5350' }}>{`${props.resultnum} `}</Typography>
      <Typography variant='h4' style={{ display: 'inline' }}>
        Result{props.resultnum === 1 ? '' : 's'}
      </Typography>
    </div>
  );
}
