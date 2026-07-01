import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Wedding Photography',
    desc: "Every wedding is unique, and we focus on preserving every meaningful moment with care and creativity. From the first look to the final farewell, we capture genuine emotions, beautiful details, and timeless memories that you'll treasure for years to come.",
  },
  {
    num: '02',
    title: 'Pre / Post Wedding Photography',
    desc: "We help you choose the perfect locations and create a relaxed atmosphere where your story unfolds naturally. Whether it's a romantic pre-wedding session or a celebration after your big day, we capture authentic moments that reflect your journey together.",
  },
  {
    num: '03',
    title: 'Engagement / Maternity Photography',
    desc: 'From joyful proposals and engagement ceremonies to the beautiful journey of parenthood, our sessions are designed to feel comfortable and personal. We focus on natural expressions and heartfelt moments that become cherished keepsakes for your family.',
  },
  {
    num: '04',
    title: 'Other Events',
    desc: "Whether it's birthdays, anniversaries, baby showers, corporate gatherings, or family celebrations, we document every occasion with attention to detail. Our goal is to capture the atmosphere, emotions, and unforgettable moments that make your event truly special.",
  },
]

const PackagesCom= () => {
  return (
    <>
    <div className='text-center text-white pt-30 px-6 sm:px-10 lg:px-20 mb-12'>
        <h1 className='font-heading text-5xl md:text-6xl mb-6'>Curated Experiences</h1>
        <p className='font-body text-xl md:text-2xl'>Comprehensive collections designed to cover every nuance of your celebration.</p>
    </div>
    
    <div className="bg-black px-6 sm:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map(({ num, title, desc }) => (
          <div
            key={num}
            className="relative bg-[#0d0d0d] border border-[#2a2a2a] rounded-sm p-8 overflow-hidden
                       transition-all duration-300 ease-in-out
                       hover:border-[#C8A96B] group"
          >
            {/* Top gold accent line */}
            <div className="w-8 h-0.5 bg-[#C8A96B] mb-6" />

            {/* Title */}
            <h3 className="text-white text-lg font-semibold mb-3">{title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">{desc}</p>

            {/* Large background number */}
            <span className="absolute bottom-3 right-5 text-[5rem] font-bold leading-none
                             text-white/[0.04] select-none pointer-events-none font-serif tracking-tight">
              {num}
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PackagesCom;