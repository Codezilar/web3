import Image from 'next/image'
import React from 'react'
import { portAsset } from '../data'

const Trending = () => {
  return (
    <div className='portfolio'>
        <div className='portfolio-top glass-card'>
            <h1>Portfolio Value</h1>
            <h5>
                Discover the hottest tokens in the market right now
            </h5>
        </div>
        <div className="port-asset">
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
                    </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default Trending