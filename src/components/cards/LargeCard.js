import React from 'react';
import { Link } from "react-router-dom";

import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/large-card.scss';
import Skeleton from 'react-loading-skeleton';

export default function LargeCard(props) {
  if (props.card) {
    return (
      <Link to={'/server/'+props.card.server_uuid} className='card large-card'>
  
        <div className='leftImageColumn'>
  
          <div className='gradient bottom-gradient'></div>
          <div className='gradient right-gradient'></div>
          <img className='banner-img' src={"https://res.cloudinary.com/drimvo8rp/image/upload/v1674796880/server-banner/" + props.card.server_uuid + ".png"} alt={props.card.name + ' Banner'}></img>
  
  
          <div className='title-tags-flex'>
            <CardTitle card={props.card}/>
          </div>
  
        </div>
  
        <div className='rightTextColumn'>
  
          <div>
            <h1>{props.card.name}</h1>
            <CardFeatures card={props.card}/>
          </div>
          <CardStats card={props.card}/>
  
        </div>
        
      </Link>
    );
  }

  else {
    return (
      <Link className='card large-card'>
  
        <div className='leftImageColumn'>
  
          <div className='gradient bottom-gradient'></div>
          <div className='gradient right-gradient'></div>
          <div className='banner-img'><Skeleton style={{transform: "translateY(-1px)"}}/></div>
  
  
          <div className='title-tags-flex'>
            <CardTitle card={props.card}/>
          </div>
  
        </div>
  
        <div className='rightTextColumn'>
  
          <div>
            <h1><Skeleton/></h1>
            <CardFeatures card={props.card}/>
          </div>
          <CardStats card={props.card}/>
  
        </div>
        
      </Link>
    );
  }
}