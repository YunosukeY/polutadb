import React from 'react';

import Displaynum from './Displaynum';

export default {
  title: 'select/Displaynum',
};

export const showDisplaynum = () => {
  return <Displaynum displaynum={10} setDisplaynum={() => {}} />;
};
