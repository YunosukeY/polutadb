import React from 'react';
import Head from 'next/head';

import Layout from '../components/Layout';
import '../styles/materialize.min.css';
import '../styles/globals.css';

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
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
