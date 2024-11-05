import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

const Router = () => {
    function Home (){
        return(
            <h1>Home</h1>
        )
    }
    function About (){
        return(
            <h1>About</h1>
        )
    }
    function Contact (){
        return(
            <h1>Contact</h1>
        )
    }
  return (
    <div>
        <BrowserRouter>
        <nav>
            <Link to={'/'}>Home</Link>
            {" "}
            <Link to={'/about'}>About</Link>
            {" "}
            <Link to={'/contact'}>Contact</Link>
        </nav>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router 