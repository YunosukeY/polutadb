import * as React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className='nav-wrapper'>
            <a href='index.html' className='brand-logo center title'>PolutaDB</a>
            <ul id='nav-mobile' className='right'>
              <li><a href='index.html'>Top</a></li>
              <li><a id='stats'>Stats</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col s12' id='links'>
              <h5 className='white-text'>Links</h5>
              <ul>
                <li><a className='grey-text text-lighten-3' href='https://github.com/YunosukeY/poluta-db'>Source Code</a></li>
                <li><a className='grey-text text-lighten-3' href='https://twitter.com/k1m1tsu'>Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container center'>
            © 2020 ぽるうたデータベース
          </div>
        </div>
      </footer>
    );
  }
}