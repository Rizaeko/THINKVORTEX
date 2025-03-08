import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Layout from './Layout/Layout'


const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/blog' element={<Blog/>}/>
                    <Route path='/aboutus' element={<Aboutus/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/signin' element={<Signin/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes