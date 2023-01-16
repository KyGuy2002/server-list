import React from 'react';
import GridCard from '../cards/GridCard.js'
import '../../scss/cards/grid-card.scss';

export default function CardSection(props) {
  return (
    <section className='grid-card-section'>

      <div className='cards'>
        {props.cards.map(card => (
          <GridCard key={card.id} card={card}/>
        ))}
      </div>
      
    </section>
  );
}