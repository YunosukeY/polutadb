import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/materialize.min.css';
import './css/index.css';
import App from './app/app';
import { ScrollToTop } from './app/components/scroll';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* basenameはgithubioでの表示に必要 */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
