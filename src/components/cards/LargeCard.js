import React from 'react';
import { Link } from "react-router-dom";

import Tags from './Tags.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/large-card.scss';

export default function LargeCard(props) {
  return (
    <Link to={'/server/'+props.card.id} className='card large-card'>

      <div className='leftImageColumn'>

        <div className='gradient bottom-gradient'></div>
        <div className='gradient right-gradient'></div>
        <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt={props.card.name + ' Banner'}></img></div>


        <div className='title-tags-flex'>
          <CardTitle card={props.card}/>

          {/* <Tags card={props.card}/> */}
        </div>

      </div>

      <div className='rightTextColumn'>

        <div>
          <h1>{props.card.name}</h1>
          <p className='body-text'>{props.card.body}</p>
          <CardFeatures features_categories={props.card.features_categories}/>
        </div>
        <CardStats card={props.card}/>

      </div>
      
    </Link>
  );
}