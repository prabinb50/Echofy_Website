import React from 'react'
import { BiSolidLeaf } from 'react-icons/bi'
import { GiMapleLeaf } from 'react-icons/gi'
import BlogOne from './BlogOne'

export default function LatestBlogs() {
    return (
        <div className='pt-20 pb-20'>
            <div className='w-11/12 mx-auto space-y-10'>
                {/* first child */}
                <div className='space-y-6'>
                    {/* icon and label */}
                    <div className="flex items-center gap-2">
                        {/* leaf icon */}
                        <GiMapleLeaf className="w-6 h-6 text-[#79B900]" />

                        {/* label text */}
                        <span className="text-[#79B900] font-medium">
                            LATEST BLOGS
                        </span>
                    </div>

                    <div className='flex items-center justify-between'>
                        {/* heading texts */}
                        <div className='opacity-85 font-bold text-4xl leading-tight'>
                            <h1>Building a Greener Future</h1>
                            <h1>Together Forever</h1>
                        </div>

                        {/* view all blogs button */}
                        <div className="relative group inline-flex items-center gap-2 py-3 px-10 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500">
                            <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0 "></span>

                            <div className='flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white'>
                                <p className="font-medium ">
                                    View All Blog
                                </p>

                                {/* leaf icon */}
                                <BiSolidLeaf size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* second child */}
                <BlogOne />
            </div>
        </div>
    )
}
