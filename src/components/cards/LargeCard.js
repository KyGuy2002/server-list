import React from 'react';
import Tag from './Tag.js'
import CardTitle from './CardTitle.js'
import CardStats from './CardStats.js'
import CardFeatures from './CardFeatures'
import '../../scss/cards/large-card.scss';

export default function LargeCard(props) {
  return (
    <div className='card large-card'>



      <div className='leftImageColumn'>

        <div className='gradient bottom-gradient'></div>
        <div className='gradient right-gradient'></div>
        <div className='banner-img'><img src={process.env.PUBLIC_URL + '/images/banners/' + props.card.id + ".png"} alt={props.card.name + ' Banner'}></img></div>


        <div className='title-tags-flex'>
          <CardTitle card={props.card}/>

          <div className='tag-container'>
            {props.card.tags.map(tag => (
              <Tag key={tag} name={tag}/>
            ))}
          </div>
        </div>

      </div>



      <div className='rightTextColumn'>

        <div>
          <h1>{props.card.name}</h1>
          <p className='body-text'>{props.card.body}</p>
          <CardFeatures/>
        </div>
        <CardStats card={props.card}/>

      </div>
      


    </div>
  );
}