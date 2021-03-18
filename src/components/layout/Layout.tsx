import * as React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Grid from '@material-ui/core/Grid';

import KeyVisual from './KeyVisual';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
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
      <div id='main' style={{ padding: 10 }}>
        <Grid container justify='center'>
          <Grid item xs={12} sm={12} md={12} lg={10}>
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className='page-footer'>
      <Grid container justify='center'>
        <Grid item xs={10} sm={10} md={10} lg={9}>
          <div id='links' style={{ paddingBottom: 20 }}>
            <h5 style={{ color: 'white' }}>Links</h5>
            <a href='https://open.spotify.com/playlist/4RUXo3tSPwkhizu8yBCgfn' style={{ color: 'white' }}>
              原曲プレイリスト（Spotify）
            </a>
            <br />
            <a href='https://twitter.com/k1m1tsu' style={{ color: 'white' }}>
              管理人Twitter
            </a>
          </div>
        </Grid>
      </Grid>
      <div style={{ backgroundColor: 'rgba(51,51,51,.08)', display: 'table', width: '100%' }}>
        <div
          style={{
            color: 'white',
            textAlign: 'center',
            height: '50px',
            display: 'table-cell',
            verticalAlign: 'middle',
          }}
        >
          © 2020 ぽるうたデータベース
        </div>
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
  const router = useRouter();
  const goto = (url: string) => {
    return () => {
      router.push(url);
    };
  };

  return (
    <>
      <IconButton id='homeButton' color='inherit' onClick={goto('/')} style={{ background: 'rgba(0,0,0,0)' }}>
        <HomeIcon />
      </IconButton>
      <IconButton id='searchButton' color='inherit' onClick={goto('/search')} style={{ background: 'rgba(0,0,0,0)' }}>
        <SearchIcon />
      </IconButton>
      <IconButton id='favosButton' color='inherit' onClick={goto('/favos')} style={{ background: 'rgba(0,0,0,0)' }}>
        <StarIcon />
      </IconButton>
      <IconButton id='statsButton' color='inherit' onClick={goto('/stats')} style={{ background: 'rgba(0,0,0,0)' }}>
        <DonutLargeIcon />
      </IconButton>
      <IconButton
        id='releasesButton'
        color='inherit'
        onClick={goto('/releases')}
        style={{ background: 'rgba(0,0,0,0)' }}
      >
        <ImportContactsIcon />
      </IconButton>
    </>
  );
}
