import * as React from 'react';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

export default function Menu() {
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
