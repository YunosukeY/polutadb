import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import '../styles/materialize.min.css';
import '../styles/globals.css';
const Layout = dynamic(() => import('../components/pane/Layout'), { ssr: false });
import * as gtag from '../lib/gtag';

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>ぽるうたデータベース｜尾丸ポルカさんの歌を検索！</title>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
