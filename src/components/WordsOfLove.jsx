import React, { useEffect, useState } from 'react'
import { reviews } from '../Data/wordsOfLoveData'
import { FaStar } from "react-icons/fa";

const WordsOfLove = () => {

    const [data, setData] = useState([])

    console.log(reviews)

    useEffect(() => {
        setData(reviews)
    }, [])


    return (
        <div className='bg-black text-white sm:px-4 py-15'>
            <div className='text-center mb-15'>
                <h1 className='text-4xl md:text-6xl mb-4 font-heading'>Words of Love</h1>
                <p className='text-lg md:text-xl text-center font-body'>What our clients say about ASPF experience</p>
            </div>
            <div className='flex gap-7 overflow-x-auto px-7 py-6 md:w-[70%] m-auto scrollbar-hide'>
                {
                    data.map((d, i) => (
                        <div key={i} className='border px-6 py-5 h-72 w-92 flex-shrink-0 rounded bg-[#121212]  '>
                            <p className='mb-4 flex gap-1 text-[#C8A96B]'>
                                {
                                  [...Array(d.rating)].map((_,index)=>(
                                    <FaStar key={index} />
                                  ))
                                }
                            </p>
                            <p className='font-body mb-3 text-xl text-justify line-clamp-6'>{d.review}</p>
                            <p className='font-heading text-[#C8A96B] text-lg'>{d.name}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default WordsOfLove