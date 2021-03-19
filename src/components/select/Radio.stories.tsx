import React from 'react';

import Radio from './Radio';

export default {
  title: 'select/Radio',
};

export const showRadio = () => {
  return <Radio value={5} label='5件' xs={1} sm={1} />;
};
