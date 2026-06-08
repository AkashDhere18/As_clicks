import React from 'react'
import { Link } from 'react-router-dom'
import Bookyourstory from '../components/Bookyourstory'
import OurDescription from '../components/ourDescription'

const Home = () => {
    return (
        <>

            <div className='sm:px-8 flex flex-col justify-evenly  h-screen bg-[url("https://images.unsplash.com/photo-1775566416299-f7bf0e06bfe7?q=80&w=2000&auto=format&fit=crop")]  bg-cover '>
                <div className='h-full flex flex-col justify-evenly '>
                    <div className='text-white text-center '>
                        <h1 className='font-serif text-7xl font-medium tracking-wide leading-[1.2] mb-6'>EVERY LOVE STORY<br />
                            DESERVES TO BE<br />
                            REMEMBERED <span className='italic text-[#C8A96B]'>forever</span>
                        </h1>
                        <p className='font-Poppins tracking-widest text-lg'>LUXARY WEEDING AND CINEMETIC PHOTOGRAPHY CRAFTED WITH EMOTIONS,<br /> TRADITIONS, AND TIMELESS STORYTELLING.</p>
                    </div>
                    <div className='text-center -mt-8'>
                        <Link to='/contact_us' className='font-semibold text-sm mr-2 py-4 px-8 bg-[#C8A96B] hover:bg-white transition-all duration-300 ease-in-out'>EXPLORE STORIES</Link>
                        <Link to='/contact_us' className='font-semibold text-white text-sm ml-2 border-1 border-white py-3.5 px-8 backdrop-blur-md hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300 ease-in-out'>BOOK SECTION</Link>
                    </div>
                </div>
            </div>
            <Bookyourstory />
            {/* <OurDescription /> */}
        </>
    )
}

export default Home