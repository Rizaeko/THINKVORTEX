import React from 'react'
import { Link } from 'react-router-dom'

const BlogCategory = () => {
  return (
    <>
    <div className='hidden md:flex items-center justify-center gap-8 mt-2.5'>
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to='/Posts' className='bg-[#F84343] text-white rounded-full px-4 py-2'>
                All
            </Link>
            <Link to='/Posts?cat=web-design' className=' hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Web Design
            </Link>
            <Link to='/Posts?cat=finance' className=' hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Finance
            </Link>
            <Link to='/Posts?cat=marketing' className=' hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Marketing
            </Link>
            <Link to='/Posts?cat=entrepreneur' className=' hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Entrepreneur
            </Link>
            <Link to='/Posts?cat=sports' className='hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Sports
            </Link>
            <Link to='/Posts?cat=productivity' className='hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Productivity
            </Link>
            <Link to='/Posts?cat=technology' className='hover:bg-[#F84343] hover:text-white rounded-full px-4 py-2'>
                Technology
            </Link>
            
        </div>
    </div>
    </>
  )
}

export default BlogCategory