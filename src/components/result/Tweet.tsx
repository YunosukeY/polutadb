import * as React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';

import { getUrl, getArtist } from '../../data/utils';
import { Singing } from '../../data/interfaces';

export default function Tweet(props: { singing: Singing; fontsize: number }) {
  const youtubeURL = `https://youtu.be/${getUrl(props.singing.video)}?t=${props.singing.start}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${props.singing.song}/${getArtist(
    props.singing.song,
  )}&url=${youtubeURL}&hashtags=ぽるうた,尾丸ポルカ`;
  const onClick = () => {
    window.open(encodeURI(decodeURI(tweetURL)));
  };
  return (
    <IconButton onClick={onClick}>
      <TwitterIcon style={{ fontSize: props.fontsize, color: 'rgb(0,172,237)' }} />
    </IconButton>
  );
}
