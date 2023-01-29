import React from 'react';
import ArtistStats from './ArtistStats';
import SongStats from './SongStats';

const Stats: React.FC = () => {
  return (
    <>
      <ArtistStats />
      <SongStats />
    </>
  );
};

export default Stats;
