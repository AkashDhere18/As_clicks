import React from 'react'
import { Link } from 'react-router-dom'
import Bookyourstory from '../components/Bookyourstory'
import OurDescription from '../components/OurDescription'
import HomeHero from '../components/HomeHero'
import WordsOfLove from '../components/WordsOfLove'
import CategoryShowcase from '../components/CategoryShowcase'

const Home = () => {
    return (
        <>

            <HomeHero />
            <CategoryShowcase />
            <OurDescription />
            <WordsOfLove />
            <Bookyourstory />
        </>
    )
}

export default Home