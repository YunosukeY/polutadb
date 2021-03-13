import * as React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';

import { getUrl, getArtist, getSong } from '../../data/utils';
import { Singing } from '../../data/singings';

export default function Tweet(props: { singing: Singing; fontsize: number }) {
  const youtubeURL = `https://youtu.be/${getUrl(props.singing.videoId)}?t=${props.singing.start}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${getSong(props.singing.songId)} / ${getArtist(
    props.singing.songId,
  )}&url=${youtubeURL}&hashtags=ぽるうた,尾丸ポルカ`;
  const onClick = () => {
    window.open(encodeURI(decodeURI(tweetURL)));
  };
  return (
    <IconButton onClick={onClick} style={{ background: 'rgba(0,0,0,0)' }}>
      <TwitterIcon style={{ fontSize: props.fontsize, color: 'rgb(0,172,237)' }} />
    </IconButton>
  );
}
