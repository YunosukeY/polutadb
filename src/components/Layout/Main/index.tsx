import { Grid } from '@mui/material';
import React from 'react';
import { FCWithChildren } from '../../../types/react';
import KeyVisual from './KeyVisual';

const Main: FCWithChildren = ({ children }) => {
  return (
    <div id='main'>
      <KeyVisual />
      <div style={{ padding: 10 }}>
        <Grid container justifyContent='center'>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Main;
