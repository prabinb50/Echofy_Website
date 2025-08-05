import React from 'react'
import { GiFallingLeaf, GiMapleLeaf } from 'react-icons/gi'
import Reviews from './Reviews'

export default function Testimonials() {
    return (
        <div className='bg-[#f5f8ed] relative z-10 pt-20 pb-20'>
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

            {/* <GiFallingLeaf
                size={30}
                className="scale-pulse text-[#79B900] absolute"
            /> */}

            <div className='w-11/12 mx-auto space-y-15'>
                {/* first child */}
                <div className='space-y-5'>
                    {/* icon and label */}
                    <div className="flex items-center justify-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] font-medium">
                            TESTIMONIALS
                        </span>
                    </div>

                    {/* heading texts */}
                    <div className='opacity-85 font-bold text-4xl leading-tight text-center'>
                        <h1>Clients Best Feedback About</h1>
                        <h1>Echofy Provission</h1>
                    </div>
                </div>

                {/* second child */}
                <Reviews />
            </div>

        </div>
    )
}
