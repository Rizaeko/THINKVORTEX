import React from 'react'
import BlogCategory from './BlogCategory'
import { Link } from 'react-router-dom'
import FeaturedPost from './FeaturedPost'
import Image from '../Components/Image'



const BlogPost = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Article - Left Side */}
        <FeaturedPost />

        {/* Right Side Articles */}
        <div className="flex flex-col gap-6">
          {/* Top Right Article */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <Image
                src="karina.jpg"
                alt="Swimmer in action"
                fill
                className="w-full h-34 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded">
                  SPORTS
                </span>
                <p className="text-gray-500 text-sm">February 24, 2025</p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold truncate">Olympics 2025: The Athletes to Watch</h2>
            </div>
          </div>

          {/* Bottom Right Article */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative ">
              <Image src="Nepal.jpg" alt="Nepal" fill className="w-full h-34 object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded">
                  POLITICS
                </span>
                <p className="text-gray-500 text-sm">February 24, 2025</p>
              </div>
              <h2 className="text-xl md:text-2xl font-bold truncate">Election 2025: Key Issues Shaping the Campaign Trail</h2>
            </div>
          </div>
        </div>
      </div>

      {/* More Articles Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">More Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <Image
                  src="karina.jpg"
                  alt="News thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 bg-gray-700 text-white text-xs font-semibold rounded mb-2">
                  CATEGORY
                </span>
                <h3 className="text-lg font-bold mb-2">Article Title Goes Here</h3>
                <p className="text-gray-500 text-sm">February 24, 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogPost