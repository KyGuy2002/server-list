import React from 'react';
import '../../scss/cards/card.scss';

export default function CardTitle(props) {
  return (
    <div className='title-container'>
      <div className='image-container'><img src={process.env.PUBLIC_URL + '/images/logos/' + props.card.id + ".png"} alt={props.card.name + ' Logo'}></img></div>
      <div className='text'>
        <h1>{props.card.name}</h1>
        <span>{props.card.ip} <i className="fa-solid fa-copy"></i></span>
        <hr style={{borderTop: "3px solid "+props.card.accent}}></hr>
      </div>
    </div>
  );
}