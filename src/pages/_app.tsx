import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import { StyledEngineProvider, type Theme, ThemeProvider, createTheme } from '@mui/material';
import type { AppComponent } from 'next/dist/shared/lib/router/router';
import Layout from '../components/Layout';
import * as gtag from '../lib/gtag';
import Persistence from '../store/Persistence';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e90ff',
    },
    secondary: {
      main: '#ef5350',
    },
  },
  typography: (palette) => ({
    fontFamily: 'Helvetica Neue, Arial, Hiragino Kaku Gothic ProN, Hiragino Sans, Meiryo, sans-serif !important',
    h4: {
      fontSize: '2.28rem',
      color: palette.primary.main,
      fontFamily: 'Comfortaa',
      marginTop: '0px',
      marginBottom: '0.912rem',
    },
    h5: {
      fontSize: '1.64rem',
      margin: '1.0933333333rem 0 0.656rem',
      color: palette.primary.main,
    },
    h6: {
      fontSize: '1.15rem',
      margin: '0.7666666667rem 0 0.46rem',
    },
  }),
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
