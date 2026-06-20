import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-black pt-24 sm:pt-28 lg:pt-35 px-6 md:px-12 lg:px-20 xl:px-30 text-white lg:flex lg:justify-between lg:items-start lg:gap-10 xl:gap-16 pb-20 lg:pb-30">

      {/* Contact Form */}
      <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2">

        <div className='max-w-md mb-10'>
          <h1 className='font-serif text-3xl sm:text-4xl mb-4'>Let's Connect</h1>
          <p className='text-sm sm:text-base font-semibold text-gray-300'>
            Tell us about your day. We take on a limited number of commissions each year to ensure an impeccable experience for every couple.
          </p>
        </div>

        <form className="flex flex-col gap-6 w-full max-w-md">

          {/* Name + Email */}
          <div className='flex flex-col md:flex-row gap-5'>
            <div className="flex-1">
              <label htmlFor="Cname" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="Cname"
                name="clientname"
                className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
              />
            </div>
          </div>

          {/* Event Date + Event Type */}
          <div className='flex flex-col md:flex-row gap-5'>
            <div className="flex-1">
              <label htmlFor="date" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
              />
            </div>

            <div className="flex-1">
              <label htmlFor="eventType" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                Event Type
              </label>
              <select
                id="eventType"
                className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
              >
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Pre Wedding">Pre Wedding</option>
                <option value="Reception">Reception</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Story */}
          <div>
            <label htmlFor="story" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
              Tell Us Your Story
            </label>
            <textarea
              id="story"
              rows="6"
              className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none resize-none focus:border-[#C8A96B]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#C8A96B] text-black py-4 uppercase tracking-[3px] font-medium hover:opacity-90 transition"
          >
            Send Inquiry
          </button>

        </form>
      </div>

      {/* Studio Info */}
      <div className="flex flex-col items-center  w-full lg:w-1/2 mt-16 lg:mt-12">
        <div className="bg-gray-300/10 text-white border border-gray-400/10 p-6 sm:p-8 md:p-10 w-full max-w-md lg:max-h-[600px] overflow-y-auto">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-10 lg:mb-10">
            Studio Information
          </h2>

          {/* Email */}
          <div className="flex gap-5 mb-8 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
              <FaRegEnvelope className="text-[#C8A96B] text-base sm:text-lg" />
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[3px] uppercase text-gray-300 mb-1">
                Email Us
              </p>
              <a className="text-lg sm:text-xl lg:text-2xl break-all"
                 href='mailto:asclicks77@gmail.com'>
                asclicks77@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-5 mb-8 lg:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
              <FiPhone className="text-[#C8A96B] text-base sm:text-lg" />
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[3px] uppercase text-gray-300 mb-1">
                Call Us
              </p>
              <a className="text-lg sm:text-xl lg:text-2xl"
                 href='tel:+918379898924'>
                +91 83798 98924
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex gap-5 mb-10 lg:mb-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
              <IoLocationOutline className="text-[#C8A96B] text-lg sm:text-xl" />
            </div>
            <div>
              <p className="text-xs sm:text-sm tracking-[3px] uppercase text-gray-300 mb-1">
                Location
              </p>
              <a className="text-lg sm:text-xl lg:text-xl leading-relaxed"
                 href='https://maps.app.goo.gl/FBaCUujhUt5MaA9y8'
                 target='_blank'
                 rel="noopener noreferrer"
                 >
                Hiremath galli, Miraj,
                <br />
                Sangli, Maharashtra 416410
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-400/20 my-6 lg:my-6"></div>

          {/* Instagram */}
          <div>
            <p className="text-lg  mb-6 lg:mb-6">
              Follow our latest visual stories
            </p>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-[#C8A96B] text-xl sm:text-2xl" />
              <a 
              href='https://www.instagram.com/_as_clicks__'
              target='_blank'
              rel="noopener noreferrer"
              className="text-[#C8A96B] text-lg  tracking-wider font-medium">
                @_as_clicks__
              </a>
              {/* <span >
                
              </span> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs