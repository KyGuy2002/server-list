import React from 'react';
import Tag from './Tag.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/grid-card.scss';
import variables from '../../scss/global/variables.scss';
import imgHeight from '../../scss/cards/grid-card.scss';

export default function GridCard(props) {
  return (
    <div className='card grid-card' style={{background: "linear-gradient(to top, "+variables.white+", "+(props.card.gradient_accent || variables.white)+" "+imgHeight.imgHeight+")"}}>

      <div className='gradient' style={{background: "linear-gradient(transparent, "+(props.card.gradient_accent || variables.white)+")"}}></div>
      <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt={props.card.name + ' Banner'}></img></div>

      <CardTitle card={props.card}/>

      <CardFeatures/>
      <p className='body-text'>{props.card.body}</p>

      <div className='tag-container'>
        {props.card.tags.map(tag => (
          <Tag key={tag} name={tag}/>
        ))}
      </div>

      <CardStats card={props.card}/>
      
    </div>
  );
}