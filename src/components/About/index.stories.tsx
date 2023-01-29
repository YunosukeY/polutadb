import path from 'path';
import React from 'react';
import base from 'paths.macro';
import About from '.';

export default {
  title: path.relative('/src', base),
};

export const showAbout = () => <About />;
