import React from 'react';

import Tweet from './Tweet';
import { Singing } from '../../data/interfaces';

export default {
  title: 'result/Tweet',
};

export const showTweet = () => {
  const singing = new Singing(0, 0, 0, 0);

  return <Tweet singing={singing} fontsize={24} />;
};
