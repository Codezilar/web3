import React from 'react'
import TokenClaim from '../components/TokenClaim'


const page = () => {
  
  return (
    <div className='tokenclaims'>
      <h1 className='gradient-text'>NFTs Claims</h1>
      <div className="token-search">
        <input type="text" placeholder='Search token claims...' />
      </div>
      <TokenClaim />
        
    </div>
  )
}

export default page