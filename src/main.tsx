import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import { Header, Main, Footer } from './layout';

function Root() {
  const [page, setPage] = useState('top');

  return (
    <div>
      <Header setPage={setPage} />
      <Main page={page} />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Root />, document.querySelector('#root'));
