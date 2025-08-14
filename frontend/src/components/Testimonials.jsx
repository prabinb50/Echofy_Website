import React from 'react'
import { GiLeafSkeleton, GiMapleLeaf } from 'react-icons/gi'
import Reviews from './Reviews'

export default function Testimonials() {
    return (
        <div className='bg-[#f5f8ed] relative z-10 py-12 md:py-16 lg:py-20'>
            {/* custom animations for leaf icons */}
            <style>
                {`
                    @keyframes scalePulse {
                        0%, 100% {
                            transform: scale(0.5);
                        }
                        50% {
                            transform: scale(1.7);
                        }
                    }

                    .scale-pulse {
                        animation: scalePulse 3s ease-in-out infinite;
                    }
                    `}
            </style>

            {/* animated leaf icons */}
            <GiLeafSkeleton
                size={23}
                className="scale-pulse text-[#79B900] absolute right-[18rem] top-15 hidden lg:block"
            />

            <GiLeafSkeleton
                size={45}
                className="scale-pulse text-[#79B900] absolute right-35 top-42 hidden lg:block"
                style={{ fontSize: 'clamp(30px, 5vw, 50px)' }}
            />

            <GiLeafSkeleton
                size={23}
                className="scale-pulse text-[#79B900] absolute left-[18rem] top-15 rotate-90 hidden lg:block"
            />

            <GiLeafSkeleton
                size={45}
                className="scale-pulse text-[#79B900] absolute left-35 top-42 rotate-90 hidden lg:block"
                style={{ fontSize: 'clamp(30px, 5vw, 50px)' }}
            />

            {/* main content container */}
            <div className='w-11/12 max-w-7xl mx-auto space-y-10 md:space-y-12 lg:space-y-15'>
                {/* heading section */}
                <div className='space-y-4 md:space-y-5'>
                    {/* icon and label */}
                    <div className="flex items-center justify-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-5 h-5 md:w-6 md:h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] text-sm md:text-base font-medium">
                            TESTIMONIALS
                        </span>
                    </div>

                    {/* heading texts*/}
                    <div className='opacity-85 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-center'>
                        <h1 className="mb-1 md:mb-2">Clients Best Feedback About</h1>
                        <h1>Echofy Provission</h1>
                    </div>
                </div>

                {/* reviews component */}
                <div className="testimonials-container">
                    <Reviews />
                </div>
            </div>
        </div>
    )
}