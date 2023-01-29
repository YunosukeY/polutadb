import * as React from 'react';
import { useRouter } from 'next/router';

import DeformedIcon from './DeformedIcon';
import PickUp from './PickUp';

export default function KeyVisual() {
  const router = useRouter();
  const isTop = () => {
    return router.pathname === '/';
  };

  return (
    <>
      {isTop() && <PickUp />}
      {!isTop() && <DeformedIcon />}
    </>
  );
}
