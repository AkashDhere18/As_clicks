import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/heroSection/DSC00581.jpg (3) (1).webp'

const HomeHero = () => {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    return (
        <>
            <style>{`
                @keyframes zoomOut {
                    from { transform: scale(1.15); }
                    to   { transform: scale(1); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .anim-zoom {
                    animation: zoomOut 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
                .anim-fade-up-1 {
                    opacity: 0;
                    animation: fadeUp 0.9s ease forwards;
                    animation-delay: 0.4s;
                }
                .anim-fade-up-2 {
                    opacity: 0;
                    animation: fadeUp 0.9s ease forwards;
                    animation-delay: 0.75s;
                }
                .anim-fade-up-3 {
                    opacity: 0;
                    animation: fadeUp 0.9s ease forwards;
                    animation-delay: 1.1s;
                }
            `}</style>

            <div className='relative overflow-hidden flex flex-col justify-evenly h-screen w-full sm:px-8'>

                {/* Background Image — zoom out on load */}
                <img
                    className={`absolute inset-0 w-full h-full object-cover object-center z-0 ${animate ? 'anim-zoom' : ''}`}
                    // src='https://images.unsplash.com/photo-1775566416299-f7bf0e06bfe7?q=80&w=2000&auto=format&fit=crop'
                    src={bgImage}
                    alt='Hero background'
                />

                {/* Overlay */}
                <div className='absolute inset-0 z-10 bg-black/30' />

                {/* Content */}
                <div className='h-full flex flex-col justify-evenly z-20'>
                    <div className='text-white text-center'>

                        {/* Heading — fade up first */}
                        <h1 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-wide leading-[1.2] mb-6 ${animate ? 'anim-fade-up-1' : 'opacity-0'}`}>
                            EVERY LOVE STORY<br className='hidden sm:block' />
                            DESERVES TO BE <br className='hidden sm:block' />
                            REMEMBERED <span className='italic ' style={{
                                background: 'linear-gradient(180deg, #f0c97a 0%, #C8A96B 50%, #9d7a3a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>forever</span>
                        </h1>

                        {/* Subtext — fade up second */}
                        <p className={`font-body text-gray-200/70 tracking-widest text-lg ${animate ? 'anim-fade-up-2' : 'opacity-0'}`}>
                            LUXARY WEEDING AND CINEMETIC PHOTOGRAPHY CRAFTED WITH EMOTIONS,
                            <br className='hidden sm:block' /> TRADITIONS, AND TIMELESS STORYTELLING.
                        </p>

                    </div>

                    {/* Buttons — fade up last */}
                    <div className={`text-center flex flex-col sm:flex-row justify-center items-center gap-3 -mt-18 ${animate ? 'anim-fade-up-3' : 'opacity-0'}`}>
                        <Link to='/our_work' className='font-semibold text-sm py-4 px-8 bg-[#C8A96B] hover:bg-white transition-all duration-300 ease-in-out'>
                            EXPLORE STORIES
                        </Link>
                        <Link to='/contact_us' className='font-semibold text-white text-sm border border-white py-3.5 px-8 backdrop-blur-md hover:border-[#C8A96B] hover:text-[#C8A96B] transition-all duration-300 ease-in-out'>
                            BOOK SECTION
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeHero