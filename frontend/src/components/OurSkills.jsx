import React from 'react'
import { GiMapleLeaf } from 'react-icons/gi'
import { Check } from 'lucide-react';
import CountUpUsage from './count-up/CountUpUsage';

export default function OurSkills() {
    return (
        <div className='mt-5 pt-20 pb-20 bg-[#f5f8ed] relative overflow-hidden z-10'>
            {/* inline style for custom dance animation */}
            <style>{`
                @keyframes dance {
                    0% {
                        transform: translateZ(0px);
                    }
                    50% {
                        transform: translate3d(25px, -25px, 0px);
                    }
                    100% {
                        transform: translate3d(0px, -25px, 25px);
                    }
                }
                .animate-dance {
                    animation: 3s ease 0s infinite alternate none running dance;
                }
            `}
            </style>

            {/* animated background shape image */}
            <img
                src="/skill-main-shape.png"
                alt="Skill Main Shape"
                draggable="false"
                className='absolute -z-10 top-0 left-0 object-cover w-50 opacity-70 animate-dance'
            />

            <div className='w-11/12 mx-auto grid grid-cols-2 gap-10'>
                {/* left child section */}
                <div className='space-y-6'>
                    {/* icon and label section */}
                    <div className="flex items-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] font-medium">
                            OUR SKILLS
                        </span>
                    </div>

                    {/* heading texts */}
                    <div>
                        <h1 className='font-bold text-4xl leading-tight'>Getting A Greener Future</h1>
                        <h1 className='font-bold text-4xl leading-tight'>Safe Environment</h1>
                    </div>

                    {/* description paragraph */}
                    <p className='opacity-50 leading-relaxed'>Competently cultivate worldwide e-tailers through principle-centered value professionally engineer high-payoff deliverables without exceptional processes.</p>

                    {/* feature lists */}
                    <div className='flex items-center gap-6'>
                        {/* first feature  */}
                        <div className="relative group inline-flex items-center gap-2 py-4 px-4 rounded-md cursor-pointer overflow-hidden bg-white">
                            {/* hover background */}
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0 "></span>

                            {/* inner content */}
                            <div className='flex items-center gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-2 py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check color="white" />
                                </div>

                                <p className="text-xl group-hover:opacity-100">
                                    Safe Environment
                                </p>
                            </div>
                        </div>

                        {/* second feature */}
                        <div className="relative group inline-flex items-center gap-2 py-4 px-4 rounded-md cursor-pointer overflow-hidden bg-white">
                            {/* hover background */}
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0 "></span>

                            {/* inner content */}
                            <div className='flex items-center gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-2 py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check color="white" />
                                </div>

                                <p className="text-xl group-hover:opacity-100">
                                    Dirty Recycling
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* recycling progress bar */}
                    <div className='space-y-3'>
                        {/* title and percentage */}
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold opacity-80'>Recycling</p>
                            <p className='font-semibold opacity-80'><CountUpUsage />%</p>
                        </div>

                        {/* progress bar */}
                        <div className='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                            <div className='bg-[#79B900] h-2 rounded-full w-5/6'></div>
                        </div>
                    </div>

                    {/* ocean cleaning progress bar */}
                    <div className='space-y-3'>
                        {/* title and percentage */}
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold opacity-80'>Ocean Cleaning</p>
                            <p className='font-semibold opacity-80'>80%</p>
                        </div>

                        {/* progress bar */}
                        <div className='w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'>
                            <div className='bg-[#79B900] h-2 rounded-full w-3/4'></div>
                        </div>
                    </div>
                </div>

                {/* right child section*/}
                <div className='relative z-10'>
                    {/* main image */}
                    <img
                        src="/skill-thumb.png"
                        alt="Skill Thumb"
                        draggable="false"
                        className='object-cover'
                    />

                    {/* floating shape image */}
                    <img
                        src="/skill-shape.png"
                        alt="Skill Shape"
                        draggable="false"
                        className='object-cover absolute top-5 left-0 float-animation'
                    />
                </div>
            </div>
        </div>
    )
}
