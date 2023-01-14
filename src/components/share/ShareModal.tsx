import React from 'react';
import { TwitterShareButton, TwitterIcon, LineShareButton, LineIcon } from 'react-share';

import { Singing } from '../../data/interfaces';
import { getArtist, getUrl } from '../../data/utils';
import CopyButton from './CopyButton';

interface ShareModalProps {
  singing: Singing;
  fontsize: number;
}
const ShareModal: React.FC<ShareModalProps> = ({ singing, fontsize }) => {
  const padding = 10;
  const buttonSize = fontsize + 2 * 12;

  const url = `https://youtu.be/${getUrl(singing.video)}?t=${singing.start}`;
  const title = `『${singing.video}』より『${singing.song}』 / ${getArtist(singing.song)}`;
  const hashtags = ['ぽるうた', '尾丸ポルカ'];

  return (
    <>
      <TwitterShareButton url={url} title={title} hashtags={hashtags} style={{ height: buttonSize, padding: padding }}>
        <TwitterIcon size={buttonSize - 2 * padding} round />
      </TwitterShareButton>
      <LineShareButton url={url} title={title} style={{ height: buttonSize, padding: padding }}>
        <LineIcon size={buttonSize - 2 * padding} round />
      </LineShareButton>
      <CopyButton target={`${title} ${url}`} iconSize={fontsize} />
    </>
  );
};
export default ShareModal;
