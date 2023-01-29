import * as React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { IconButton } from '@material-ui/core';

import { Singing } from '../../data/types';

export default function Youtube(props: { singing: Singing; fontsize: number; hovered: boolean }) {
  const hoveredColor = '#ff0f1a';

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
        <IconButton aria-label='Play video'>
          <YouTubeIcon style={{ fontSize: props.fontsize, color: props.hovered ? hoveredColor : '#000' }} />
        </IconButton>
      </div>
    </>
  );
}
