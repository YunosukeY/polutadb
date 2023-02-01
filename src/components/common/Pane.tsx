import React from 'react';
import { Paper } from '@mui/material';
import { FCWithChildren } from '../../types/react';

const Pane: FCWithChildren = ({ children }) => (
  <Paper variant='outlined' style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
    {children}
  </Paper>
);

export default Pane;
