import React from 'react';
import path from 'path';
import base from 'paths.macro';
import SongStats from '.';

export default {
  title: path.relative('/src', base),
};

export const showSongStats = () => <SongStats />;
