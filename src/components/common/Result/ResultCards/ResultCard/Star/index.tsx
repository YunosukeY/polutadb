import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import type { Singing } from '../../../../../../data/types';
import { useGetArtist } from '../../../../../../data/utils';

type StarProps = {
  singing: Singing;
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

  const getArtist = useGetArtist();
  const title = `『${props.singing.video}』より『${props.singing.song}』 / ${getArtist(props.singing.song)}`;
  const label = `${title}を${props.isFavo ? 'お気に入り解除' : 'お気に入り登録'}`;

  return (
    <IconButton onClick={props.onClick} aria-label={label} size='large'>
      {props.isFavo && <StarIcon className={classes.icon} />}
      {!props.isFavo && <StarBorderIcon className={classes.icon} />}
    </IconButton>
  );
}
