import React from 'react'
import { BiWallet } from "react-icons/bi";

const Connect = () => {
  return (
    <div className='connect'>
        <div className="connect-container glass-card">
            <h3 className='gradient-text'>Ready to Dive Into FlowDex?</h3>
            <p>
                Join thousands of users who have already simplified their DeFi experience with FlowDex.
            </p>
            <button className='button'>
                <BiWallet />
                <span>
                    Connect Wallet
                </span>
            </button>
        </div>
    </div>
  )
}

export default Connect