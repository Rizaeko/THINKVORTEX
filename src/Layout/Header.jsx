import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Components/Image';
import { SearchIcon, SquarePen } from 'lucide-react';


const Header = () => {
  return (
    <>
    <header>
      <nav className='flex items-center h-12 my-5 cursor-pointer font-medium'>
        <Link to={'/'}>
        <div>
          <Image src="logo.png" w="175" h="50"/> 
        </div>
        </Link>
        <div class="flex items-center max-w-sm rounded-full bg-gray-50 ml-4">   
            <div class="relative w-full ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                    <SearchIcon size={20} color='gray'/>
                </div>
                <input type="text" class="text-sm rounded-full w-full ps-10 p-2.5 focus:outline-none " placeholder="Search"  />
            </div>
        </div>
        
        <div className='ml-auto flex items-center space-x-reverse space-x-2 gap-8'>       
          <SignedOut>
            <Link to={'/SignIn'}>
              <button className='py-2 px-4 transition-colors duration-300 bg-[var(--primary-color)] rounded-full text-white hover:bg-[#f95353]'>
                Sign in
              </button>
            </Link>
          </SignedOut>
          <SignedIn className="w-11 h-11">
            <Link to={'UserEditor'}>
            <div className='flex gap-4 hover:underline'>
              Write
              <div>
                <SquarePen />
              </div>
            </div>
            </Link>
            <UserButton />
          </SignedIn>
        </div> 

      </nav> 
    </header>
    </>
  )
}

export default Header