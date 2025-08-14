import React from 'react'
import { BiSolidLeaf } from 'react-icons/bi'
import { GiMapleLeaf } from 'react-icons/gi'
import BlogOne from './BlogOne'

export default function LatestBlogs() {
    return (
        <div className='py-12 md:py-16 lg:py-20'>
            <div className='w-11/12 mx-auto space-y-10 md:space-y-12 lg:space-y-15'>
                {/* heading section */}
                <div className='space-y-3 md:space-y-5'>
                    {/* icon and label */}
                    <div className="flex items-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-5 h-5 md:w-6 md:h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] text-sm md:text-base font-medium">
                            LATEST BLOGS
                        </span>
                    </div>

                    {/* title and button section */}
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0'>
                        {/* heading texts */}
                        <div className='opacity-85 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight'>
                            <h1 className="mb-1">Building a Greener Future</h1>
                            <h1>Together Forever</h1>
                        </div>

                        {/* view all blogs button*/}
                        <div className="relative group inline-flex items-center justify-center md:justify-start gap-2 py-3 px-10 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500 w-full md:w-auto mt-2 md:mt-0">
                            {/* hover animation background */}
                            <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                            {/* button content */}
                            <div className='flex items-center gap-2 relative z-10 transition-all duration-300 text-white'>
                                <p className="font-medium text-sm md:text-base">
                                    View All Blog
                                </p>

                                {/* leaf icon */}
                                <BiSolidLeaf size={16} className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* blog cards section */}
                <BlogOne />
            </div>
        </div>
    )
}