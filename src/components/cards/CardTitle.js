import React from 'react';
import '../../scss/cards/card.scss';

import variables from '../../scss/global/variables.scss';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CardTitle(props) {
  if (props.card) {
    return (
      <div className='title-container'>
        <div className='image-container'><img src={process.env.PUBLIC_URL + '/images/logos/' + props.card.server_uuid + ".png"} alt={props.card.name + ' Logo'}></img></div>
        <div className='text'>
          <h1>{props.card.name}</h1>
          <span>{props.card.ip} <i className="fa-solid fa-copy"></i></span>
          <hr style={{borderTop: "3px solid #"+props.card.accent}}></hr>
        </div>
      </div>
    );
  }

  else {
    return (
      <div className='title-container' style={{filter: "drop-shadow(0px 0px 5px "+variables.grayL+")"}}>
        <div className='image-container'><Skeleton height="100%"/></div>
        <div className='text'>
          <h1><Skeleton width='140px'/></h1>
          <span><Skeleton width='105px'/></span>
          <Skeleton width='50px' height='4px' style={{marginTop: "5px"}}/>
        </div>
      </div>
    );
  }
}