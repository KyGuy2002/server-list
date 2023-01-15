import React from 'react';
import GridCard from '../cards/GridCard.js'
import '../../scss/cards/grid-card.scss';

export default function CardSection(props) {
  return (
    <section className='grid-card-section'>

      <span className="section-label">{props.section_name} <i className="fa-solid fa-circle-info"></i></span>

      <div className='cards'>
        {props.cards.map(card => (
          <GridCard key={card.name} card={card}/>
        ))}
      </div>
      
    </section>
  );
}