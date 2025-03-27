import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../Components/Image';
import { SearchIcon, SquarePen } from 'lucide-react';


const Header = () => {
  return (
    <>
    <header>
      <nav className='navbar'>
        <Link to={'/'}>
          <Image src="title-logo.png" w="60" h="50"/>   
        </Link>
        <div class="search-bar">   
            <div class="relative w-full ">
                <div class="search-icon">
                    <SearchIcon size={20} color='gray'/>
                </div>
                <input type="text" class="search-input" placeholder="Search"  />
            </div>
        </div>
        
        <div className='navbar-right'>       
        
            <Link to={'WritePost'}>
              <div className='flex gap-4 hover:underline'>
              <SquarePen />
                Write
              </div>
            </Link>

            <Link to={'/SignIn'} className='signin'>
                Sign in     
            </Link>

            <Link to={'/Register'} className='signup'>
                Sign Up     
            </Link>
      
        </div> 

      </nav> 
    </header>
    </>
  )
}

export default Header