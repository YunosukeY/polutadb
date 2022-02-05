import React from 'react';
import { Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

export const Chartdiv = styled('div')({
  width: '100%',
  height: '600px',
});

export const Pane: React.FC = ({ children }) => (
  <Paper variant='outlined' style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
    {children}
  </Paper>
);
