import React from 'react'
import Portfolio from '../components/Portfolio'
import Trending from '../components/Trending'

const page = () => {
  return (
    <div className='dashboard'>
      <div className="dash-top">
        <div className="dash-top-left">
          <h1 className='gradient-text'>
            Dashboard
          </h1>
          <p>Track your portfolio and discover trending tokens</p>
        </div>
        <div className="dash-top-right">
          <button>
            <p>Filter</p>
          </button>
          <button>
            <p>Search</p>
          </button>
        </div>
      </div>
      <div className="dashboar-toggle">
        <button className='dash-active'>
          My Portfolio
        </button>
        <button>
          Trending
        </button>
      </div>
      <Portfolio />
      <Trending />
        
    </div>
  )
}

export default page