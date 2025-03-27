import React from 'react'
import Image from '../Components/Image'
import { Link } from 'react-router-dom'

const PageViewed = () => {
  return (
    <>
        <main>
            <div className=''>
                <div className='flex h-[200px]'>                
                    <Image 
                        src="Nepal.jpg"
                        alt="Post Picture"
                        className="object-fill"
                    />
                </div>

            </div>
        </main>
    </>
  )
}

export default PageViewed