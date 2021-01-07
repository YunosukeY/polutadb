import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import Top from './top';
import Stats from './stats';
import Releases from './releases';
import Favos from './favos';
import card from './card.svg';
import cardSmallerCredit from './card-smaller-credit.svg';

export function Header() {
  return (
    <header>
      <nav className='nav-extended'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center title'>PolutaDB</Link>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'><Box pt={1}><MenuIcon style={{ fontSize: 24 }} /></Box></a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li><Link to='/'>Top</Link></li>
            <li><Link to='/favos'>Favos</Link></li>
            <li><Link to='/stats'>Stats</Link></li>
            <li><Link to='/releases'>Releases</Link></li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li><Link to='/'>Top</Link></li>
        <li><Link to='/favos'>Favos</Link></li>
        <li><Link to='/stats'>Stats</Link></li>
        <li><Link to='/releases'>Releases</Link></li>
      </ul>

      <Card />
    </header>
  );
}

function Card() {
  return (
    <div style={{ backgroundColor: '#fff8f8' }}>
      {screen.width <= 760 &&
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '52.5%' }}>
          {screen.width > 500 && <img src={cardSmallerCredit} alt='OmaruPolka' title='OmaruPolka' style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }} />}
          {screen.width <= 500 && <img src={card} alt='OmaruPolka' title='OmaruPolka' style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }} />}
        </div>
      }
      {screen.width > 760 &&
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '400px' }}>
          <img src={cardSmallerCredit} alt='OmaruPolka' title='OmaruPolka' style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }} />
        </div>
      }
    </div>
  )
}

export function Main() {
  const [favos, setFavos] = useState(() => {
    const stickyValue = window.localStorage.getItem('favos');
    return stickyValue !== null
      ? new Map(JSON.parse(stickyValue)) as Map<number, boolean>
      : new Map<number, boolean>();
  });
  const [displaynum, setDisplaynum] = useState(() => {
    const stickyValue = window.localStorage.getItem('displaynum');
    return stickyValue !== null
      ? Number(stickyValue)
      : 5;
  });
  const [displayMode, setDisplayMode] = useState(() => {
    const stickyValue = window.localStorage.getItem('displayMode');
    return stickyValue !== null
      ? Number(stickyValue)
      : 0;
  });
  useEffect(() => {
    window.localStorage.setItem('favos', JSON.stringify([...favos]));
    window.localStorage.setItem('displaynum', String(displaynum));
    window.localStorage.setItem('displayMode', String(displayMode));
  });

  const isFavo = (singingId: number) => {
    favos as Map<number, boolean>;
    return favos.has(singingId) && (favos.get(singingId) as boolean);
  };
  const toggleFavo = (singingId: number) => {
    if (favos.has(singingId)) {
      const f = favos.get(singingId) as boolean;
      setFavos(new Map(favos.set(singingId, !f)));
    } else {
      setFavos(new Map(favos.set(singingId, true)));
    }
  };

  return (
    <div id='main'>
      <div className='row'>
        <div className='col s12 m12 l10 offset-l1 xl8 offset-xl2'>
          <Switch>
            <Route exact path='/' render={(props) =>
              <Top
                rowqs={props.location.search}
                isFavo={isFavo}
                toggleFavo={toggleFavo}
                displaynum={displaynum}
                setDisplaynum={setDisplaynum}
                displayMode={displayMode}
                setDisplayMode={setDisplayMode}
              />
            } />
            <Route path='/favos' render={() =>
              <Favos
                isFavo={isFavo}
                toggleFavo={toggleFavo}
                displaynum={displaynum}
                setDisplaynum={setDisplaynum}
                displayMode={displayMode}
                setDisplayMode={setDisplayMode}
              />
            } />
            <Route path='/stats' component={Stats} />
            <Route path='/releases' component={Releases} />
          </Switch>
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
              <li><a className='grey-text text-lighten-3' href='https://twitter.com/k1m1tsu'>管理人Twitter</a></li>
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
