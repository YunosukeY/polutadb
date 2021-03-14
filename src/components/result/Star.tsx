import * as React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { IconButton } from '@material-ui/core';

export default function Star(props: { isFavo: boolean; onClick: () => void; fontsize: number }) {
  const color = 'gold';

  return (
    <IconButton onClick={props.onClick} style={{ background: 'rgba(0,0,0,0)' }}>
      {props.isFavo && <StarIcon style={{ fontSize: props.fontsize, color: color }} />}
      {!props.isFavo && <StarBorderIcon style={{ fontSize: props.fontsize, color: color }} />}
    </IconButton>
  );
}
