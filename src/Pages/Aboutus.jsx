import React from 'react'
import Image from '../Components/Image'

const Aboutus = () => {
  return (
    <>
      <main>
        <h1 className='flex justify-center text-4xl font-bold'>Team</h1>
        <section className='grid grid-cols-2 gap-2 mt-5'>
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <Image 
                src="bib.jpeg"
                alt="profile"
                className="h-[500px] " 
              />

              <article className='mt-3'>
                Jason
              </article>
            </div>
            
          </div>

          <div className='flex justify-center'>
            <div className="flex flex-col">
              <Image 
                  src="bib.jpeg"
                  alt="profile"
                  className="h-[500px] " 
                />
              <article className='mt-3'>
                Jason
              </article>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default Aboutus