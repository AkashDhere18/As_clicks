import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about_us' element={<About />}></Route>
      </Routes>
     <Footer /> 
    </BrowserRouter>
  )
}

export default App