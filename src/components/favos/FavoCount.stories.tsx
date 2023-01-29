import React from 'react';

import FavoCount from './FavoCount';

export default {
  title: 'favos/FavoCount',
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
