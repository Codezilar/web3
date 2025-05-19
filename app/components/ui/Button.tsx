"use client"
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link'
import React from 'react'
import { BiWallet } from "react-icons/bi";
import { useUser } from "@clerk/nextjs";

const Button = () => {
    const { user } = useUser();
    const ethAddress = user?.web3Wallets?.[0]?.web3Wallet;
    
    return (
        <>
            <SignedOut>
                <Link href={"/login"}>
                    <button className='button'>
                        <BiWallet /> 
                        <span>Connect Wallet</span>
                    </button>
                </Link>
            </SignedOut>
            <SignedIn>
                <button className='button'>
                    <BiWallet /> 
                    <span>
                        {ethAddress ? `${ethAddress.slice(0, 6)}...` : 'No Wallet'}
                    </span>
                </button>
            </SignedIn>
        </>
    )
}

export default Button