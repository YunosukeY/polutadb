import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Menu from './Menu';
import { useRouter } from 'next/router';
import { Button, styled } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { appState } from '../../../store/state';

const Bar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  border: '0 !important',
}));

export default function Header() {
  const router = useRouter();

  const setState = useSetRecoilState(appState);
  const initPage = () => {
    setState((state) => ({ ...state, pagenum: 1 }));
  };

  return (
    <header>
      <Bar position='fixed'>
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
      </Bar>
      <Toolbar />
    </header>
  );
}
