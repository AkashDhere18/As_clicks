import React from 'react'
import './About.css'

const AboutMain = () => {
  return (
    <div className='main bg-black/97 text-white px-4 py-15 h-screen'>
      
      <div className='content mb-8 flex justify-center text-center py-15'>
        <p className='max-w-4xl text-lg md:text-base leading-6'>
          Founded on the belief that every love story is a masterpiece waiting to be unveiled, As_clicks has redefined luxury wedding photography. We blend an editorial aesthetic with raw, photojournalistic emotion to create visual legacies that feel both intimate and grand.
        </p>
      </div>

      <div className='card-div flex flex-col md:flex-row md:justify-center md:items-center gap-y-6 md:gap-x-10'>
        
        <div className='card w-full md:max-w-55 py-7 px-7 shadow-xl/70 bg-black/30'>
          <p className='title text-[#C8A96B] mb-4'>The Vision</p>
          <p className='heading text-2xl md:text-3xl font-semibold mb-3'>
            Our Story
          </p>
          <p className='content'>
            It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.
          </p>
        </div>

        <div className='card w-full md:max-w-55 py-7 px-7 shadow-xl/70 bg-black'>
          <p className='title text-[#C8A96B] mb-4'>The Vision</p>
          <p className='heading text-2xl md:text-3xl font-semibold mb-3'>
            Our Story
          </p>
          <p className='content'>
            It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.
          </p>
        </div>

        <div className='card w-full md:max-w-55 py-7 px-7 shadow-xl/70 bg-black'>
          <p className='title text-[#C8A96B] mb-4'>The Vision</p>
          <p className='heading text-2xl md:text-3xl font-semibold mb-3'>
            Our Story
          </p>
          <p className='content'>
            It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.
          </p>
        </div>

      </div>
    </div>
  )
}

export default AboutMain