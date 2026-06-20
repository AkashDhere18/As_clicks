import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { getGalleryImages } from "../api/api";



const data = ["WEEDING", "PRE - WEDDING", "MATERNITY", "ENGAGEMENT", "OTHER"]

const Work = () => {

  const [selectedcategory, setSelectedcategory] = useState("")

  const [images, setImages] = useState([])

  const fetchImages = async () => {
    const res = await getGalleryImages(selectedcategory);
    console.log(res, "response***")

    setImages(res.data);
  };

  useEffect(() => {
    fetchImages()
  }, [selectedcategory])



  return (
    <div className='pt-30 bg-black px-8'>
      <div className='text-white text-center '>
        <h1 className='text-5xl font-semibold mb-6 md:text-6xl'>Our Work</h1>
        <p className='text-lg mb-14 md:text-2xl text-gray-300/80'>A curated selection of love stories we've had the honor to document.</p>
      </div>

      <div className='flex justify-center gap-5 flex-wrap text-white mb-12'>

        <button className='border border-gray-400/20 px-6 py-2'>WEDDINGS</button>
        <button className='border border-gray-400/20 px-6 py-2'>PRE-WEDDINGS</button>
        <button className='border border-gray-400/20 px-6 py-2'>ENGAGEMENT</button>
        <button className='border border-gray-400/20 px-6 py-2'>MATERNITY</button>
        <button className='border border-gray-400/20 px-6 py-2'>OTHER</button>

      </div>

      <div className='flex justify-center flex-wrap gap-9 mb-18'>
        {
          data.map((data, i) => (
            <div
              key={i} onClick={() => setSelectedcategory(data)}
              className='relative w-52 h-92 text-white/0 hover:text-white/30'>
              <img className='object-fit h-full w-full z-0' src='https://images.unsplash.com/photo-1640953148126-1962ec17a92b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
              <div className='absolute z-10 top-0 bottom-0 left-0 right-0 hover:bg-black/30 '></div>
              <h2 className='absolute z-20 text-4xl font-bold bottom-30 left-30 '>{data}</h2>
            </div>
          ))
        }
      </div>

      <div className="flex gap-3 flex-wrap bg-black">
        {images.map((img) => (
          <img
            key={img.public_id}
            src={img.secure_url}
            alt=""
            className="h-[300px] w-[300px]"
          />
        ))}
      </div>

    </div>

  )
}

export default Work