import { feature } from '../data';
import React from 'react';

const Features = () => {
  return (
    <div className='features'>
        <h1 className='gradient-text'>Powerful Features for DeFi Enthusiasts</h1>
        <div className="features-container">
            {feature.map((feat, index) =>(
                <div className="features-content glass-card " key={index}>
                    <span className='icon'>
                        {feat.icon}
                    </span>
                    <h2>
                        {feat.name}
                    </h2>
                    <p>
                        {feat.desc}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features