import React from 'react';
import { Link } from 'react-router-dom';
import weddingImg from '../assets/Card_Thumbnails/DSC04737.JPG.webp'
import mhendiImg from '../assets/Card_Thumbnails/DSC03148.JPG.webp'
import preWedding from '../assets/Card_Thumbnails/IMG_5193.JPG.webp'
import postWedding from '../assets/Card_Thumbnails/IMG_5089.JPG.webp'
import maternityImg from '../assets/Card_Thumbnails/maternityImg.webp'
import otherImg from '../assets/Card_Thumbnails/otherImg.webp'
import engagementImg from '../assets/Card_Thumbnails/IMG_5188.JPG.webp'


// Replace these placeholder images with your own Cloudinary photos per category
const categories = [
  {
    title: "Wedding Photography",
    image: weddingImg,
    category: "Wedding",
    featured: true,
  },
  {
    title: "Pre-Wedding",
    image: preWedding,
    category: "Pre-wedding",
    featured: false,
  },
  {
    title: "Maternity",
    image: maternityImg,
    category: "Maternity",
    featured: false,
  },
  {
    title: "Post-Wedding",
    image: postWedding,
    category: "Post-Wedding",
    featured: false,
  },
  {
    title: "Engagement",
    image: engagementImg,
    category: "Engagement",
    featured: false,
  },
  {
    title: "Birthday Shoot",
    image: "https://images.unsplash.com/photo-1646470129509-9d5f9c3b0b1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    category: "Birthday Shoot",
    featured: false,
  },
  {
    title: "Mehandi",
    image: mhendiImg,
    category: "Mehandi",
    featured: false,
  },
  {
    title: "Other",
    image: otherImg,
    category: "Others",
    featured: false,
  },
];

const CategoryShowcase = () => {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-3 md:gap-4 max-w-6xl mx-auto">
        {categories.map((item, i) => (
          <Link
            key={i}
            to={`/work/${item.category}`}
            className={`group relative overflow-hidden block ${
              item.featured
                ? "col-span-2 row-span-2 md:col-span-1 md:row-span-2"
                : "col-span-2 row-span-2 md:col-span-1 md:row-span-1" 
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Title */}
            <p className="absolute bottom-4 left-4 text-white font-heading text-base sm:text-lg md:text-xl">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;