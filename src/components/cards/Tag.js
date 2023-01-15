import React from 'react';
import '../../scss/cards/tag.scss';

export default function Tag(props) {
  return (
    <div className='tag'>
      {props.name}
    </div>
  );
}