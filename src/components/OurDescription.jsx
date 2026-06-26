import React from 'react'

const OurDescription = () => {
  return (

    <div className='flex flex-col md:flex-row md:justify-center md:items-stretch  px-6 sm:px-12 md:px-20 py-16 w-full  gap-10 bg-black text-white'>

    {/* Image */}
    <div className='w-full md:w-[45%] md:min-h-[500px]'>
        <img
            className="w-full h-72 sm:h-96 md:h-full object-cover"
            src='https://images.unsplash.com/photo-1610173826014-d131b02d69ca?q=80&w=2000&auto=format&fit=crop'
        />
    </div>

    {/* Text Content */}
    <div className='w-full md:w-1/2 flex flex-col gap-8'>
        <div>
            <h3 className='font-heading text-[#C8A96B] text-xl sm:text-2xl font-semibold mb-3'>OUR PHILOSOPHY</h3>
            <h1 className='font-heading text-3xl sm:text-4xl font-bold mb-4'>More Than Photography</h1>
            <p className='font-body text-base sm:text-lg leading-relaxed'>
                We don't just capture pictures — we preserve emotions, traditions, smiles, tears,
                laughter, and unforgettable moments. Our approach is deeply rooted in cinematic
                storytelling, turning fleeting instances into eternal art.
            </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 gap-4'>
            {[
                { stat: '500',  label: "Weddings" },
                { stat: '1200', label: "Happy Clients" },
                { stat: '5',    label: "Years Experience" },
                { stat: '50',   label: "Destinations" },
            ].map(({ stat, label }) => (
                <div key={label} className='flex flex-col items-start justify-center border-l border-[#C8A96B] py-2 pl-8'>
                    <h2 className='font-heading text-4xl sm:text-5xl font-bold text-[#C8A96B] '>{stat}<sup className='sm:text-4xl'>+</sup></h2>
                    <p className='font-body text-lg md:text-xl text-gray-600 mt-1'>{label}</p>
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default OurDescription