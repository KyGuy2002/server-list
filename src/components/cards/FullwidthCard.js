import React from 'react';
import Tag from './Tag.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import '../../scss/cards/fullwidth-card.scss';

export default function FullwidthCard(props) {
  return (
    <div className='card fullwidth-card'>

      <div className='gradient'></div>
      <img className='banner-img' src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt=''></img>

      <CardTitle card={props.card}/>

      <CardStats card={props.card}/>

      <div className='tag-container'>
        {props.card.tags.map(tag => (
          <Tag key={tag} name={tag}/>
        ))}
      </div>

      <p className='body-text'>{props.card.body}</p>
      
    </div>
  );
}