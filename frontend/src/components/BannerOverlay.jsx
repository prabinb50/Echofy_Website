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

                {/* banner content */}
                <div className='absolute inset-x-15 bottom-30'>
                    <BannerContent />
                </div>
            </div>
        </>
    )
}
