import React from 'react';
import '../../scss/cards/card.scss';

export default function Feature(props) {
  return (
    <div className='feature'>
      <i className={props.icon_classes}></i>
      <h1>{props.name}</h1>
    </div>
  );
}