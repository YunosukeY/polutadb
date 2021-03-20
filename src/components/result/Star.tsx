import * as React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

interface StarProps {
  isFavo: boolean;
  onClick: () => void;
  fontsize: number;
}

const useStyles = makeStyles({
  icon: {
    fontSize: (props: StarProps) => props.fontsize,
    color: 'gold',
  },
});

export default function Star(props: StarProps) {
  const classes = useStyles(props);

  return (
    <IconButton onClick={props.onClick}>
      {props.isFavo && <StarIcon className={classes.icon} />}
      {!props.isFavo && <StarBorderIcon className={classes.icon} />}
    </IconButton>
  );
}
