import * as React from 'react';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function KeyVisual() {
  const classes = useStyles();

  return (
    <Alert severity='warning' className={classes.root}>
      このサイトの更新は終了しました
    </Alert>
  );
}
