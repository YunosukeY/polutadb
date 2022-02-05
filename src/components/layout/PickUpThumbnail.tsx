import * as React from 'react';
import { useHover, useWindowSize } from 'react-use';

import Youtube from '../result/Youtube';
import { Singing } from '../../data/interfaces';
import { getUrl, getVideo } from '../../data/utils';
import { Modal } from '@material-ui/core';
import { useState } from 'react';
import { useWidth } from '../../lib/useWidth';

export default function PickUpThumbnail(props: { id: string; singing: Singing }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const Dummy = () => (
    <div onClick={handleOpen} style={{ width: '100%', height: '100%', position: 'absolute', top: '0%' }} />
  );
  const [hoverable, hovered] = useHover(Dummy);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div style={{ backgroundColor: '#000000' }}>
          <img
            src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
            style={{ width: '100%' }}
            alt={getVideo(props.singing.videoId)}
          />
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <Youtube singing={props.singing} fontsize={70} hovered={hovered} />
        </div>
        {hoverable}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Window singing={props.singing} />
      </Modal>
    </>
  );
}

function Window(props: { singing: Singing }) {
  const size = useWidth();
  const isFull = size === 'xs' || size === 'sm' || size === 'md';

  const { width } = useWindowSize();

  const iframeWidth = isFull ? width : width * 0.7;
  const iframeHeight = (iframeWidth * 9) / 16;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <iframe
        width={iframeWidth}
        height={iframeHeight}
        src={`https://www.youtube-nocookie.com/embed/${getUrl(props.singing.videoId)}?start=${
          props.singing.start
        }&autoplay=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title={getVideo(props.singing.videoId)}
      />
    </div>
  );
}
