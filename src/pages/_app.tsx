import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';

import '../../styles/globals.css';
import Layout from '../components/layout/Layout';
import * as gtag from '../lib/gtag';
import Persistence from '../store/Persistence';

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
      <RecoilRoot>
        <Persistence />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
