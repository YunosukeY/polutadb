import { Typography } from '@mui/material';
import * as React from 'react';

export default function FavoCount(props: { favonum: number }) {
  return (
    <div>
      <Typography variant='h4' style={{ display: 'inline', color: '#ef5350' }}>{`${props.favonum} `}</Typography>
      <Typography variant='h4' style={{ display: 'inline' }}>
        Favorite{props.favonum === 1 ? '' : 's'}
      </Typography>
    </div>
  );
}
