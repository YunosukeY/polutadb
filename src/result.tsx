import * as React from 'react';

export function Result(props: any) {
  return <h1>{props.genre}, {props.type}, {props.video}, {props.song}, {props.artist}, {props.displaynum}</h1>
}