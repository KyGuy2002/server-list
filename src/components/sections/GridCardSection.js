import React from 'react';
import GridCard from '../cards/GridCard.js'
import '../../scss/cards/grid-card.scss';

export default function CardSection(props) {

  return (
    <section className='grid-card-section'>

      <div className='cards'>
        {(props.cards && props.cards.server_cards.map(card => (
          <GridCard key={card.id} card={card}/>
        )))
        ||
        Array.apply(0, Array(10)).map(card => (
          <GridCard card={card}/>
        ))}
      </div>
      
    </section>
  );

}