import * as React from 'react';
import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { initPageSelector } from '../../../../store/pageAtom';
import { useBool } from '../../../../lib/useBool';

export default function Menu() {
  const [open, handleDrawerOpen, handleDrawerClose] = useBool(false);

  return (
    <>
      <IconButton color='inherit' onClick={handleDrawerOpen} aria-label='メニュー' size='large'>
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

  const init = useSetRecoilState(initPageSelector);

  return (
    <Drawer anchor='right' open={open} onClose={handleDrawerClose}>
      <List>
        <ListItem
          button
          onClick={() => {
            init();
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
            init();
            goto('/favos');
          }}
        >
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary='Favorites' />
        </ListItem>
        <ListItem button onClick={() => { goto('/stats'); }}>
          <ListItemIcon>
            <DonutLargeIcon />
          </ListItemIcon>
          <ListItemText primary='Statistics' />
        </ListItem>
        <ListItem button onClick={() => { goto('/releases'); }}>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary='Releases Notes' />
        </ListItem>
        <ListItem button onClick={() => { goto('/about'); }}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='About' />
        </ListItem>
      </List>
    </Drawer>
  );
};
