import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Menu from './Menu';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';
import { appState } from '../../lib/AppState';
import { useSetRecoilState } from 'recoil';

export default function Header() {
  const router = useRouter();

  const setState = useSetRecoilState(appState);
  const initPage = () => {
    setState((state) => ({ ...state, pagenum: 1 }));
  };

  return (
    <header>
      <AppBar position='fixed' style={{ backgroundColor: '#ef5350', border: 0 }}>
        <Toolbar style={{ position: 'relative' }}>
          <div style={{ flexGrow: 1 }} />
          <Button
            onClick={() => {
              initPage();
              router.push('/');
            }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              textTransform: 'none',
              height: 64,
            }}
          >
            <h4
              style={{
                color: 'white',
                margin: 0,
                fontSize: '2.1rem',
              }}
            >
              PolutaDB
            </h4>
          </Button>
          <Menu />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </header>
  );
}
