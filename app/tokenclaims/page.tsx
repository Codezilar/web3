import React from 'react'
import { tokenclaim } from '../data'

const page = () => {
  return (
    <div className='tokenclaims'>
      <h1 className='gradient-text'>Token Claims</h1>
      <div className="token-search">
        <input type="text" placeholder='Search token claims...' />
      </div>
      <div className="tokenclaims-container">
        <div className="token-navigate">
          <button className='tok-active'>Onging</button>
          <button>Upcoming</button>
          <button>Ended</button>
          <button>All</button>
        </div>
        <div className="tokenclaims-wrapp">
          {tokenclaim.map(((token, index) =>(  
            <div className="tokenclaims-content glass-card" key={index}>
              <img src={'/NAVIGATE_4K_S20_loop-poster@sm.webp'} alt={"nf"} className='token-img'/>
              <div className="tokenclaims-content-text">
                <div className="token-text-top">
                  <p className='ongoing'>{token.condition}</p>
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