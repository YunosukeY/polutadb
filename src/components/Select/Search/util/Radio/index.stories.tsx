import React from 'react';
import path from 'path';
import base from 'paths.macro';
import Radio from '.';

export default {
  title: path.relative('/src', base),
};

export const showRadio = () => {
  return <Radio value={5} label='5件' xs={1} sm={1} />;
};
