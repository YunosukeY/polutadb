import * as React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

import Top from './pages/top';
import Stats from './pages/stats';
import Releases from './pages/releases';
import Favos from './pages/favos';
import Search from './pages/search';
import { Youtube } from './components/result';
import { Singing } from './data/singings';
import { getVideo } from './data/utils';
import { useTracking } from './lib/useTracking';
import { AppStateProvider } from './lib/appStateContext';
import card from '../fig/card.svg';
import cardSmallerCredit from '../fig/card-smaller-credit.svg';

export default function App() {
  useTracking('G-3PTTKZQQDT');

  return (
    <AppStateProvider>
      <Header />
      <Main />
      <Footer />
    </AppStateProvider>
  );
}

function Header() {
  return (
    <header>
      <div className='navbar-fixed'>
        <nav className='nav-extended'>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo center title'>
              PolutaDB
            </Link>
            <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
              <Box pt={1}>
                <MenuIcon style={{ fontSize: 24 }} />
              </Box>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link to='/'>Top</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link>
              </li>
              <li>
                <Link to='/favos'>Favos</Link>
              </li>
              <li>
                <Link to='/stats'>Stats</Link>
              </li>
              <li>
                <Link to='/releases'>Releases</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/favos'>Favos</Link>
        </li>
        <li>
          <Link to='/stats'>Stats</Link>
        </li>
        <li>
          <Link to='/releases'>Releases</Link>
        </li>
      </ul>
    </header>
  );
}

function PickUp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className='pickup'>
      <Slider {...settings}>
        <PickUpThumbnail id='LQ_eazT56FA' singing={new Singing(0, 27, 0, 0)} />
        <PickUpThumbnail id='UpoysjZfWrU' singing={new Singing(0, 36, 0, 0)} />
        <PickUpThumbnail id='NdHPnTd2Jd8' singing={new Singing(0, 33, 0, 0)} />
        <PickUpThumbnail id='syhlmTNW_a8' singing={new Singing(0, 30, 0, 0)} />
      </Slider>
    </div>
  );
}

function PickUpThumbnail(props: { id: string; singing: Singing }) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ backgroundColor: '#000000' }}>
        <img
          src={`https://img.youtube.com/vi/${props.id}/maxresdefault.jpg`}
          style={{ width: '100%', opacity: 0.7 }}
          alt={getVideo(props.singing.videoId)}
        />
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <Youtube singing={props.singing} fontsize={70} />
      </div>
    </div>
  );
}

function Deformed() {
  return (
    <div style={{ backgroundColor: '#fff8f8' }}>
      {screen.width <= 760 && (
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '52.5%' }}>
          {screen.width > 500 && (
            <img
              src={cardSmallerCredit}
              alt='OmaruPolka'
              title='OmaruPolka'
              style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
            />
          )}
          {screen.width <= 500 && (
            <img
              src={card}
              alt='OmaruPolka'
              title='OmaruPolka'
              style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
            />
          )}
        </div>
      )}
      {screen.width > 760 && (
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '400px' }}>
          <img
            src={cardSmallerCredit}
            alt='OmaruPolka'
            title='OmaruPolka'
            style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
    </div>
  );
}

function KeyVisual() {
  const location = useLocation();
  const isTop = () => {
    return location.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <Deformed />}
    </>
  )
}

function Main() {
  return (
    <>
      <KeyVisual />
      <div id='main'>
        <div className='row'>
          <div className='col s12 m12 l12 xl10 offset-xl1'>
            <Switch>
              <Route exact path='/' component={Top} />
              <Route path='/search' component={Search} />
              <Route path='/favos' component={Favos} />
              <Route path='/stats' component={Stats} />
              <Route path='/releases' component={Releases} />
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col s12' id='links'>
            <h5 className='white-text'>Links</h5>
            <ul>
              <li>
                <a className='grey-text text-lighten-3' href='https://open.spotify.com/playlist/4RUXo3tSPwkhizu8yBCgfn'>
                  原曲プレイリスト（Spotify）
                </a>
              </li>
              <li>
                <a className='grey-text text-lighten-3' href='https://twitter.com/k1m1tsu'>
                  管理人Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container center'>© 2020 ぽるうたデータベース</div>
      </div>
    </footer>
  );
}
