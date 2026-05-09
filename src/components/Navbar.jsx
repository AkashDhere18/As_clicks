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

      <div className='flex flex-row justify-between items-center gap-20 align-center py-3 px-8'>
        <div className='h-10 flex items-center text-[#C8A96B] text-3xl font-semibold'>As Clicks</div>

        <div className='gap-15 flex flex-row items-cente text-white text-sm'>
          <Link className='h-10 flex items-center' to='/'>HOME</Link>
          <Link className='h-10 flex items-center' to='/about_us'>ABOUT US</Link>
          <Link className='h-10 flex items-center' to='/services'>SERVICES</Link>
          <Link className='h-10 flex items-center' to='/our_work'>OUR WORK</Link>
          <Link className='h-10 flex items-center' to='/contact_us'>CONTACT US</Link>
        
          <Link to='/contact_us'
            className='border-2 rounded-full border-[#C8A96B] px-4 py-2 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black transition-all duration-300 ease-in-out' >BOOK SESSION</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar