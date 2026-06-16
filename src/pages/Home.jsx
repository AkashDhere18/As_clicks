import React from 'react'
import { Link } from 'react-router-dom'
import Bookyourstory from '../components/Bookyourstory'
import OurDescription from '../components/OurDescription'
import HomeHero from '../components/HomeHero'
import WordsOfLove from '../components/WordsOfLove'

const Home = () => {
    return (
        <>

            <HomeHero />
            <OurDescription />
            <WordsOfLove />
            <Bookyourstory />
        </>
    )
}

export default Home