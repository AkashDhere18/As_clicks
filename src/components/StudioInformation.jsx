import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

const StudioInformation = () => {
  return (
    <div className="flex flex-col items-center  w-full lg:w-1/2 mt-16 lg:mt-12">
            <div className="bg-gray-300/10 text-white border border-gray-400/10 p-6 sm:p-8 md:p-10 w-full max-w-md lg:max-h-[600px] overflow-y-auto">
    
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading mb-10 lg:mb-10">
                Studio Information
              </h2>
    
              {/* Email */}
              <div className="flex gap-5 mb-8 lg:mb-8 font-body">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <FaRegEnvelope className="text-[#C8A96B] text-base sm:text-lg" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm tracking-[3px] uppercase text-gray-300 mb-1">
                    Email Us
                  </p>
                  <a className="text-lg sm:text-xl lg:text-xl break-all"
                     href='mailto:helloasclick@gmail.com'>
                    helloasclick@gmail.com
                  </a>
                </div>
              </div>
    
              {/* Phone */}
              <div className="flex gap-5 mb-8 lg:mb-8 font-body">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-800 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-[#C8A96B] text-base sm:text-lg" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm tracking-[3px] uppercase text-gray-300 mb-1">
                    Call Us
                  </p>
                  <a className="text-lg sm:text-xl lg:text-xl"
                     href='tel:+918379898924'>
                    +91 83798 98924
                  </a>
                </div>
              </div>
    
              {/* Location */}
              <div className="flex gap-5 mb-10 lg:mb-10 font-body">
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
                <p className="text-lg  mb-6 lg:mb-6 font-body">
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
  )
}

export default StudioInformation