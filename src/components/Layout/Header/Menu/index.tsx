import * as React from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { appState } from '../../../../store/state';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color='inherit' onClick={handleDrawerOpen} aria-label='Menu'>
        <MenuIcon />
      </IconButton>
      <MenuDrawer open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
}

type MenuDrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
};
const MenuDrawer: React.FC<MenuDrawerProps> = ({ open, handleDrawerClose }) => {
  const router = useRouter();
  const goto = (url: string) => {
    handleDrawerClose();
    router.push(url);
  };

  const setState = useSetRecoilState(appState);
  const initPage = () => {
    setState((state) => ({ ...state, pagenum: 1 }));
  };

  return (
    <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
      <List>
        <ListItem
          button
          onClick={() => {
            initPage();
            goto('/');
          }}
        >
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary='Search' />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            initPage();
            goto('/favos');
          }}
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary='Favorites' />
        </ListItem>
        <ListItem button onClick={() => goto('/stats')}>
          <ListItemIcon>
            <DonutLargeIcon />
          </ListItemIcon>
          <ListItemText primary='Statistics' />
        </ListItem>
        <ListItem button onClick={() => goto('/releases')}>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary='Releases Notes' />
        </ListItem>
        <ListItem button onClick={() => goto('/about')}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </List>
    </Drawer>
  );
};
