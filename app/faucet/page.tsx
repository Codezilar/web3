import React from 'react'
import { LuDroplets } from "react-icons/lu";

const page = () => {
  return (
    <div className='faucet'>
        <div className="faucet-text">
            <h1 className='gradient-text'>Testnet Faucet</h1>
            <p>Get testnet tokens for development and testing purposes</p>
        </div>
        <div className="faucet-container">
            <div className="faucet-content glass-card">
                <div className="faucet-item">
                    <h2>Select Network</h2>
                    <select name="" id="">
                        <option value="">Monad Testnet</option>
                        <option value="">Arbitrum Testnet</option>
                        <option value="">Optimism Testnet</option>
                        <option value="">Polygon Mumbai</option>
                        <option value="">Base Georii</option>
                    </select>
                </div>
                <div className="faucet-item">
                    <h2>Select Token</h2>
                    <select name="" id="">
                        <option value="">ETH</option>
                    </select>
                </div>
                <div className="faucet-item">
                    <h2>Your Wallet Address</h2>
                    <input type='text' placeholder='0x...'/>
                </div>
                <button className='button'>
                    <LuDroplets /> <p>Request ETH Tokens</p>
                </button>
                <div className="faucet-content-text">
                    <h3>Please note:</h3>
                    <span><p>Each address can only request tokens once every 24 hours</p></span>
                    <span><p>Use these tokens only for testing and development purposes</p></span>
                    <span><p>Token amounts are limited to prevent abuse</p></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page