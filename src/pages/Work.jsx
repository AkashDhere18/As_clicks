import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { getGalleryImages } from "../api/api";
import PageWrapper from '../components/PageWrapper';
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import weddingImage from '../assets/Card_Thumbnails/DSC04737.JPG.webp' ;
import preWedding from '../assets/Card_Thumbnails/IMG_5193.JPG.webp'
import engagementImg from '../assets/Card_Thumbnails/IMG_5188.JPG.webp'
import otherImg from '../assets/Card_Thumbnails/otherImg.webp'




const categories = [
  {
    title: "Wedding",
    image: weddingImage,
  },
  {
    title: "Engagement",
    image: engagementImg,
  },
  {
    title: "Pre-wedding",
    image: preWedding,
  },
  {
    title: "Others",
    image: otherImg,
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
              <div key={i} className={`bg-[#12100e] border border-[#2a2520] hover:border-[#C8A96B] shadow-2xl p-4 ${i % 2 === 1 ? "lg:mt-14" : ""}`} onClick={() => setSelectedcategory(item.title)}>
                <img
                  src={item.image}
                  alt=''
                  className='w-full h-[450px] object-cover'
                />

                <h2 className="text-center text-3xl mt-6 font-heading text-[#ffffff] ">
                  {item.title}
                </h2>
              </div>
            ))
          }
        </div>

        <div className='px-6 sm:px-12 lg:px-20 py-16'>
          <h1 className='text-center font-heading text-4xl md:text-5xl lg:text-6xl mb-18' style={{
            background: 'linear-gradient(180deg, #f0c97a 0%, #C8A96B 50%, #9d7a3a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{displayCategory}</h1>
          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <div className='columns-2 sm:columns-3 lg:columns-5 gap-6 space-y-6'>
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