"use client"
import React from 'react';
import { navItems } from '../data';
import Link from 'next/link';
import Button from './ui/Button';


const MobileNav = ({ first, onClose }: { first: boolean; onClose: () => void }) => {
  return (
    <div className={`mobileNav ${first == true ? "active-mobile-nav": ""}`}>
        <ul>
            {navItems.map((nav, index) =>(
                <div key={index}>
                    <Link href={nav.link} className='navigations'  onClick={onClose}>
                        <span>{nav.icon}</span>
                        <p>{nav.name}</p>
                    </Link>
                </div>
            ))}
        </ul>
        <div onClick={onClose}>
            <Button />
        </div>
    </div>
  )
}

export default MobileNav