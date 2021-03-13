import React from 'react';

import { AppStateProvider } from '../lib/AppState';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <AppStateProvider>
      <Story />
    </AppStateProvider>
  ),
];
