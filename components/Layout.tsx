import * as React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Youtube } from '../components/result';
import { Singing } from '../data/singings';
import { getVideo } from '../data/utils';
const AppStateProvider = dynamic<{ children: React.ReactNode }>(
  () => import('../lib/appStateContext').then((modules) => modules.AppStateProvider),
  { ssr: false },
);

export default function Layout({ children }: { children: any }) {
  return (
    <AppStateProvider>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </AppStateProvider>
  );
}

function Header() {
  const isMobile = screen.width < 1000;

  return (
    <header>
      <AppBar position='fixed' style={{ backgroundColor: '#f1646a' }}>
        <Toolbar style={{ position: 'relative' }}>
          <div style={{ flexGrow: 1 }}>{isMobile && <MobileMenu />}</div>
          <h4
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              color: 'white',
              margin: 0,
              fontSize: '2.1rem',
            }}
          >
            PolutaDB
          </h4>
          {!isMobile && <Buttons />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}

function Main({ children }: { children: any }) {
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

function MobileMenu() {
  const router = useRouter();
  const goto = (url: string) => {
    return () => {
      router.push(url);
    };
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        style={{ background: 'rgba(0,0,0,0)' }}
      >
        <MenuIcon />
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={goto('/')}>Top</MenuItem>
        <MenuItem onClick={goto('/search')}>Search</MenuItem>
        <MenuItem onClick={goto('/favos')}>Favorites</MenuItem>
        <MenuItem onClick={goto('/stats')}>Statistics</MenuItem>
        <MenuItem onClick={goto('/releases')}>Release Notes</MenuItem>
      </Menu>
    </>
  );
}

function Buttons() {
  return (
    <>
      <Button href='/' color='inherit' style={{ fontSize: '1rem', textTransform: 'none' }}>
        Top
      </Button>
      <Button href='/search' color='inherit' style={{ fontSize: '1rem', textTransform: 'none' }}>
        Search
      </Button>
      <Button href='/favos' color='inherit' style={{ fontSize: '1rem', textTransform: 'none' }}>
        Favos
      </Button>
      <Button href='/stats' color='inherit' style={{ fontSize: '1rem', textTransform: 'none' }}>
        Stats
      </Button>
      <Button href='/releases' color='inherit' style={{ fontSize: '1rem', textTransform: 'none' }}>
        Releases
      </Button>
    </>
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
  return (
    <div style={{ backgroundColor: '#fff8f8', textAlign: 'center' }}>
      {screen.width <= 500 && (
        <img src='/card.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {500 < screen.width && screen.width <= 760 && (
        <img src='/card-smaller-credit.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {760 < screen.width && (
        <img
          src='/card-smaller-credit.png'
          alt='OmaruPolka'
          title='OmaruPolka'
          style={{ height: '400px', margin: '0 auto' }}
        />
      )}
    </div>
  );
}
