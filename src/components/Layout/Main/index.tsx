import { Grid } from '@material-ui/core';
import React from 'react';
import KeyVisual from './KeyVisual';

const Main: React.FC = ({ children }) => {
  return (
    <div id='main'>
      <KeyVisual />
      <div style={{ padding: 10 }}>
        <Grid container justify='center'>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Main;
