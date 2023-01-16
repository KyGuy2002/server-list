import React from 'react';
import '../../scss/cards/card.scss';
import Feature from "./Feature.js"

export default function CardFeatures(props) {
  return (
    <div className='features'>
      <Feature name='Magic Kingdom' icon_classes='fa-brands fa-fort-awesome'/>
      <Feature name='Worldedit' icon_classes='fa-brands fa-fort-awesome'/>
      <Feature name='HeadDatabase' icon_classes='fa-brands fa-fort-awesome'/>
      <Feature name='ArmorStandTools' icon_classes='fa-brands fa-fort-awesome'/>
      <Feature name='Universal' icon_classes='fa-brands fa-fort-awesome'/>
      <Feature name='Working Rides' icon_classes='fa-brands fa-fort-awesome'/>
    </div>
  );
}