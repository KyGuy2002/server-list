import React from 'react';
import '../../scss/cards/link-card.scss';

export default function LinkCard(props) {
  return (
    <div className='link-card'>

      <div className='gradient'></div>
      <div className='banner-img' style={{display: (props.card.image ? "flex" : "none")}}><img src={process.env.PUBLIC_URL + '/images/links/' + props.card.image} alt={props.card.name}></img></div>

      <div className='title-container'>
        <h1>{props.card.name}</h1>
        <h2>{props.card.description}</h2>
      </div>

      <i className={props.card.icon_classes || "fa-solid fa-chevron-right"}></i>
      
    </div>
  );
}