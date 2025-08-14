import React from 'react'
import { GiMapleLeaf } from 'react-icons/gi'
import { Check } from 'lucide-react';
import CountUpUsageForRecycling from './count-up/CountUpUsageForRecycling';
import CountUpUsageForOceanCleaning from './count-up/CountUpUsageForOceanCleaning';
import { motion } from 'framer-motion';

export default function OurSkills() {
    return (
        <div className='py-12 md:py-16 lg:py-20 bg-[#f5f8ed] relative overflow-hidden z-10'>
            {/* custom animation for floating elements */}
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
                className='absolute -z-10 top-0 left-0 object-cover w-30 md:w-40 lg:w-50 opacity-75 animate-dance'
            />

            <div className='w-11/12 mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10'>
                {/* left content section */}
                <div className='space-y-4 md:space-y-5'>
                    {/* icon and label section */}
                    <div className="flex items-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-5 h-5 md:w-6 md:h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] text-sm md:text-base font-medium">
                            OUR SKILLS
                        </span>
                    </div>

                    {/* heading texts */}
                    <div className='opacity-85 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight'>
                        <h1 className="mb-1">Getting A Greener Future</h1>
                        <h1>Safe Environment</h1>
                    </div>

                    {/* description paragraph */}
                    <p className='opacity-50 leading-relaxed text-sm md:text-base'>Competently cultivate worldwide e-tailers through principle-centered value professionally engineer high-payoff deliverables without exceptional processes.</p>

                    {/* feature lists */}
                    <div className='flex flex-row items-center gap-6'>
                        {/* first feature  */}
                        <div className="relative group inline-flex items-center gap-2 py-3 md:py-4 px-3 md:px-4 rounded-md cursor-pointer overflow-hidden bg-white">
                            {/* hover background animation */}
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0"></span>

                            {/* inner content */}
                            <div className='flex items-center gap-2 md:gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-1.5 py-1.5 md:px-2 md:py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check className="w-4 h-4 md:w-5 md:h-5" color="white" />
                                </div>

                                <p className="text-base md:text-xl group-hover:opacity-100">
                                    Safe Environment
                                </p>
                            </div>
                        </div>

                        {/* second feature */}
                        <div className="relative group inline-flex items-center gap-2 py-3 md:py-4 px-3 md:px-4 rounded-md cursor-pointer overflow-hidden bg-white">
                            {/* hover background animation */}
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0"></span>

                            {/* inner content */}
                            <div className='flex items-center gap-2 md:gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-1.5 py-1.5 md:px-2 md:py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check className="w-4 h-4 md:w-5 md:h-5" color="white" />
                                </div>

                                <p className="text-base md:text-xl group-hover:opacity-100">
                                    Dirty Recycling
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* recycling progress bar */}
                    <div className='space-y-2 md:space-y-3 mt-2 md:mt-4'>
                        {/* title and percentage */}
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold opacity-80 text-sm md:text-base'>Recycling</p>
                            <p className='font-semibold opacity-80 text-sm md:text-base'><CountUpUsageForRecycling />%</p>
                        </div>

                        {/* progress bar */}
                        <div className='w-full bg-gray-200 rounded-full h-1.5 md:h-2 dark:bg-gray-700'>
                            <div className='bg-[#79B900] h-1.5 md:h-2 rounded-full w-5/6'></div>
                        </div>
                    </div>

                    {/* ocean cleaning progress bar */}
                    <div className='space-y-2 md:space-y-3'>
                        {/* title and percentage */}
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold opacity-80 text-sm md:text-base'>Ocean Cleaning</p>
                            <p className='font-semibold opacity-80 text-sm md:text-base'><CountUpUsageForOceanCleaning />%</p>
                        </div>

                        {/* progress bar */}
                        <div className='w-full bg-gray-200 rounded-full h-1.5 md:h-2 dark:bg-gray-700'>
                            <div className='bg-[#79B900] h-1.5 md:h-2 rounded-full w-3/4'></div>
                        </div>
                    </div>
                </div>

                {/* right image section */}
                <div className='relative z-10 mt-6 lg:mt-0 order-2 lg:order-1'>
                    {/* main image */}
                    <img
                        src="/skill-thumb.png"
                        alt="Skill Thumb"
                        draggable="false"
                        className='object-cover w-full max-w-md mx-auto lg:max-w-full'
                    />

                    {/* floating shape image */}
                    <motion.img
                        src="/skill-shape.png"
                        alt="Skill Shape"
                        draggable="false"
                        className="object-cover absolute top-4 left-0"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </div>
    )
}