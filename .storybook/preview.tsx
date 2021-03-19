import React from 'react';
import '../styles/globals.css';

import { AppStateProvider } from '../src/lib/AppState';

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
