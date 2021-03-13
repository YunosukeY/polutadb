import * as React from 'react';

export default function Radio(props: {
  text: string;
  onChange: (newValue: string) => void;
  checked: boolean;
  colsize: string;
}) {
  return (
    <label className={`col ${props.colsize}`}>
      <input
        className='with-gap'
        type='radio'
        value={props.text}
        checked={props.checked}
        onChange={() => props.onChange(props.text)}
      />
      <span className='text'>{props.text}</span>
    </label>
  );
}
