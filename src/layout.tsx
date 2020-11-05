import * as React from 'react';
import { Top } from './top';
import { Stats } from './stats'
import { Releases } from './releases';

export function Header(props: { setPage: any }) {
  return (
    <header>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <a className='brand-logo center title' onClick={() => props.setPage('top')}>PolutaDB</a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><a onClick={() => props.setPage('top')}>Top</a></li>
            <li><a onClick={() => props.setPage('stats')}>Stats</a></li>
            <li><a onClick={() => props.setPage('releases')}>Releases</a></li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li><a onClick={() => props.setPage('top')}>Top</a></li>
        <li><a onClick={() => props.setPage('stats')}>Stats</a></li>
        <li><a onClick={() => props.setPage('releases')}>Releases</a></li>
      </ul>
    </header>
  );
}

export function Main(props: { page: string }) {
  return (
    <div className='main'>
      <div className='row'>
        <div className='col s12 m12 l10 offset-l1 xl8 offset-xl2'>
          {props.page == 'top' && <Top />}
          {props.page == 'stats' && <Stats />}
          {props.page == 'releases' && <Releases />}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
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
