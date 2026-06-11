import React from 'react'
import { Link } from 'react-router-dom'

const HomeHero = () => {
    return (
        <>
            <div className='sm:px-8 flex flex-col justify-evenly  h-screen w-full bg-[url("https://images.unsplash.com/photo-1775566416299-f7bf0e06bfe7?q=80&w=2000&auto=format&fit=crop")]  bg-cover '>
                <div className='h-full flex flex-col justify-evenly '>
                    <div className='text-white text-center '>
                        <h1 className='font-serif text-4xl sm:text-5xl md:text-6xl lg:text:7xl font-medium tracking-wide leading-[1.2] mb-6'>EVERY LOVE STORY<br className='hidden sm:block' />
                            DESERVES TO BE<br className='hidden sm:block' />
                            REMEMBERED <span className='italic text-[#C8A96B]'>forever</span>
                        </h1>
                        <p className='font-Poppins tracking-widest text-lg'>LUXARY WEEDING AND CINEMETIC PHOTOGRAPHY CRAFTED WITH EMOTIONS,<br className='hidden sm:block' /> TRADITIONS, AND TIMELESS STORYTELLING.</p>
                    </div>
                    <div className='text-center flex flex-col sm:flex-row justify-center items-center gap-3 -mt-8'>
                        <Link to='/contact_us' className='font-semibold text-sm  py-4 px-8 bg-[#C8A96B] hover:bg-white transition-all duration-300 ease-in-out'>EXPLORE STORIES</Link>
                        <Link to='/contact_us' className='font-semibold text-white text-sm  border border-white py-3.5 px-8 backdrop-blur-md hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300 ease-in-out'>BOOK SECTION</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHero