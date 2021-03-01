import * as React from 'react';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Main, Footer } from './layout';
import M from 'materialize-css';

export function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* basenameはgithubioでの表示に必要 */}
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
