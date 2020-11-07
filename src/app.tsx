import * as React from 'react';
import { useState } from 'react';
import { Header, Main, Footer } from './layout';

export function App() {
  const [page, setPage] = useState('top');

  return (
    <>
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </>
  );
}
