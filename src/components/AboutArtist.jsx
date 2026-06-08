import React from 'react'

const AboutArtist = () => {
  return (
    <div className='text-white bg-black/97 px-4 py-15'>
        <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl mb-8'>Meet The Artists</h1>
            <p className='text-lg'>The visionaries behind the lens dedicated to perserving your legacy</p>
        </div>
        <div className='flex flex-wrap  md:justify-center md:items-center gap-6 md:gap-x-10'>
            <div className='artist-card w-full md:max-w-80' >
                <img className='w-full' src='https://plus.unsplash.com/premium_photo-1674389878389-a92d46ae429e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <div className='h-20 border py-3 px-5' >
                    <h2 className='text-xl '>Lead Photographer</h2>
                    <h3 className='text-lg text-[#C8A96B]'>Ashish Swami</h3>
                </div>
            </div>

            <div className='artist-card w-full md:max-w-80'>
                <img className='w-full' src='https://plus.unsplash.com/premium_photo-1674389878389-a92d46ae429e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <div className='h-20 border py-3 px-5' >
                    <h2 className='text-xl '>Lead Photographer</h2>
                    <h3 className='text-lg text-[#C8A96B]'>Ashish Swami</h3>
                </div>
            </div>

            <div className='artist-card w-full md:max-w-80'>
                <img className='w-full cover' src='https://plus.unsplash.com/premium_photo-1674389878389-a92d46ae429e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                <div className='h-20 border py-3 px-5' >
                    <h2 className='text-xl '>Lead Photographer</h2>
                    <h3 className='text-lg text-[#C8A96B]'>Ashish Swami</h3>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutArtist