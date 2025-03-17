import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default Layout