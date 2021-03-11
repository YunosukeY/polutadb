import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';

import { Youtube } from '../components/result';
import { Singing } from '../data/singings';
import { getVideo } from '../data/utils';
// import { useTracking } from './lib/useTracking';
import { AppStateProvider } from '../lib/appStateContext';

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  // useTracking('G-3PTTKZQQDT');

  useEffect(() => {
    window.M.AutoInit();
  }, []);

  return (
    <AppStateProvider>
      <Header />
      <Main>{children}</Main>
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
            <Link href='/'>
              <div className='brand-logo center title'>PolutaDB</div>
            </Link>
            <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
              <Box pt={1}>
                <MenuIcon style={{ fontSize: 24 }} />
              </Box>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link href='/'>Top</Link>
              </li>
              <li>
                <Link href='/search'>Search</Link>
              </li>
              <li>
                <Link href='/favos'>Favos</Link>
              </li>
              <li>
                <Link href='/stats'>Stats</Link>
              </li>
              <li>
                <Link href='/releases'>Releases</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link href='/'>Top</Link>
        </li>
        <li>
          <Link href='/search'>Search</Link>
        </li>
        <li>
          <Link href='/favos'>Favos</Link>
        </li>
        <li>
          <Link href='/stats'>Stats</Link>
        </li>
        <li>
          <Link href='/releases'>Releases</Link>
        </li>
      </ul>
    </header>
  );
}

// eslint-disable-next-line react/prop-types
function Main({ children }) {
  return (
    <>
      <KeyVisual />
      <div id='main'>
        <div className='row'>
          <div className='col s12 m12 l12 xl10 offset-xl1'>{children}</div>
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

function KeyVisual() {
  const router = useRouter();
  const isTop = () => {
    return router.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <Deformed />}
    </>
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
  let width: number;

  useEffect(() => {
    width = screen.width;
  });

  return (
    <div style={{ backgroundColor: '#fff8f8' }}>
      {width <= 760 && (
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '52.5%' }}>
          {width > 500 && (
            <img
              src='/card-smaller-credit.png'
              alt='OmaruPolka'
              title='OmaruPolka'
              style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
            />
          )}
          {width <= 500 && (
            <img
              src='/card.png'
              alt='OmaruPolka'
              title='OmaruPolka'
              style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
            />
          )}
        </div>
      )}
      {width > 760 && (
        <div style={{ position: 'relative', display: 'block', width: '100%', paddingTop: '400px' }}>
          <img
            src='/card-smaller-credit.png'
            alt='OmaruPolka'
            title='OmaruPolka'
            style={{ maxHeight: '400px', position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}
    </div>
  );
}
