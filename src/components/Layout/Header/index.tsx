import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Menu from './Menu';
import { useRouter } from 'next/router';
import { Button, styled, Typography } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { initPageSelector } from '../../../store/pageAtom';

const Bar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

export default function Header() {
  const router = useRouter();

  const init = useSetRecoilState(initPageSelector);

  return (
    <header>
      <Bar position='fixed'>
        <Toolbar style={{ position: 'relative' }}>
          <div style={{ flexGrow: 1 }} />
          <Button
            onClick={() => {
              init();
              // eslint-disable-next-line @typescript-eslint/no-floating-promises
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
            <Typography
              variant='h4'
              style={{
                color: 'white',
                margin: 0,
                fontSize: '2.1rem',
              }}
            >
              PolutaDB
            </Typography>
          </Button>
          <Menu />
        </Toolbar>
      </Bar>
      <Toolbar />
    </header>
  );
}
