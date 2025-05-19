"use client"
import React, { useState } from 'react'
import { tokenclaim } from '../data'
import Image from 'next/image';

const page = () => {
  const [activeFilter, setActiveFilter] = useState('Ongoing');
  const filteredTokens = tokenclaim.filter(token => 
    activeFilter === 'All' ? true : token.condition === activeFilter
  );
  return (
    <div className='tokenclaims'>
      <h1 className='gradient-text'>NFTs Claims</h1>
      <div className="token-search">
        <input type="text" placeholder='Search token claims...' />
      </div>
      <div className="tokenclaims-container">
        <div className="token-navigate">
        <button 
          className={activeFilter === 'Ongoing' ? 'tok-active' : ''}
          onClick={() => setActiveFilter('Ongoing')}
        >
          Ongoing
        </button>
        <button 
          className={activeFilter === 'Upcoming' ? 'tok-active' : ''}
          onClick={() => setActiveFilter('Upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={activeFilter === 'Ended' ? 'tok-active' : ''}
          onClick={() => setActiveFilter('Ended')}
        >
          Ended
        </button>
        <button 
          className={activeFilter === 'All' ? 'tok-active' : ''}
          onClick={() => setActiveFilter('All')}
        >
          All
        </button>
        </div>
        <div className="tokenclaims-wrapp">
          {filteredTokens.map(((token, index) =>(  
            <div className="tokenclaims-content glass-card" key={index}>
              <Image src={'/NAVIGATE_4K_S20_loop-poster@sm.webp'} alt={"nf"} width={500} height={300} className='token-img'/>
              <div className="tokenclaims-content-text">
                <div className="token-text-top">
                  <p className={`current_condition ${activeFilter== "Ongoing"? "Ongoing":""} ${activeFilter== "Upcoming"? "Upcoming":""} ${activeFilter== "Ended"? "Ended":""} ${activeFilter== "All"? "All":""} `}>{token.condition}</p>
                  <p className='date'>
                    {token.startDate} - {token.endDate}
                  </p>
                </div>
                <h2>{token.name}</h2>
                <p>{token.desc}</p>
                <button>{token.action}</button>
              </div>
            </div>
          )))}
        </div>
      </div>

        
    </div>
  )
}

export default page