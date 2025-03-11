import React from 'react'
import blog_image from '../Images/Nepal.jpg'
import '../style/BlogPost.css'

const BlogPost = () => {
  return (
    <>
    <article className="flex bg-white transition hover:shadow-xl mb-10">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time
            datetime="2025-03-09"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            >
            <span>2025</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Mar 9</span>
            </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
            <img
            alt="blog image"
            src={blog_image}
            loading='loading'
            className="aspect-square h-full w-full object-cover p-3"
            />
        </div>

        <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h3 className="font-bold uppercase text-3xl">
                Cultural sites in Nepal
                </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed">
            Nepal's culture is a vibrant blend of traditions, religions, festivals, and diverse ethnic groups, shaped by its rich history and geographical diversity.
            </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end pb-3 pr-3">
            <div className="block shadow-lg hover:shadow-[#F84343]/50 bg-[#F84343] px-5 py-3 text-center text-xs font-bold uppercase text-white cursor-pointer">
                Read Blog
            </div>
            </div>
        </div>
    </article>

    
    </>
  )
}

export default BlogPost