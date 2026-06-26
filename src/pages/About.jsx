import React from 'react'
import AboutTop from '../components/AboutTop'
import AboutMain from '../components/AboutMain'
import AboutArtist from '../components/AboutArtist'
import PageWrapper from '../components/PageWrapper'

const About = () => {
  return (

    <PageWrapper>
      <div className='pt-20 bg-black '>
        <AboutTop />
        <AboutMain />
        <AboutArtist />
      </div>
    </PageWrapper>
    
  )
}

export default About 