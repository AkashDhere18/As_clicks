// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import "tailwindcss";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {

//     const handelScrool = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       }
//       else {
//         setScrolled(false)
//       }
//     };

//     window.addEventListener("scroll", handelScrool);

//     return () => window.removeEventListener("scroll", handelScrool);
//   }, []);

//   return (
//     <nav className={` fixed h-20    top-0 left-0 w-full z-50 transition-all duration-300 
//                       ${scrolled ? "h-16 bg-black/80 backdrop-blur-md shadow-md py-3 "
//         : "bg-transparent py-5"
//       } `}>

//       <div className='flex flex-row justify-between items-center gap-20 align-center py-3 px-8'>
//         <div className='h-10 flex items-center text-[#C8A96B] text-3xl font-semibold'>As Clicks</div>

//         <div className='gap-15 flex flex-row items-cente text-white text-sm'>
//           <Link className='h-10 flex items-center' to='/'>HOME</Link>
//           <Link className='h-10 flex items-center' to='/about_us'>ABOUT US</Link>
//           <Link className='h-10 flex items-center' to='/services'>SERVICES</Link>
//           <Link className='h-10 flex items-center' to='/our_work'>OUR WORK</Link>
//           <Link className='h-10 flex items-center' to='/contact_us'>CONTACT US</Link>
        
//           <Link to='/contact_us'
//             className='border-2 rounded-full border-[#C8A96B] px-4 py-2 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black transition-all duration-300 ease-in-out' >BOOK SESSION</Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

//Claud ai code

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoB from '../assets/IMG_0185.PNG'
import logoW from '../assets/IMG_0186.PNG'
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: 'HOME', to: '/' },
    { label: 'ABOUT US', to: '/about_us' },
    { label: 'SERVICES', to: '/services' },
    { label: 'OUR WORK', to: '/our_work' },
    { label: 'CONTACT US', to: '/contact_us' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "h-16 bg-black/80 backdrop-blur-md shadow-md" : "h-20 bg-transparent"}
    `}>
      <div className="flex flex-row justify-between items-center h-full px-8">

        {/* Logo */}
        <div className="text-[#C8A96B] text-3xl font-semibold">
          <Link to='./'>
          <img className='w-20  md:w-30 lg:w-35'  src= {logoW} alt='As_clicks'/>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-row items-center gap-6 text-white text-sm">
          {navLinks.map(({ label, to }) => (
            <Link key={label} className="h-10 flex items-center font-body text-gray-200/70 hover:text-[#C8A96B] transition-colors duration-200" to={to}>
              {label}
            </Link>
          ))}
          <Link
            to="/contact_us"
            className="border-2 rounded-full border-[#C8A96B] px-4 py-2 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black transition-all duration-300 ease-in-out"
          >
            BOOK SESSION
          </Link>
        </div>

        {/* Hamburger Button — visible on md and below */}
        <button
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#C8A96B] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#C8A96B] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#C8A96B] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-md shadow-lg
        transform transition-transform duration-300 ease-in-out z-40
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col items-start gap-2 pt-24 px-8 text-white text-sm">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="w-full py-3 border-b border-white/10 hover:text-[#C8A96B] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact_us"
            onClick={() => setMenuOpen(false)}
            className="mt-4 border-2 rounded-full border-[#C8A96B] px-4 py-2 text-[#C8A96B] hover:bg-[#C8A96B] hover:text-black transition-all duration-300 ease-in-out"
          >
            BOOK SESSION
          </Link>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar