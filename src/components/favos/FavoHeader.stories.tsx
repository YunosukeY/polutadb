import React from 'react';

import FavoHeader from './FavoHeader';

export default {
  title: 'favos/FavoHeader',
};

export const tenFavos = () => {
  return <FavoHeader favonum={10} />;
};

export const zeroFavos = () => {
  return <FavoHeader favonum={0} />;
};

export const oneFavo = () => {
  return <FavoHeader favonum={1} />;
};
