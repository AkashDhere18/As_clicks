import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaRegEnvelope , FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import logoW from '../assets/IMG_0186.PNG'


const Footer = () => {
  return (
    <div className=' bg-black text-white px-6 md:px-20 lg:px-40  Footer pt-20 pb-15'>

      <div className='flex flex-col gap-12 md:flex-row md:justify-between Footer-top w-full pb-15'>

        <div className='max-w-sm Footer-top-left' >

          {/* <h2 className='text-[#C8A96B] text-3xl mb-6 font-heading'>ASPF</h2> */}
          <img src={logoW} className='w-18 h-5 md:w-25 md:h-8 mb-6' />

          <p className='text-gray-400 text-lg leading-7 mb-6 font-body'>Luxury wedding and cinematic photography crafted with emotions, traditions, and timeless storytelling.</p>

          <div className='flex gap-5'>

            <button><a  href='https://www.instagram.com/_as_clicks__' target='_blank'
                 rel="noopener noreferrer"><FaInstagram size={18} /></a></button>

            <button><a href='mailto:asclicks77@gmail.com' target='_blank'
                 rel="noopener noreferrer"><FaRegEnvelope size={18} /></a></button>

          </div>

        </div>

        <div>
          <h3 className='text-xl font-semibold mb-6 font-heading'>Explore</h3>
          <ul className='space-y-4 text-gray-400 text-md font-semibold font-body'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about_us'>About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/our_work'>Our Work</Link></li>
            <li><Link to='/contact_us'>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold mb-6 font-heading'>Contact</h3>
          <ul className='text-gray-400 space-y-4 text-md font-semibold font-body'>
            <li className='flex gap-3 items-center'>
              <FaRegEnvelope color='#C8A96B' size={16} />
              <a href='mailto:helloasclick@gmail.com'>helloasclick@gmail.com</a></li>
            <li className='flex gap-3 items-center'>
              <FaPhoneAlt color='#C8A96B' size={16}/>
              <a href='tel:+918379898924'>+91 83798 98924</a></li>
            <li className='flex gap-3 items-center'>
              <IoLocationOutline color='#C8A96B' size={16}/>
              <a href='https://maps.app.goo.gl/FBaCUujhUt5MaA9y8' target='_blank' rel="noopener noreferrer">Sangli , India</a></li>
          </ul>
        </div>
      </div>

      <div className='text-center  md:flex justify-between items-center Footer-bottom pt-10 '>
        <p className='mb-2'>© 2026 ASPF. All rights reserved.</p>
        <div className='space-x-3'>
          <Link >Privacy Policy</Link>
          <Link >Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer