import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import coverImg from '../assets/aboutCover.jpg'

const AboutTop = () => {
  return (
    <div className='relative top overflow-hidden flex justify-center items-center   bg-cover '>
        {/* <div className='absolute inset-0 w-full h-full object-cover object-center z-0'> */}
          <img src={coverImg} className='absolute inset-0 w-full h-full object-cover object-center z-0'/>
          
        {/* </div> */}
        <div className='flex flex-col z-10'>
        
        <h1 className='text-white text-2xl leading-9 text-center whitespace-nowrap font-heading' >
          Capturing Emotions
        </h1>
        <h1 className='italic  text-center whitespace-nowrap' style={{
          background: 'linear-gradient(180deg, #f0c97a 0%, #C8A96B 50%, #9d7a3a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          With Elegance
        </h1>

      </div>
    </div>
  )
}

export default AboutTop