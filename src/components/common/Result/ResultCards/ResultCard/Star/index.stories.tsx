import path from 'path';
import base from 'paths.macro';
import React from 'react';

import Star from '.';

export default {
  title: path.relative('/src', base),
};

export const favo = () => {
  return <Star isFavo={true} onClick={() => {}} fontsize={24} />;
};

export const unfavo = () => {
  return <Star isFavo={false} onClick={() => {}} fontsize={24} />;
};
