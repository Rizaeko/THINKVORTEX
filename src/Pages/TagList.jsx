import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const TagList = () => {
  return (
    <>
    <div className="w-auto my-5 flex items-center">
        <button className='rounded-full hover:bg-[#F84343] hover:text-white'><ChevronLeft size={24} /></button> 
        <button className='rounded-full hover:bg-[#F84343] hover:text-white'><ChevronRight size={24} /></button>
    </div>
    </>
  )
}

export default TagList