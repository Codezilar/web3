import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='login'>
        <SignIn />
    </div>
  )
}

export default page