import React from 'react';
import '../styles/globals.css';

import { RecoilRoot } from 'recoil';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];
