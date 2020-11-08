import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Main, Footer } from './layout';

export function App() {
  return (
    < BrowserRouter basename={process.env.PUBLIC_URL} > {/* basenameはgithubioでの表示に必要 */}
      <Header />
      <Main />
      <Footer />
    </BrowserRouter >
  );
}
