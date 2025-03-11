import React from 'react'
import BlogPost from './BlogPost'
import { ChevronLeft, Search } from 'lucide-react'
import TagList from './TagList'

const Blog = () => {
  return (
    <>
    <div class="w-full max-w-sm min-w-[200px]">
      <div class="relative">
        <input
          class=" w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-full pl-6 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow "
          placeholder="Search" 
        />
        <button className="absolute flex items-center right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 hover:text-[#F84343] transition-transform duration-300 hover:scale-110">
          <Search size={20} /> 
        </button>
      </div>
    </div>
    <TagList />
      <BlogPost />
        <div class="flex space-x-1">
    <button class="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#242323] hover:text-white hover:bg-[#F84343] hover:border-[#F84343] focus:text-white focus:bg-[#F84343] focus:border-[#F84343] active:border-[#F84343] active:text-white active:bg-[#F84343] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 items-center">
        Prev
    </button>
    <button class="min-w-9 rounded-md bg-[#F84343] py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#F84343] focus:shadow-none active:bg-[#F84343] hover:bg-[#F84343] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        1
    </button>
    <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#242323] hover:text-white hover:bg-[#F84343] hover:border-#F84343 focus:text-white focus:bg-[#F84343] focus:border-[#F84343] active:border-[#F84343] active:text-white active:bg-[#F84343] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        2
    </button>
    <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[#242323] hover:text-white hover:bg-[#F84343] hover:border-[#F84343]  focus:text-white focus:bg-[#F84343] focus:border-[#F84343]  active:border-[#F84343]  active:text-white active:bg-[#F84343]  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        3
    </button>
    <button class="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-[242323] hover:text-white hover:bg-[#F84343] hover:border-[#F84343]  focus:text-white focus:bg-[#F84343] focus:border-[#F84343]  active:border-[#F84343]  active:text-white active:bg-[#F84343]  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
        Next
    </button>
  </div>
    </>
  )
}

export default Blog