import * as React from 'react';

import GenreStats from '../components/pane/GenreStats';
import ArtistStats from '../components/pane/ArtistStats';
import SongStats from '../components/pane/SongStats';

export default function Stats() {
  return (
    <div id='stats'>
      <GenreStats />
      <ArtistStats />
      <SongStats />
    </div>
  );
}
