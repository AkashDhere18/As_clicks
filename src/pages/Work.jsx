import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { getGalleryImages } from "../api/api";
import PageWrapper from '../components/PageWrapper';
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";



const categories = [
  {
    title: "Wedding",
    image: "https://images.unsplash.com/photo-1651399522465-413031000f93?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Engagement",
    image: "https://images.unsplash.com/photo-1654156577076-e0350ba86cc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMHdlZWRpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Pre-wedding",
    image: "https://images.unsplash.com/photo-1600685912448-8bc35c141e18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHdlZWRpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Others",
    image: "https://images.unsplash.com/photo-1714236857540-c1fb413415e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMHdlZWRpbmclMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
  },
];

const Work = () => {

  const [selectedcategory, setSelectedcategory] = useState("")
  const [displayCategory, setDisplayCategory] = useState("")
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  // states for openfull image
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  

  const fetchImages = async () => {
    if (!selectedcategory) return;

    setLoading(true);
    try {
      const res = await getGalleryImages(selectedcategory);
      setImages(res.data);
      setDisplayCategory(selectedcategory); // update title only AFTER images arrive
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages()
  }, [selectedcategory])



  return (
    <PageWrapper>
      <div className='pt-30 bg-black px-8'>
        <div className='text-white text-center mb-25 mt-8'>
          <h1 className='text-5xl font-semibold mb-6 md:text-6xl font-heading'>Our Work</h1>
          <p className='text-lg mb-14 md:text-2xl text-gray-300/80 font-body'>A curated selection of love stories we've had the honor to document.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6 mb-12'>
          {
            categories.map((item, i) => (
              <div key={i} className={`bg-[#F3EEE6] p-4 ${i % 2 === 1 ? "lg:mt-14" : ""}`} onClick={() => setSelectedcategory(item.title)}>
                <img
                  src={item.image}
                  alt=''
                  className='w-full h-[450px] object-cover'
                />

                <h2 className="text-center text-3xl mt-6 font-heading ">
                  {item.title}
                </h2>
              </div>
            ))
          }
        </div>

        <div className='px-6 sm:px-12 lg:px-20 py-16'>
          <h1 className='text-center text-[#C8A96B] font-heading text-4xl md:text-5xl lg:text-6xl mb-15'>{displayCategory}</h1>
          {loading ? (
           <p className="text-center text-white">Loading...</p>
            ) : (
          <div className='columns-2 sm:columns-3 lg:columns-5 gap-4 space-y-4'>
            {images.map((img, i) => (
              <div key={i} className='overflow-hidden rounded-lg shadow-md break-inside-avoid'>
                <img
                  src={img.secure_url}
                  alt=''
                  loading="lazy"
                  className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer'
                  onClick={
                    () => {
                      setIndex(i);
                      setOpen(true);
                    }
                  }
                />
              </div>
            ))}

          </div>
        )}
        </div>

        {/* lightbox  */}
        <Lightbox
          plugins={[Zoom]}
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map((img) => ({
            src: img.secure_url,
          }))}
        />

      </div>
    </PageWrapper>

  )
}

export default Work