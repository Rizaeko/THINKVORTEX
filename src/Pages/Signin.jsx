import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Signin = () => {
  return (
    <>
      <div className="flex justify-center">
        <SignIn signUpUrl='/Register'/>
      </div>
    </>
  )
}

export default Signin