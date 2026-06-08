import React from 'react'
import './Bookyourstory.css'
import { Link } from 'react-router-dom'

const Bookyourstory = () => {
    return (
        <div className='main h-100 flex justify-center items-center   bg-cover bg-[url(https://images.unsplash.com/photo-1619734089700-842e56497353?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
            <div className='flex flex-col '>

                <h1 className='text-white text-2xl leading-9 text-center whitespace-nowrap' >
                    Les's Create Somthing 
                </h1>
                <h1 className='italic text-[#C8A96B] text-center whitespace-nowrap'>
                    Beautiful Together
                </h1>
                <Link to='/contact_us' className='link font-semibold text-sm mr-2 py-4 px-8 bg-white hover:bg-[#C8A96B] transition-all duration-300 ease-in-out'>BOOK YOUR STORY</Link>
            </div>
        </div>
    )
}

export default Bookyourstory