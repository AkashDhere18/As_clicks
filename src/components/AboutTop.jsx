import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const AboutTop = () => {
  return (
    <div className='top  flex justify-center items-center   bg-cover bg-[url(https://images.unsplash.com/photo-1779253806162-a58a28c1c81a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
            <div className='flex flex-col '>

                <h1 className='text-white text-2xl leading-9 text-center whitespace-nowrap font-heading' >
                    Capturing Emotions 
                </h1>
                <h1 className='italic text-[#C8A96B] text-center whitespace-nowrap'>
                    With Elegance 
                </h1>
        
            </div>
    </div>
  )
}

export default AboutTop