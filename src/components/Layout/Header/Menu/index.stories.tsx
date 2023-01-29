import path from 'path';
import base from 'paths.macro';
import React from 'react';

import Menu from '.';

export default {
  title: path.relative('/src', base),
};

export const showMenu = () => <Menu />;
