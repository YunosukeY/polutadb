import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Main, Footer } from './layout';

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}
