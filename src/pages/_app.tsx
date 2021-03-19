import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../../styles/background.css';
import '../../styles/globals.css';
const Layout = dynamic(() => import('../components/layout/Layout'), { ssr: false });
const AppStateProvider = dynamic<{ children: React.ReactNode }>(
  () => import('../lib/AppState').then((modules) => modules.AppStateProvider),
  { ssr: false },
);
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
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
      <AppStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppStateProvider>
    </>
  );
}

export default MyApp;
