import React from 'react';
import { Link } from "react-router-dom";

import Tags from './Tags.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/grid-card.scss';
import variables from '../../scss/global/variables.scss';
import imgHeight from '../../scss/cards/grid-card.scss';

export default function GridCard(props) {
  return (
    <Link to={'/server/'+props.card.id} className='card grid-card' style={{background: "linear-gradient(to top, "+variables.white+", "+(props.card.gradient_accent || variables.white)+" "+imgHeight.imgHeight+")"}}>

      <div className='gradient' style={{background: "linear-gradient(transparent, "+(props.card.gradient_accent || variables.white)+")"}}></div>
      <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt={props.card.name + ' Banner'}></img></div>

      <CardTitle card={props.card}/>

      <CardFeatures/>
      <p className='body-text'>{props.card.body}</p>

      <Tags card={props.card}/>

      <CardStats card={props.card}/>
      
    </Link>
  );
}