import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "tailwindcss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handelScrool = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      }
      else {
        setScrolled(false)
      }
    };

    window.addEventListener("scroll", handelScrool);

    return () => window.removeEventListener("scroll", handelScrool);
  }, []);

  return (
    <nav className={` fixed h-20    top-0 left-0 w-full z-50 transition-all duration-300 
                      ${scrolled ? "h-16 bg-black/80 backdrop-blur-md shadow-md py-3 "
        : "bg-transparent py-5"
      } `}>

      <div className='flex  flex-row justify-center items-center gap-20 align-center py-3'>
        <div className='text-[#C8A96B]'>As Clicks</div>
        <div className='gap-15 flex flex-row text-white'>
          <Link to='/about_us'>ABOUT US</Link>
          <Link to='/services'>SERVICES</Link>
          <Link to='/our_work'>OUR WORK</Link>
          <Link to='/contact_us'>CONTACT US</Link>
        </div>
        <div>
          <Link to='contact_us'
            className='border-2 rounded-full border-[#C8A96B] px-4 py-2 text-[#C8A96B] ' >BOOK SESSION</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar