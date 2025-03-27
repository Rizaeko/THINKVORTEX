import React, { useState } from 'react'
import Image from '../Components/Image'
import { Link } from 'react-router-dom'
import { PenSquare, Search, SearchIcon } from 'lucide-react'


const Navbar = () => {


  return (
    <nav className='navbar flex'>
        <Link to={"/"}>
            <Image 
                src="title-logo.png"
                alt="Logo"
                className=" "
            />
        </Link>

        <div class="w-full max-w-sm md:show">
            <div class="relative flex items-center">
                <Search className='absolute w-5 h-5 top-2.5 left-2.5 text-slate-600'/>
            
                <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search..." 
                />  
            </div>
        </div>
        <div className='flex'>
            <Link to={"/WritePost"} className='hidden md:flex gap-2 link'>
                <PenSquare />
                <p>Write</p>
            </Link>

            <Link to={"/Signin"} className='bg-[var(--primary-color)] rounded-full py-2 px-2 text-[min(10vw,16px)] w-1/2 flex items-center justify-center text-white '>
                Sign In
            </Link>

            <Link to={"/Register"} className='rounded-full py-2 px-2 text-[min(10vw,16px)] w-1/2 flex items-center justify-center'>
                Sign Up
            </Link>
            </div>
    </nav>
  )
}

export default Navbar