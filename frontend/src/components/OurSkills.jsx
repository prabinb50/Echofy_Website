import React from 'react'
import { GiMapleLeaf } from 'react-icons/gi'
import { Check } from 'lucide-react';

export default function OurSkills() {
    return (
        <div className='mt-5 pt-20 pb-20 bg-[#f5f8ed]'>
            <div className='w-11/12 mx-auto grid grid-cols-2 gap-4'>
                {/* left child  section*/}
                <div className='space-y-4'>
                    <div className="flex items-center gap-2">
                        <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                        <span className="text-[#79B900] font-medium">
                            OUR SKILLS
                        </span>
                    </div>

                    <div>
                        <h1 className='font-bold text-4xl leading-tight'>Getting A Greener Future</h1>
                        <h1 className='font-bold text-4xl leading-tight'>Safe Environment</h1>
                    </div>

                    <p className='opacity-50 leading-relaxed'>Competently cultivate worldwide e-tailers through principle-centered value professionally engineer high-payoff deliverables without exceptional processes.</p>

                    <div className='flex items-center gap-6 mt-5'>
                        <div className="relative group inline-flex items-center gap-2 py-3 px-4 rounded-md cursor-pointer overflow-hidden bg-white ">
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0 "></span>

                            <div className='flex items-center gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-2 py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check color="white" />
                                </div>

                                <p className="font-medium text-xl opacity-80 group-hover:opacity-100">
                                    Safe Environment
                                </p>
                            </div>
                        </div>

                        <div className="relative group inline-flex items-center gap-2 py-3 px-4 rounded-md cursor-pointer overflow-hidden bg-white ">
                            <span className="absolute inset-0 bg-[#79B900] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-md z-0 "></span>

                            <div className='flex items-center gap-3 relative z-10 transition-all duration-300 group-hover:text-white'>
                                <div className='rounded-full bg-[#355250] px-2 py-2 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                                    <Check color="white" />
                                </div>

                                <p className="font-medium text-xl opacity-80 group-hover:opacity-100">
                                    Dirty Recycling
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right child section*/}
                <div className='relative'>
                    <img
                        src="/skill-thumb.png"
                        alt="Skill Thumb"
                    />
                </div>
            </div>
        </div>
    )
}
