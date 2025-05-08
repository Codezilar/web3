import React from 'react'

const page = () => {
  return (
    <div className='swap'>
        <div className="swap-container">
            <h1 className='gradient-text'>Swap Tokens & NFTs</h1>
            <div className="dashboar-toggle swap-toggle">
                <button className='dash-active'>
                    Tokens
                </button>
                <button>
                    NFTs
                </button>
            </div>
            <div className="swap-content glass-card">
                <div className="swap-contenter">
                    <span>
                        <h3>From</h3>
                        <p>Balance: 1.5 ETH</p>
                    </span>
                    <div className="swap-item">
                        <input type="number" placeholder='1' />
                        <select name="" id="">
                            <option value="">Bitcoin (BTC)</option>
                            <option value="">Ethereum (ETH)</option>
                            <option value="">Solana (SOL)</option>
                            <option value="">Cardano (ADA)</option>
                            <option value="">Polygon (MATIC)</option>
                        </select>
                    </div>
                </div>
                <div className="swap-arrow">
                    <span>

                    </span>
                </div>   
                <div className="swap-contenter">
                    <span>
                        <h3>To (estimated)</h3>
                        <p>Balance: 500 MATIC</p>
                    </span>
                    <div className="swap-item">
                        <input type="number" placeholder='1500' />
                        <select name="" id="">
                            <option value="">Polygon (MATIC)</option>
                            <option value="">Ethereum (ETH)</option>
                            <option value="">Solana (SOL)</option>
                            <option value="">Cardano (ADA)</option>
                            <option value="">Polygon (MATIC)</option>
                        </select>
                    </div>
                </div> 
                <div className="rate">
                    <div className="rate-left">
                        <p>Rate</p>
                        <p>Fee</p>
                        <p>Slippage</p>
                    </div>
                    <div className="rate-right">
                        <p>1 ETH = 1500 MATIC</p>
                        <p>0.3%</p>
                        <p>0.5%</p>
                    </div>
                </div>
                <div className="swap-navs">
                    <button>
                        
                    </button>
                    <button>

                    </button>
                </div>
                <button className='swap-final-btn'>
                    Swap
                </button>
            </div>
        </div>
    </div>
  )
}

export default page