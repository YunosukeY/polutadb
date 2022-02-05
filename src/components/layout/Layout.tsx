import * as React from 'react';
import dynamic from 'next/dynamic';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import KeyVisual from './KeyVisual';

function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const DynamicLayout = dynamic(
  {
    loader: async () => Layout,
  },
  { ssr: false },
);
export default DynamicLayout;

function Main({ children }: { children: any }) {
  return (
    <div id='main'>
      <KeyVisual />
      <div style={{ padding: 10 }}>
        <Grid container justify='center'>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
