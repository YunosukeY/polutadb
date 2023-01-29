import * as React from 'react';

export default function ResultCount(props: { resultnum: number }) {
  return (
    <div>
      <h4 style={{ display: 'inline', color: '#ef5350' }}>{`${props.resultnum} `}</h4>
      <h4 style={{ display: 'inline' }}>Result{props.resultnum === 1 ? '' : 's'}</h4>
    </div>
  );
}
