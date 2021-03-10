import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './css/materialize.min.css';
import './css/index.css';
import App from './app/app';

ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* basenameはgithubioでの表示に必要 */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
