import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Menu from './Menu';
import MobileMenu from './MobileMenu';

export default function Header() {
  const isMobile = screen.width < 1000;

  return (
    <header>
      <AppBar position='fixed' style={{ backgroundColor: '#ef5350', border: 0 }}>
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
          {!isMobile && <Menu />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}
