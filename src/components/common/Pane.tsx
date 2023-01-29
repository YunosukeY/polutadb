import React from 'react';
import { Paper } from '@material-ui/core';

const Pane: React.FC = ({ children }) => (
  <Paper variant='outlined' style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
    {children}
  </Paper>
);

export default Pane;