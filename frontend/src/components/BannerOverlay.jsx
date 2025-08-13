import React from 'react'
import Navbar from './Navbar'
import BannerContent from './BannerContent'

export default function BannerOverlay() {
    return (
        <>
            {/* navbar and banner content */}
            <div className="absolute inset-0 z-10 flex flex-col">
                {/* navbar */}
                <Navbar />

                {/* horizontal line */}
                <hr className='text-white opacity-15' />

                {/* banner content*/}
                <div className='absolute left-4 sm:left-8 md:left-12 lg:left-15 xl:inset-x-15 top-60 md:top-55 bottom-35'>
                    <BannerContent />
                </div>
            </div>
        </>
    )
}