import * as React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import Footer from './Footer';
import KeyVisual from './KeyVisual';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

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
