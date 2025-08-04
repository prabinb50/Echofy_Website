import React from 'react'
import { GiFallingLeaf } from 'react-icons/gi'

export default function Testimonials() {
    return (
        <div className='bg-[#f5f8ed] relative z-10'>
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

            <GiFallingLeaf
                size={30}
                className="scale-pulse text-[#79B900] "
            />

            <GiFallingLeaf
                size={60}
                className="scale-pulse text-[#79B900]"
            />

            <GiFallingLeaf
                size={30}
                className="scale-pulse text-[#79B900] "
            />

            <GiFallingLeaf
                size={60}
                className="scale-pulse text-[#79B900]"
            />
        </div>
    )
}
