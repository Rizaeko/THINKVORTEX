import React from 'react'
import Nepal from '../Images/Nepal.jpg'
import { Link } from 'react-router-dom'

const PageViewed = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div className="flex gap-8">
            <div className='hidden lg:block w-2/5'>
                    <img src={Nepal}/>
            </div>
            <div className="lg:w-3/5 flex flex-col gap-8">
                <h1>
                    The Future of Technology: What Lies Ahead? 
                </h1>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link>Jason</Link>
                    <span>on</span>
                    <Link>Mar 17 2025</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageViewed