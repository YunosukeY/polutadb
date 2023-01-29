import path from 'path';
import base from 'paths.macro';
import React from 'react';

import FavoCount from '.';

export default {
  title: path.relative('/src', base),
};

export const tenFavos = () => {
  return <FavoCount favonum={10} />;
};

export const zeroFavos = () => {
  return <FavoCount favonum={0} />;
};

export const oneFavo = () => {
  return <FavoCount favonum={1} />;
};
