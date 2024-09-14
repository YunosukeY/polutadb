import type React from 'react';
import { LineIcon, LineShareButton, TwitterShareButton, XIcon } from 'react-share';

import type { Singing } from '../../../../../../data/types';
import { parseTime, useGetArtist, useUrl } from '../../../../../../data/utils';
import CopyButton from './CopyButton';

type ShareButtonsProps = {
  singing: Singing;
  fontsize: number;
};
const ShareButtons: React.FC<ShareButtonsProps> = ({ singing, fontsize }) => {
  const padding = 10;
  const buttonSize = fontsize + 2 * 12;

  const getArtist = useGetArtist();
  const url = `https://youtu.be/${useUrl(singing.video)}?t=${parseTime(singing.start)}`;
  const title = `『${singing.video}』より『${singing.song}』 / ${getArtist(singing.song)}`;
  const hashtags = ['ぽるうた', '尾丸ポルカ'];

  return (
    <>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={hashtags}
        style={{ height: buttonSize, padding: padding }}
        aria-label={`${title}をXでシェア`}
      >
        <XIcon size={buttonSize - 2 * padding} round />
      </TwitterShareButton>
      <LineShareButton
        url={url}
        title={title}
        style={{ height: buttonSize, padding: padding }}
        aria-label={`${title}をLINEでシェア`}
      >
        <LineIcon size={buttonSize - 2 * padding} round />
      </LineShareButton>
      <CopyButton title={title} url={url} iconSize={fontsize} />
    </>
  );
};
export default ShareButtons;
