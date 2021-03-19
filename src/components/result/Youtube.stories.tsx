import React from 'react';

import Youtube from './Youtube';
import { Singing } from '../../data/interfaces';

export default {
  title: 'result/Youtube',
};

export const showYoutube = () => {
  const singing = new Singing(0, 0, 0, 0);

  return <Youtube singing={singing} fontsize={24} />;
};
