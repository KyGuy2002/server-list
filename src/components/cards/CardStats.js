import React from 'react';
import '../../scss/cards/card.scss';

export default function CardStats(props) {
  return (
    <div className='stats-container'>
        <div>
          <p className='label'>Status</p>
          <p className='data'>{(props.card.status ? "Online" : "Offline")}</p>
        </div>
        <hr></hr>
        <div>
          <p className='label'>Players</p>
          <p className='data'>{props.card.players}</p>
        </div>
      </div>
  );
}