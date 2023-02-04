import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

type StarProps = {
  isFavo: boolean;
  onClick: () => void;
  fontsize: number;
};

const useStyles = makeStyles({
  icon: {
    fontSize: (props: StarProps) => props.fontsize,
    color: 'gold',
  },
});

export default function Star(props: StarProps) {
  const classes = useStyles(props);

  return (
    <IconButton onClick={props.onClick} aria-label='Favorite' size='large'>
      {props.isFavo && <StarIcon className={classes.icon} />}
      {!props.isFavo && <StarBorderIcon className={classes.icon} />}
    </IconButton>
  );
}
