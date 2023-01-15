import React from 'react';
import LargeCard from '../cards/LargeCard.js'
import '../../scss/cards/large-card.scss';

export default function LargeCardSection(props) {
  return (
    <section className='large-card-section'>

      <span className="section-label">{props.section_name} <i className="fa-solid fa-circle-info"></i></span>

      <div className='cards'>
        {props.cards.map(card => (
          <LargeCard key={card.name} card={card}/>
        ))}
      </div>
      
    </section>
  );
}