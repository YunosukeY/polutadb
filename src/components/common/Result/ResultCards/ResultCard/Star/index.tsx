import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton, styled } from '@mui/material';
import * as React from 'react';
import type { Singing } from '../../../../../../data/types';
import { useGetArtist } from '../../../../../../data/utils';

type StarProps = {
  singing: Singing;
  isFavo: boolean;
  onClick: () => void;
  fontsize: number;
};

const StyledStarIcon = styled(StarIcon)<{ fontsize: number }>(({ fontsize }) => ({
  fontSize: fontsize,
  color: 'gold',
}));

const StyledStarBorderIcon = styled(StarBorderIcon)<{ fontsize: number }>(({ fontsize }) => ({
  fontSize: fontsize,
  color: 'gold',
}));

export default function Star(props: StarProps) {
  const getArtist = useGetArtist();
  const title = `『${props.singing.video}』より『${props.singing.song}』 / ${getArtist(props.singing.song)}`;
  const label = `${title}を${props.isFavo ? 'お気に入り解除' : 'お気に入り登録'}`;

  return (
    <IconButton onClick={props.onClick} aria-label={label} size='large'>
      {props.isFavo && <StyledStarIcon fontsize={props.fontsize} />}
      {!props.isFavo && <StyledStarBorderIcon fontsize={props.fontsize} />}
    </IconButton>
  );
}
