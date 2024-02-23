import * as React from 'react';
import dynamic from 'next/dynamic';

import Header from './Header';
import Main from './Main';

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
    // eslint-disable-next-line @typescript-eslint/require-await
    loader: async () => Layout,
  },
  { ssr: false },
);
export default DynamicLayout;
