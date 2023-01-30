import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export type FCWithChildren<P = {}> = React.FC<React.PropsWithChildren<P>>;
