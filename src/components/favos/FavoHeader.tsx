import * as React from 'react';

export default function FavoHeader(props: { favonum: number }) {
  return (
    <h4 style={{ marginTop: '1rem' }}>
      {props.favonum} Favorite{props.favonum === 1 ? '' : 's'}
    </h4>
  );
}
