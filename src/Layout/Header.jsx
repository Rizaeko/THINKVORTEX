import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <nav className="flex items-center justify-between p-6 pr-6 bg-white h-[75px]">
            <div className=''>
                <img src='/logo.svg' alt='logo' />
            </div>
            <div className="flex space-x-20  text-[#242323] p-4 font-medium ">
                <div className=""><Link to={'/blog'}>Blog</Link></div>
                <div className=""><Link to={'/aboutus'}>About us</Link></div>
                <div className=""><Link to={'/contact'}>Contact us</Link></div>
                <div className=""><Link to={'/signin'}>Sign in</Link></div>
            </div>
    </nav>
    </>
  )
}

export default Header