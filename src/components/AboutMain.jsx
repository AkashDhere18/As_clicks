import React from 'react'
import './About.css'
import { cardData } from '../Data/AboutUS_CardData'

const AboutMain = () => {
  return (
    
    <div className='main bg-black/97 text-white px-4 py-15 h-screen'>

      <div className='content mb-8 flex justify-center text-center py-15'>
        <p className='max-w-4xl text-lg md:text-base leading-6 font-body'>
          Founded on the belief that every love story is a masterpiece waiting to be unveiled, As_clicks has redefined luxury wedding photography. We blend an editorial aesthetic with raw, photojournalistic emotion to create visual legacies that feel both intimate and grand.
        </p>
      </div>

      <div className='card-div flex flex-col md:flex-row md:justify-center gap-y-6 md:gap-x-10 '>

        {cardData.map((d, i) => (
          <div key={i} className='card w-full md:w-62 lg-w-72 md:h-80 flex-shrink-0 py-7 px-7 shadow-xl/70 bg-black/30 flex flex-col  '>

            <p className='title text-[#C8A96B] mb-4 font-body'>
              {d.title}
            </p>
            <p className='heading text-2xl md:text-2xl font-semibold mb-3 font-heading'>
              {d.subTitle}
            </p>
            <p className='content font-body line-clamp-7'>
              {d.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default AboutMain