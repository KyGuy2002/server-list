import React from 'react';
import '../../scss/cards/small-link-card.scss';

export default function SmallLinkCard(props) {
  return (
    <div className='small-link-card'>

      <h1>{props.name}</h1>

      <i className="fa-solid fa-chevron-right"></i>
      
    </div>
  );
}