import * as React from 'react';
import { Suspense, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
const Top = lazy(() => import('./top'));
const Stats = lazy(() => import('./stats'));
const Releases = lazy(() => import('./releases'));

export function Header() {
  return (
    <header>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center title'>PolutaDB</Link>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'><Box pt={1}><MenuIcon style={{ fontSize: 24 }} /></Box></a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><Link to='/'>Top</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li><Link to='/releases'>Releases</Link></li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/stats'>Stats</Link></li>
        <li><Link to='/releases'>Releases</Link></li>
      </ul>
    </header>
  );
}

export function Main() {
  return (
    <div id='main'>
      <div className='row'>
        <div className='col s12 m12 l10 offset-l1 xl8 offset-xl2'>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' render={(props) =>
                <Top
                  rowqs={props.location.search}
                />
              } />
              <Route path='/stats' component={Stats} />
              <Route path='/releases' component={Releases} />
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className='pane'>
      <h4 className='center'>Loading...</h4>
    </div>
  )
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
