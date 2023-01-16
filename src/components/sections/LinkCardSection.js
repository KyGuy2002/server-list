import React from 'react';
import LinkCard from '../cards/LinkCard.js'
import '../../scss/cards/link-card.scss';

export default function LinkCardSection(props) {
  return (
    <section className='link-card-section'>

        {props.cards.map(card => (
            <LinkCard key={card.id} card={card}/>
        ))}

    </section>
  );
}