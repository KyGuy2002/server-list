import React from 'react';
import '../../scss/cards/card.scss';
import Feature from "./Feature.js"
import Skeleton from 'react-loading-skeleton';

export default function CardFeatures(props) {
  const feature_height = "12px";
  const gap = "8px";
  if (props.card) {
    return (
      <div className='features'>
  
          {props.card.features_categories.map(category => (
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

  else {
    return (
      <>
  
        <Skeleton height={feature_height} width='30%' style={{marginTop: "15px"}}/>
        <Skeleton count={2.5} height={feature_height} style={{marginTop: gap}}/>
        <Skeleton height={feature_height} width='30%' style={{marginTop: gap}}/>
        <Skeleton count={2.5} height={feature_height} style={{marginTop: gap}}/>
  
      </>
    );
  }
}