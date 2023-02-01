import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import '../../styles/globals.css';
import Layout from '../components/Layout';
import * as gtag from '../lib/gtag';
import Persistence from '../store/Persistence';
import { AppComponent } from 'next/dist/shared/lib/router/router';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e90ff',
    },
  },
});

const MyApp: AppComponent = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      const handleRouteChange = (url: string) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <Head>
        <title>ぽるうたデータベース｜尾丸ポルカさんの歌を検索！</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <RecoilRoot>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Persistence />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </RecoilRoot>
    </>
  );
};

export default MyApp;
