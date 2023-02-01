import React from 'react';
import '../../scss/cards/card.scss';
import Skeleton from 'react-loading-skeleton';

export default function CardStats(props) {
  if (props.card) {
    return (
      <div className='stats-container'>
        <div>
          <p className='label'>Status</p>
          <p className='data'>{(props.card.online ? "Online" : "Offline")}</p>
        </div>
        <hr></hr>
        <div>
          <p className='label'>Players</p>
          <p className='data'>{props.card.players || 0}</p>
        </div>
      </div>
    );
  }

  else {
    return (
      <Skeleton height='40px' containerClassName="skeleton-stats"/>
    );
  }
}