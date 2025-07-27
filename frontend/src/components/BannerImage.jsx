import React from 'react'
import Navbar from './Navbar'
import BannerContent from './BannerContent';

export default function BannerImage() {
    return (
        <div className='relative w-full h-screen'>
            {/* background image */}
            <img
                src="/background_image.jpg"
                alt="Banner"
                className="object-cover w-full h-full"
            />

            <div className='absolute inset-0'>
                {/* navbar section */}
                <Navbar />

                {/* horizontal line */}
                <hr className='text-white opacity-15' />
            </div>

            {/* banner content */}
            <div className='absolute inset-x-15 bottom-30'>
                <BannerContent />
            </div>
        </div>
    )
}
