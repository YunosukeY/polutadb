import * as React from 'react';
import { useHover, useWindowSize } from 'react-use';

import YouTube from '@mui/icons-material/YouTube';
import { Singing } from '../../../data/types';
import { useUrl, parseTime } from '../../../data/utils';
import { Modal } from '@mui/material';
import { useWidth } from '../../../lib/useWidth';
import { useBool } from '../../../lib/useBool';

const centering: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

export default function Thumbnail(props: { id: string; singing: Singing }) {
  const [open, handleOpen, handleClose] = useBool(false);

  return (
    <>
      <Img id={props.id} title={props.singing.video} onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <Window singing={props.singing} />
      </Modal>
    </>
  );
}

type ImgProps = {
  id: string;
  title: string;
  onClick: () => void;
};
const Img: React.FC<ImgProps> = ({ id, title, onClick }) => {
  const Dummy = () => (
    <div onClick={onClick} style={{ width: '100%', height: '100%', position: 'absolute', top: '0%' }} />
  );
  const [hoverable, hovered] = useHover(Dummy);

  return (
    <div style={{ position: 'relative' }}>
      <img
        src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        style={{ width: '100%' }}
        alt={`${title}のサムネイル`}
      />
      <div
        style={{
          ...centering,
          width: 30,
          height: 30,
          backgroundColor: 'white',
        }}
      />
      <YouTube
        style={{
          ...centering,
          fontSize: 70,
          color: hovered ? '#ff0f1a' : '#000',
        }}
      />
      {hoverable}
    </div>
  );
};

type WindowProps = { singing: Singing };
// eslint-disable-next-line react/display-name
const Window = React.forwardRef<HTMLDivElement, WindowProps>((props, ref) => {
  const size = useWidth();
  const isFull = size === 'xs' || size === 'sm' || size === 'md';

  const { width } = useWindowSize();

  const iframeWidth = isFull ? width : width * 0.7;
  const iframeHeight = (iframeWidth * 9) / 16;

  return (
    <div style={centering} ref={ref}>
      <iframe
        width={iframeWidth}
        height={iframeHeight}
        src={`https://www.youtube-nocookie.com/embed/${useUrl(props.singing.video)}?start=${parseTime(
          props.singing.start,
        )}&autoplay=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title={props.singing.video}
      />
    </div>
  );
});
