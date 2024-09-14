import dynamic from 'next/dynamic';
import type React from 'react';
const ArtistStats = dynamic(() => import('./ArtistStats'), { ssr: false });
const SongStats = dynamic(() => import('./SongStats'), { ssr: false });

const Stats: React.FC = () => {
  return (
    <>
      <ArtistStats />
      <SongStats />
    </>
  );
};

export default Stats;
