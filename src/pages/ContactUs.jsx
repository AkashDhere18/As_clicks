import React, { useState } from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import StudioInformation from '../components/StudioInformation';
import { sendContactForm } from '../api/api';
import PageWrapper from '../components/PageWrapper';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    event: "",
    message: "",
  });

  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await sendContactForm(formData);

      alert("message sent succesfully")

      setFormData({
        name: "",
        email: "",
        contact: "",
        event: "",
        message: "",
      })
    } catch (error) {
      console.log(error)

      alert("failed to send message")
    }
  }

  return (
    <PageWrapper>
      <div className="bg-black pt-24 sm:pt-28 lg:pt-35 px-6 md:px-12 lg:px-20 xl:px-30 text-white lg:flex lg:justify-between lg:items-start lg:gap-10 xl:gap-16 pb-20 lg:pb-30">

        {/* Contact Form */}
        <div className="w-full flex flex-col items-center lg:items-start lg:w-1/2">

          <div className='max-w-md mb-10'>
            <h1 className='font-serif  sm:text-4xl md:text-6xl mb-4 font-heading'>Let's Connect</h1>
            <p className='text-sm md:text-md sm:text-base  text-gray-300 font-body'>
              Tell us about your day. We take on a limited number of commissions each year to ensure an impeccable experience for every couple.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handelSubmit} className="flex flex-col gap-6 w-full max-w-md font-body">

            {/* Name + Email */}
            <div className='flex flex-col md:flex-row gap-5'>
              <div className="flex-1">
                <label htmlFor="Cname" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="Cname"
                  name="name"
                  value={formData.name}
                  onChange={handelChange}
                  required
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
                  value={formData.email}
                  onChange={handelChange}
                  required
                  className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
                />
              </div>
            </div>

            {/* Event Date + Event Type */}
            <div className='flex flex-col md:flex-row gap-5'>
              <div className="flex-1">
                <label htmlFor="number" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  name='contact'
                  value={formData.contact}
                  onChange={handelChange}
                  required
                  className="w-full bg-gray-400/10 border border-gray-300/10 p-4 text-white outline-none focus:border-[#C8A96B]"
                />
              </div>

              <div className="flex-1">
                <label htmlFor="eventType" className="block text-xs tracking-[3px] uppercase text-gray-300 mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  name='event'
                  onChange={handelChange}
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
                name='message'
                value={formData.message}
                onChange={handelChange}
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
        <StudioInformation />

      </div>
    </PageWrapper>
  )
}

export default ContactUs