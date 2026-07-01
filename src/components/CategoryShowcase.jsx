import React from 'react';
import { Link } from 'react-router-dom';
import weddingImg from '../assets/Card_Thumbnails/DSC04737.JPG.jpeg'
import mhendiImg from '../assets/Card_Thumbnails/WhatsApp Image 2026-06-21 at 12.52.27 AM (7).jpeg'

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
    image: "https://picsum.photos/seed/pre-wedding-photo/600/600",
    category: "Pre-wedding",
    featured: false,
  },
  {
    title: "Maternity",
    image: "https://picsum.photos/seed/maternity-photo/600/600",
    category: "Maternity",
    featured: false,
  },
  {
    title: "Post-Wedding",
    image: "https://picsum.photos/seed/post-wedding-photo/600/600",
    category: "Post-Wedding",
    featured: false,
  },
  {
    title: "Engagement",
    image: "https://picsum.photos/seed/engagement-photo/600/600",
    category: "Engagement",
    featured: false,
  },
  {
    title: "Birthday Shoot",
    image: "https://picsum.photos/seed/birthday-photo/600/600",
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
    image: "https://picsum.photos/seed/other-photo/600/600",
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