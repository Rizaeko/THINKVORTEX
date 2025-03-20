import React from 'react'
import Image from '../Components/Image'

const FeaturedPost = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="karina.jpg"
              alt="Woman eating healthy food"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded mb-2">
                MUSIC
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Korea's beautiful korean singer is part of a group called Aespa
              </h2>
              <p className="text-gray-200">February 24, 2025</p>
            </div>
          </div>
        </div>
  )
}

export default FeaturedPost