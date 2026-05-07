import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col justify-evenly  h-screen bg-[url("https://images.unsplash.com/photo-1665960213530-3fb10da1f25e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]  bg-cover '>
            <div className='h-full flex flex-col justify-evenly '>
                <div className='text-white text-center'>
                    <h1 className='font-serif text-7xl font-medium'>EVERY LOVE STORY<br />
                        DESERVES TO BE<br />
                        REMEMBERED <span className='italic text-[#C8A96B]'>forever</span></h1>
                    <p>LUXARY WEEDING AND CINEMETIC PHOTOGRAPHY CRAFTED WITH EMOTIONS,<br /> TRADITIONS, AND TIMELESS STORYTELLING.</p>
                </div>
                <div>
                    <button>EXPLORE STORIES</button>
                    <button>BOOK SECTION</button>
                </div>
            </div>
        </div>
    )
}

export default Home