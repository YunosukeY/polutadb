import React from 'react';
import { useState } from 'react';

import FavoSelect from './FavoSelect';

export default {
  title: 'favos/FavoSelect',
};

export const showFavoSelect = () => {
  const [pagenum, setPagenum] = useState(1);

  return <FavoSelect setPagenum={setPagenum} />;
};
