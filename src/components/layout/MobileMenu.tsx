import * as React from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();
  const goto = (url: string) => {
    return () => {
      handleClose();
      router.push(url);
    };
  };

  return (
    <>
      <IconButton edge='start' color='inherit' aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={goto('/')}>Top</MenuItem>
        <MenuItem onClick={goto('/favos')}>Favorites</MenuItem>
        <MenuItem onClick={goto('/stats')}>Statistics</MenuItem>
        <MenuItem onClick={goto('/releases')}>Release Notes</MenuItem>
        <MenuItem onClick={goto('/about')}>About</MenuItem>
      </Menu>
    </>
  );
}
