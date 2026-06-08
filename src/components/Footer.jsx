import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-black text-white Footer '>

      <div className='flex flex-col md:flex-row justify-between items-center Footer-top text-wrap'>

        <div className='leading-15 Footer-top-left' >
          <h2 className='text-3xl'>As_Clicks</h2>
          <p className='text-wrap'>Luxury wedding and cinematic photography crafted with emotions, traditions, and timeless storytelling.</p>
          <div className='flex gap-5'>
            <button><FaInstagram size={18} /></button>
            <button><FaRegEnvelope size={18} /></button>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>

        <div>
          <h3>contact us</h3>
          <ul>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between items-center  border-t-gray Footer-bottom '>
        <p>© 2026 As_clicks. All rights reserved.</p>
        <div >
          <Link >Privacy Policy</Link>
          <Link >Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer