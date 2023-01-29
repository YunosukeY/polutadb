import React from 'react';
import path from 'path';
import base from 'paths.macro';
import ArtistStats from '.';

export default {
  title: path.relative('/src', base),
};

export const showArtistStats = () => <ArtistStats />;
