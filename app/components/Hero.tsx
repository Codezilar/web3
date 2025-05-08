import Link from 'next/link'
import React from 'react'
import { BiWallet } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-container">
            <h1 className='gradient-text'>The Ultimate DeFi Experience Awaits You</h1>
            <p>Trade, swap, and claim tokens & NFTs all in one place with NexaFOZ. The most comprehensive DeFi platform for the modern crypto user.</p>
            <div className="hero-btn">
                <button className='button'>
                    <BiWallet />
                    <span>
                        Connect Wallet
                    </span>
                </button>
                <Link href={'/'} className='explore'>
                    <span>Explore Dashboard</span> 
                    <FaArrowRight className='ex-icon' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero