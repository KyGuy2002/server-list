import React from 'react';
import FullwidthCard from '../cards/FullwidthCard.js'
import '../../scss/cards/fullwidth-card.scss';

export default function FullwidthCardSection(props) {
  return (
    <section className='fullwidth-card-section'>

      <span className="section-label">{props.section_name} <i className="fa-solid fa-circle-info"></i></span>

      <div className='cards'>
        {props.cards.map(card => (
          <FullwidthCard key={card.name} card={card}/>
        ))}
      </div>
      
    </section>
  );
}