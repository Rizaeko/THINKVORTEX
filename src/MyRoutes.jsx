import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Signin from './Pages/Signin'
import Layout from './Layout/Layout'
import Register from './Pages/Register'
import BlogPost from './Pages/BlogPost'
import UserEditor from './Pages/UserEditor'
import PageNotFound from './Pages/PageNotFound'
import Posts from './Pages/Posts'


const MyRoutes = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<BlogPost/>}></Route>
                    <Route path='/AboutUs' element={<Aboutus/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/SignIn' element={<Signin/>}/>
                    <Route path='/Register' element={<Register/>} />
                    <Route path='/BlogPost' element={<BlogPost/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/UserEditor' element={<UserEditor/>}/>
                    <Route path='/Posts' element={<Posts/>}/>
                </Route>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default MyRoutes