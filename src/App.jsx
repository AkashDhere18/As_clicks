import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'
import Work from './pages/Work'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about_us' element={<About />}></Route>
        <Route path='/our_work' element={<Work />}></Route>
        <Route path='/our_work/:category' element={<Gallery />}></Route>
        <Route path='/contact_us' element={<ContactUs />}></Route>
      </Routes>
     <Footer /> 
    </BrowserRouter>
  )
}

export default App