import React from 'react';
import '../../scss/cards/card.scss';
import Feature from "./Feature.js"

export default function CardFeatures(props) {
  return (
    <div className='features'>

        {props.features_categories.map(category => (
          <section className='feature-group'>
            <h3>{category.category_name}:</h3>
            <div>
              {category.features.map(feature => (
              <Feature name={feature} icon_classes='fa-brands fa-fort-awesome'/>
              ))}
            </div>
          </section>
        ))}

    </div>
  );
}