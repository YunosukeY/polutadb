import * as React from 'react';

export default function ResultHeader(props: { resultnum: number }) {
  return (
    <h4 id='result-header'>
      {props.resultnum} Result{props.resultnum === 1 ? '' : 's'}
    </h4>
  );
}