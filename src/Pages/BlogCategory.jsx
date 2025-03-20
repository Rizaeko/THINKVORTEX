import React from 'react'
import { Link } from 'react-router-dom'

const BlogCategory = () => {
  return (
    <>
        <aside className='w-60 h-screen fixed'>
            <nav className='space-y-2 mt-4 flex flex-col'>
            <Link to='/Posts?cat=web-design' className=' hover:bg-[#f84343] hover:text-white rounded-xl px-4 py-2 gap-5'>
                Web Design
            </Link>
            <Link to='/Posts?cat=finance' className=' hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Finance
            </Link>
            <Link to='/Posts?cat=marketing' className=' hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Marketing
            </Link>
            <Link to='/Posts?cat=entrepreneur' className=' hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Entrepreneur
            </Link>
            <Link to='/Posts?cat=sports' className='hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Sports
            </Link>
            <Link to='/Posts?cat=productivity' className='hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Productivity
            </Link>
            <Link to='/Posts?cat=technology' className='hover:bg-[#F84343] hover:text-white rounded-xl px-4 py-2'>
                Technology
            </Link>
            </nav>
      </aside>
    
    </>
  )
}

export default BlogCategory