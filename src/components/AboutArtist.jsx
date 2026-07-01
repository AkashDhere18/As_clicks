import React from 'react'

const AboutArtist = () => {
  return (
    <div className='text-white bg-black/97 px-4 py-15'>
        <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl mb-8 font-heading'>Meet The Founder</h1>
            <p className='text-lg font-body'>The creative force behind every photograph, committed to capturing genuine emotions and turning life's special moments into timeless memories.</p>
        </div>
        <div className='flex justify-center items-center '>
            <div className='artist-card w-full  sm:max-w-60 md:max-w-80 ' >
                <div className='md:h-[480px] md:overflow-hidden'>
                <img className='w-full md:h-full object-cover' src='https://res.cloudinary.com/jvvmdy5y/image/upload/WhatsApp_Image_2026-07-01_at_3.59.26_PM_cbhhhd.jpg'/>
                </div>
                <div className='h-20 border py-3 px-5' >
                    <h3 className='text-lg text-[#C8A96B] font-body'>Ashish Swami</h3>
                    <h2 className='text-xl font-heading'>Founder & Lead Photographer</h2>
                </div>
            </div>

        </div>

    </div>
  )
}

export default AboutArtist