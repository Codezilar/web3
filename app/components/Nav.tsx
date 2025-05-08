import Link from 'next/link'
import React from 'react'
import { navItems } from '../data';
import { BiWallet } from "react-icons/bi";

const Nav = () => {
  return (
    <header className='nav'>
        <div className="navContainer">
            <Link href={'/'}>
                <h3 className='gradient-text'>
                    NexaFOZ
                </h3>
            </Link>
            <ul>
                {navItems.map((nav, index) =>(
                    <div key={index}>
                        <Link href={nav.link} className='navigations'>
                            <span>{nav.icon}</span>
                            <p>{nav.name}</p>
                        </Link>
                    </div>
                ))}
            </ul>
            <button className='button'>
                <BiWallet /> 
                <span>
                    Connect Wallet
                </span>
            </button>
        </div>
    </header>
  )
}

export default Nav