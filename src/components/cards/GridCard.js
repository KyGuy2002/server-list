import React from 'react';
import { Link } from "react-router-dom";

import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/grid-card.scss';
import variables from '../../scss/global/variables.scss';
import imgHeight from '../../scss/cards/grid-card.scss';
import Skeleton from 'react-loading-skeleton';

export default function GridCard(props) {
  if (props.card) {
    return (
      <Link to={'/server/'+props.card.server_uuid} className='card grid-card' style={{background: "linear-gradient(to top, "+variables.white+", "+(props.card.gradient_accent ? "#"+props.card.gradient_accent : variables.white)+" "+imgHeight.imgHeight+")"}}>
  
        <div className='gradient' style={{background: "linear-gradient(transparent, "+(props.card.gradient_accent ? "#"+props.card.gradient_accent : variables.white)+")"}}></div>
        <img className='banner-img' src={"https://res.cloudinary.com/drimvo8rp/image/upload/t_server-banner-grid-full/v1674796880/server-banner/" + props.card.server_uuid + ".png"} alt={props.card.name + ' Banner'}></img>
  
        <CardTitle card={props.card}/>
  
        <CardFeatures card={props.card}/>

        <CardStats card={props.card}/>
        
      </Link>
    );
  }

  else {
    return (
      <Link className='card grid-card'>
  
        <div className='gradient'></div>
        <div className='banner-img'><Skeleton height={imgHeight.imgHeight} style={{transform: "translateY(-2px)"}}/></div>
  
        <CardTitle card={props.card}/>
  
        <CardFeatures card={props.card}/>
  
        <CardStats card={props.card}/>
        
      </Link>
    );
  }
}