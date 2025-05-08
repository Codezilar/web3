import { navItems } from '../data'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='footer'>
        <div className="footer-container">
            <div className="left-footer">
                <h1 className='gradient-text '>
                    FlowDex
                </h1>
                <p>
                    A comprehensive DeFi platform with multiple features for token and NFT interactions, swapping, claiming, and faucet services.
                </p>
                <div className="social-footer">
                    <span>

                    </span>
                </div>
            </div>
            <div className="other-footer">
                <h2>
                    Platform
                </h2>
                <ul>
                    {navItems.map((item, index) =>(
                        <Link href={item.link} key={index}>
                            <p>{item.name}</p>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="other-footer">
                <h2>
                    Company
                </h2>
                <ul>
                    <Link href={'#'}><p>About Us</p></Link>
                    <Link href={'#'}><p>Terms of Service</p></Link>
                    <Link href={'#'}><p>Privacy Policy</p></Link>
                    <Link href={'#'}><p>Contact</p></Link>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© {year} FlowDex. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer