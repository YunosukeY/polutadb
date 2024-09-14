import { Grid } from '@mui/material';
import React from 'react';
import type { FCWithChildren } from '../../../types/react';
import KeyVisual from './KeyVisual';

const Main: FCWithChildren = ({ children }) => {
  return (
    <>
      <KeyVisual />
      <div style={{ padding: 10 }}>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Main;
