import Image from 'next/image'
import { poppins } from '../app/ui/fonts'
import React from 'react'

const Header = () => {
    return (
        <div className='max-w-7xl flex mx-auto px-4 md:px-8 h-screen items-center'>
            <div className='flex flex-col-reverse md:flex-row w-full h-full justify-center items-center'>
                
                {/* Text Section */}
                <div className='md:w-1/2 flex justify-center items-center md:text-left text-center'>
                    <div className={`w-full ${poppins.className}`}>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                            Unleash the
                        </h1>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                            Power
                        </h1>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                            Of Knowledge
                        </h1>
                        <p className='mt-4 text-lg md:text-xl text-gray-600'>
                            Explore a world of books that will take you on a journey of discovery and imagination.
                        </p>
                        {/* Buttons */}
                        <div className='mt-6'>
                            <button className='bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all'>
                                Shop Now
                            </button>
                            <button className='ml-4 bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='md:w-1/2 flex items-center justify-center'>
                    <Image
                        src={'/images/book-store.png'}
                        height={600}
                        width={600}
                        alt='Books Store Header Image'
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
