import React from 'react'
import './About.css'

const AboutMain = () => {
  return (
    <div className='main flex flex-col items-center justify-center bg-black/97 text-white '>
        <div className='mb-8'>
            <p className='text-center'>
                Founded on the belief that every love story is a masterpiece waiting to be unveiled, As_clicks has redefined luxury wedding photography. We blend an editorial aesthetic with raw, photojournalistic emotion to create visual legacies that feel both intimate and grand.
            </p>
        </div>
        <div className='card-div flex justify-center gap-4 content-center '>
            <div className='card py-4 px-3 shadow-xl/70 bg-black'>
                <p className='title'>The Vision</p>
                <h1 className='heading'>Our Story</h1>
                <p className='content'>It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.</p>
            </div >
            <div className='card shadow-xl/70 bg-black'>
                <p className='title'>The Vision</p>
                <h1 className='heading'>Our Story</h1>
                <p className='content'>It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.</p>
            </div>
            <div className='card shadow-xl/70 bg-black'>
                <p className='title'>The Vision</p>
                <h1 className='heading'>Our Story</h1>
                <p className='content'>It started with a simple desire: to elevate wedding memories into cinematic art. From a small studio to global destination weddings, our focus remains on authenticity.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMain