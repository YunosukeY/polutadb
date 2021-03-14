import * as React from 'react';
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { IconButton } from '@material-ui/core';

import { getUrl, getVideo } from '../../data/utils';
import { Singing } from '../../data/interfaces';

export default function Youtube(props: { singing: Singing; fontsize: number }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div
      id='simple-iframe-parent'
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <iframe
        id='simple-iframe'
        width='1120'
        height='630'
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
  const color = '#ff0f1a';

  return (
    <>
      <IconButton onClick={handleOpen} style={{ background: 'rgba(0,0,0,0)' }}>
        <YouTubeIcon style={{ fontSize: props.fontsize, color: color }} />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </>
  );
}
