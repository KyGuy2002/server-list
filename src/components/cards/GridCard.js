import React from 'react';
import { Link } from "react-router-dom";

import Tags from './Tags.js'
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
      <Link to={'/server/'+props.card.id} className='card grid-card' style={{background: "linear-gradient(to top, "+variables.white+", "+(props.card.gradient_accent || variables.white)+" "+imgHeight.imgHeight+")"}}>
  
        <div className='gradient' style={{background: "linear-gradient(transparent, "+(props.card.gradient_accent || variables.white)+")"}}></div>
        <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt={props.card.name + ' Banner'}></img></div>
  
        <CardTitle card={props.card}/>
  
        <CardFeatures features_categories={props.card.features_categories}/>

        <CardStats card={props.card}/>
        
      </Link>
    );
  }

  else {
    const feature_height = "12px";
    const gap = "8px";
    return (
      <Link className='card grid-card'>
  
        <div className='gradient'></div>
        <div className='banner-img'><Skeleton height={imgHeight.imgHeight} style={{transform: "translateY(-1px)"}}/></div>
  
        <CardTitle card={props.card}/>
  
        {/* Features */}
        <Skeleton height={feature_height} width='30%' style={{marginTop: "15px"}}/>
        <Skeleton count={2.5} height={feature_height} style={{marginTop: gap}}/>
        <Skeleton height={feature_height} width='30%' style={{marginTop: gap}}/>
        <Skeleton count={2.5} height={feature_height} style={{marginTop: gap}}/>
  
        {/* Stats */}
        <Skeleton height='40px' width="calc(100% - 40px)" style={{position: "absolute", bottom: "0", left: "0", margin: "20px"}}/>
        
      </Link>
    );
  }
}