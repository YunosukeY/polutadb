import * as React from 'react';

import ArtistStats from '../components/pane/ArtistStats';
import SongStats from '../components/pane/SongStats';

export default function Stats() {
  return (
    <>
      <ArtistStats />
      <SongStats />
    </>
  );
}
