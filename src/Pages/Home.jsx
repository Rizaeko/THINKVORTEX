import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="">
        <div className="max-w-screen-xl px-4 py-32 lg:flex lg:h-[450px] lg:items-center ">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-7xl font-extrabold">
              Nepal's Best
              <strong className="font-extrabold text-[#F84343] sm:block"> Blog Website. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              "Your Voice, Your Story, Your Platform."
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to={'/Blog'}>
              <div className="block w-full rounded-full bg-[#F84343] px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#F84343] focus:ring-3 focus:outline-hidden sm:w-auto">
                Start reading
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home