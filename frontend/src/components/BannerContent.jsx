import React from 'react'
import { BiSolidLeaf } from 'react-icons/bi'
import { MdOutlinePlayCircle } from 'react-icons/md'
import { FaPinterestP, FaLinkedinIn } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { motion } from 'framer-motion'

export default function BannerContent() {
    return (
        <>
            {/* vertical social bar - hidden on mobile, visible on larger screens */}
            <motion.div
                className="hidden md:flex flex-col items-center gap-10 lg:gap-20 absolute -left-10 sm:-left-14 md:-left-17 top-10 md:top-17 z-20"
                initial={{ y: 55, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3, ease: 'easeOut' }}
            >
                {/* social media icons */}
                <div className='flex items-center gap-4 text-white transform -rotate-90'>
                    <FaPinterestP className="cursor-pointer hover:text-lime-500 w-4 h-4" />
                    <RxCross2 className="cursor-pointer hover:text-lime-500 w-4 h-4" />
                    <FaLinkedinIn className="cursor-pointer hover:text-lime-500 w-4 h-4" />
                </div>

                {/* vertical line */}
                <div className='h-px bg-white opacity-50 w-12 md:w-18 transform -rotate-90'></div>

                {/* follow us label */}
                <span className='text-white transform -rotate-90 text-sm'>FOLLOW US</span>
            </motion.div>

            {/* main content container */}
        <div className="max-w-[85%] md:max-w-[80%] lg:max-w-[90%]">
                {/* section subtitle */}
                <motion.p
                    className='text-lime-500 text-sm md:text-base font-medium'
                    initial={{ x: -55, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}>
                    NATURAL ENVIRONMENT
                </motion.p>

                {/* main heading */}
                <motion.h1
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-2 sm:mt-3"
                    initial={{ x: -55, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Be Safe Controls
                </motion.h1>

                {/* sub heading */}
                <motion.h1
                    className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mt-1 sm:mt-2"
                    initial={{ x: -55, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    Environment
                </motion.h1>

                {/* description text  */}
                <motion.p
                    className="text-white mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base"
                    initial={{ x: -55, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    Professionally optimize interdependent intellectual interoperable connect best practices.
                    {/* <span className="hidden sm:inline"> interoperable <br /> connect best practices.</span>
                    <span className="sm:hidden"> interoperable connect best practices.</span> */}
                </motion.p>

                {/* buttons section - flex column on mobile, row on larger screens */}
                <motion.div
                    className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 md:mt-10'
                    initial={{ x: -55, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    {/* let's talk button - full width on mobile */}
                    <div className="relative group inline-flex items-center justify-center w-full md:w-auto gap-2 py-3 px-8 md:px-10 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500">
                        <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                        <div className='flex items-center gap-2 relative z-10 transition-all duration-300 text-white'>
                            <p className="font-medium text-base">
                                Let's Talk
                            </p>

                            {/* leaf icon */}
                            <BiSolidLeaf size={16} className="w-4 h-4 sm:w-auto sm:h-auto" />
                        </div>
                    </div>

                    {/* watch video button */}
                    <button className='flex items-center gap-3 w-full md:w-auto justify-center sm:justify-start'>
                        <div className='rounded-full bg-[#355250] px-2 py-2 sm:px-2.5 sm:py-2.5 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                            <MdOutlinePlayCircle
                                color='#79B900'
                                size={24}
                                className="w-6 h-6 md:w-7 md:h-7"
                            />
                        </div>

                        {/* watch video label */}
                        <p className='text-white text-sm sm:text-base'>Watch Video</p>
                    </button>
                </motion.div>
            </div>
        </>
    )
}