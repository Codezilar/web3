"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { navItems } from '../data';
import MobileNav from './MobileNav';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
import Button from './ui/Button';

const Nav = () => {
    const [first, setfirst] = useState(false)
    
    const active = () =>{
        setfirst(prev => !prev)
    }
  return (
    <>
    <header className='nav'>
        <div className="navWrapper">
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
                <div className='nav-right'>
                    <Button />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <span className='cursor-pointer hamburger' onClick={active} >{first === true?(<FaTimes />):(<FaBars />)}</span>
                </div>
            </div>
        </div>
        <MobileNav first={first} onClose={() => setfirst(false)} />
    </header>
    </>
  )
}

export default Nav