import { PenTool, Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <header>
      <div className="w-full h-16 md:h-20 flex items-center justify-between">
        <Link to={'/'}>
          <div className="flex items-center gap-4 text-2xl font-bold">
            <img src='/logo.svg' className='' alt='logo' />
          </div>
        </Link>

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

        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to={'/Home'}>Home</Link>
          <Link to={'/AboutUs'}>About</Link>
          <button className='py-2 px-4 rounded-3xl bg-[#f84343] text-white'>
            <Link to={'/SignIn'}>Sign in</Link>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header