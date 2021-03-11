import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap' />
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='og:url' content='https://www.polutadb.com/' />
          <meta property='og:title' content='ぽるうたデータベース｜尾丸ポルカさんの歌を検索！' />
          <meta
            property='og:description'
            content='ホロライブ所属のVTuber 尾丸ポルカさんの歌（通称：ぽるうた）が検索できます'
          />
          <meta property='og:image' content='https://www.polutadb.com/card.png' />
          <meta
            name='Description'
            content='ホロライブ所属のVTuber 尾丸ポルカさんの歌（通称：ぽるうた）が検索できます'
          />
          <link rel='icon' href='%PUBLIC_URL%/tent-b92731.png' />
          <meta name='theme-color' content='#F1646A' />
          <link rel='apple-touch-icon' href='%PUBLIC_URL%/tent-f1646a.png' />
          <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
