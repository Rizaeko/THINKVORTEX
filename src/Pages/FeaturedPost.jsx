import React from 'react'
import Image from '../Components/Image'

const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col'>
        <div className="">
            <Image src="Nepal.jpg" className="rounded-3xl object-cover" />
            <div className='text-4xl'>
                Nepal's Best Sites
            </div>
        </div>
    </div>
  )
}

export default FeaturedPost