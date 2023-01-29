import * as React from 'react';

export default function DeformedIcon() {
  return (
    <div style={{ backgroundColor: '#fff', textAlign: 'center' }}>
      {screen.width <= 500 && (
        <img src='/card.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {500 < screen.width && screen.width <= 760 && (
        <img src='/card-smaller-credit.png' alt='OmaruPolka' title='OmaruPolka' style={{ width: screen.width }} />
      )}
      {760 < screen.width && (
        <img
          src='/card-smaller-credit.png'
          alt='OmaruPolka'
          title='OmaruPolka'
          style={{ height: '400px', margin: '0 auto' }}
        />
      )}
    </div>
  );
}
