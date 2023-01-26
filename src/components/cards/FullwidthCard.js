import React from 'react';
import { Link } from "react-router-dom";

import Tags from './Tags.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/fullwidth-card.scss';

export default function FullwidthCard(props) {
  return (
    <Link to={'/server/'+props.card.id} className='card fullwidth-card'>

      <div className='gradient'></div>
      <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.server_uuid + ".png"} alt={props.card.name + ' Banner'}></img></div>

      <CardTitle card={props.card}/>

      <CardStats card={props.card}/>

      <CardFeatures features_categories={props.card.features_categories}/>
      
    </Link>
  );
}