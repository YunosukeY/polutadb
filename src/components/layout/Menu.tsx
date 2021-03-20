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
      <IconButton id='homeButton' color='inherit' onClick={goto('/')}>
        <HomeIcon />
      </IconButton>
      <IconButton id='searchButton' color='inherit' onClick={goto('/search')}>
        <SearchIcon />
      </IconButton>
      <IconButton id='favosButton' color='inherit' onClick={goto('/favos')}>
        <StarIcon />
      </IconButton>
      <IconButton id='statsButton' color='inherit' onClick={goto('/stats')}>
        <DonutLargeIcon />
      </IconButton>
      <IconButton id='releasesButton' color='inherit' onClick={goto('/releases')}>
        <ImportContactsIcon />
      </IconButton>
    </>
  );
}
