import React from 'react'
import Navbar from './Navbar'

export default function BannerImage() {
    return (
        <div className='relative w-full h-screen'>
            {/* background image */}
            <img
                src="/background_image.jpg"
                alt="Banner"
                className="object-cover w-full h-full"
            />

            {/* navbar section */}
            <div className='absolute inset-0'>
                <Navbar />

                {/* horizontal line */}
                <hr className='text-white opacity-20' />
            </div>

        </div>
    )
}
