import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { PenTool, Menu, X, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header>
      <div className="mb-3 w-full h-16 md:h-20 flex items-center gap-4">

        <Link to={'/'}>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <img src='/logov2.svg' className='' alt='logo' />
          </div>
        </Link>

        <div className="border-2 border-gray-400 p-2 rounded-full flex gap-2 ">
          <SearchIcon color='gray'/>
          <input type='text' placeholder='Search' className='bg-transparent outline-0'/>
        </div>
        {/*burger_menu*/}
        <div className="md:hidden">

          <div 
            className="cursor-pointer flex absolute z-11 right-2.5" 
            onClick={() => setOpen((prev) => !prev)}
            >
            {open ? <X size={32} color='#242323'/>:<Menu size={32} color='#242323'/>}
          </div>

          <div className={`w-80 h-screen flex flex-col items-center justify-center z-10 gap-8 font-medium text-lg absolute top-0 bg-[#f3f6f4] transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/AboutUs'}>About</Link>
            <button className='py-2 px-4 rounded-3xl bg-[#f84343] text-white'>
              <Link to={'/SignIn'}>Sign in</Link>
            </button>
          </div> 
          </div>

        <div className="hidden md:flex items-center gap-2 xl:gap-4 font-medium xl:flex ml-auto">
          <div className="py-2 px-4 hover:bg-[#f84343] hover:text-white hover:rounded-md duration-300 ease-in-out"><Link to={'/Home'}>Home</Link></div>

          <div className="py-2 px-4 hover:bg-[#f84343] hover:text-white hover:rounded-md duration-300 ease-in-out"><Link to={'/AboutUs'}>About</Link></div>

          <header>
      <SignedOut>
        <Link to={'/SignIn'}>
          <button className='py-2 px-4 hover:bg-[#f84343] hover:text-white hover:rounded-md duration-300 ease-in-out'>
            Sign in
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header