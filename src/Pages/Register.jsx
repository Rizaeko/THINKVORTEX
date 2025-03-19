import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center'>
      <SignUp signInUrl='/Signin'/>
    </div>
  )
}

export default Register