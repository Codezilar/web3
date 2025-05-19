import Image from 'next/image'
import React from 'react'
import { portAsset } from '../data'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio-top glass-card'>
            <h1>Portfolio Value</h1>
            <h2>$13,057.23</h2>
            <div className="portfolio-opt">
                <button className='port-same-btn'>
                    <p>Send</p>
                </button>
                <button className='port-same-btn'>
                    <p>Recieve</p>
                </button>
                <button className='port-same-btn'>
                    <p>Swap</p>
                </button>
                <button className='port-buy'>
                    <p>Buy</p>
                </button>
            </div>
        </div>
        <div className="port-asset">
            <h1>My Assets</h1>
            <div className="port-asset-container">
                {portAsset.map(((port, index) =>(
                    <div className="port-asset-content glass-card" key={index}>
                        <div className="port-asset-top">
                            <div className="port-asset-top-left">
                                <Image src={port.img} className='rounded-full' alt='coin' height={50} width={50} />
                                <div className="port-asset-top-text">
                                    <h4>{port.coin}</h4>
                                    <p>{port.coinShort}</p>
                                </div>
                            </div>
                            <div className="port-asset-top-right">
                                %
                            </div>
                        </div>
                        <span>
                            <h1>${port.worth}</h1>
                            <p>{port.percent}%</p>
                        </span>
                        <span>
                            <h2>Balance: {port.balance} {port.coinShort}</h2>
                            <h3>${port.balanceWorth}</h3>
                        </span>
                    </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio