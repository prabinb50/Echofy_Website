import React from 'react'

export default function Partners() {
    return (
        <div className='relative z-10'>
            <img
                src="/brand-bg.jpg"
                alt="Partners Background"
                className='w-full object-cover'
            />

            <div className='flex items-center justify-center gap-2 absolute top-20 left-0 right-0'>
                <div className='w-10 h-[0.5px] bg-white opacity-80'></div>
                <span className='font-semibold text-2xl text-white'>All over the world 100,000+ Customers</span>
                <div className='w-10 h-[0.5px] bg-white opacity-80'></div>
            </div>

            <div className='flex items-center justify-center gap-10 absolute bottom-0 left-0 right-0 top-20'>
                <img
                    src="/brand-1.png"
                    alt="Brand 1"
                    className='object-cover mb-1'
                />

                <img
                    src="/brand-2.png"
                    alt="Brand 2"
                    className='object-cover'
                />

                <img
                    src="/brand-3.png"
                    alt="Brand 3"
                    className='object-cover mb-4'
                />

                <img
                    src="/brand-4.png"
                    alt="Brand 4"
                    className='object-cover mt-1'
                />
            </div>


        </div>
    )
}
