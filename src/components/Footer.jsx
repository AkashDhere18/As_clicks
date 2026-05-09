import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-9/10 px-8'>

      <div className='flex justify-between'>

        <div>
          <h2>As_Clicks</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nobis optio recusandae repudiandae! Dignissimos maxime qui voluptas?</p>
          <div>
            <button>1</button>
            <button>2</button>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>

        <div>
          <h3>contact us</h3>
          <ul>
            <li>Lorem.</li>
            <li>Lorem.</li>
            <li>Lorem.</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between'>
        <p>© 2026 As_clicks. All rights reserved.</p>
        <div >
          <Link >Privacy Policy</Link>
          <Link >Terms of Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer