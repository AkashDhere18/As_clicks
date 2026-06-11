import React from 'react'
import { Link } from 'react-router-dom'
import Bookyourstory from '../components/Bookyourstory'
import OurDescription from '../components/OurDescription'
import HomeHero from '../components/HomeHero'

const Home = () => {
    return (
        <>

            <HomeHero />
            <OurDescription />
            <Bookyourstory />
        </>
    )
}

export default Home