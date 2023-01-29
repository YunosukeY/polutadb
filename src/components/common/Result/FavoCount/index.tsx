import * as React from 'react';

export default function FavoCount(props: { favonum: number }) {
  return (
    <div>
      <h4 style={{ display: 'inline', color: '#ef5350' }}>{`${props.favonum} `}</h4>
      <h4 style={{ display: 'inline' }}>Favorite{props.favonum === 1 ? '' : 's'}</h4>
    </div>
  );
}
