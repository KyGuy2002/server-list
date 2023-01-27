import React from 'react';
import '../../scss/cards/tag.scss';

export default function Tags(props) {
  return (
    <div className='tag-container'>
        {props.card.tags.map(tag => (
          <div key={props.card.server_uuid + "|" + tag} className='tag'>
            {tag}
          </div>
        ))}
      </div>
  );
}