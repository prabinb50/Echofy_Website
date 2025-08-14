import React from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'

// static data for latest blogs
const latestBlogData = [
    {
        title: "Top 10 Recycling Tips for Environment",
        authorInitial: "H",
        authorName: "Henry Smith",
        imageUrl: "/blog-thumb1.jpg"
    },
    {
        title: "How Every Individual Can Make a Difference",
        authorInitial: "A",
        authorName: "Anjelina Watson",
        imageUrl: "/blog-thumb2.jpg"
    },
    {
        title: "Innovations in Renewable Energy Technology",
        authorInitial: "D",
        authorName: "David Watson",
        imageUrl: "/blog-thumb3.jpg"
    }
];

export default function BlogOne() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-white rounded-md overflow-hidden'>
            {
                latestBlogData.map((blog, index) => (
                    // blog card
                    <div key={index} className='border border-gray-300 rounded-lg space-y-3 md:space-y-4 lg:space-y-5 relative overflow-hidden group hover:shadow-xl transition-shadow duration-300'>
                        {/* image container */}
                        <div className="relative overflow-hidden h-auto">
                            {/* green overlay animation - only covers image */}
                            <div className="absolute top-0 left-1/2 w-0 h-full bg-[#79B900] transition-all duration-500 z-10 group-hover:w-full group-hover:left-0 group-hover:opacity-0"></div>

                            {/* image */}
                            <img
                                src={blog.imageUrl}
                                alt={`Blog thumbnail for ${blog.title}`}
                                className="w-full object-cover transition-all duration-500 scale-100 group-hover:scale-110"
                                draggable="false"
                                loading="lazy"
                            />

                            {/* category tag with slide-in animation */}
                            <div className='absolute -left-full transform transition-all duration-500 group-hover:left-5 top-5 z-20'>
                                <h6 className='text-white text-center inline-block overflow-hidden rounded-full px-5 py-2 text-sm transition-all duration-300 bg-[#79B900]'>Environment</h6>
                            </div>
                        </div>

                        {/* content section */}
                        <div className='px-3 md:px-5 space-y-2 md:space-y-3'>
                            {/* date and author section */}
                            <div className='flex items-center gap-2'>
                                <div className='w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#79B900] animate-pulse' />
                                <span className='opacity-50 text-sm md:text-base'>24 Mar, 2024</span>
                            </div>

                            {/* blog title*/}
                            <h2 className='font-semibold opacity-85 text-lg md:text-xl lg:text-2xl hover:text-[#79B900] cursor-pointer group-hover:text-[#79B900] line-clamp-2'>{blog.title}</h2>

                            {/* blog description*/}
                            <p className='opacity-50 leading-relaxed text-sm md:text-base line-clamp-2'>Competently cultivate worldwide to e-tailers professionally engineer high</p>
                        </div>

                        {/* horizontal line */}
                        <hr className='opacity-20' />

                        {/* author section */}
                        <div className='flex items-center justify-between px-3 md:px-5 pb-3 md:pb-4'>
                            {/* author initials and name */}
                            <div className='flex items-center justify-between gap-2 md:gap-3 hover:text-[#79B900] cursor-pointer'>
                                {/* author initials */}
                                <div className='rounded-full bg-[#79B900] text-white px-3 md:px-3.5 py-1.5 md:py-2'>
                                    <span className='font-semibold text-sm md:text-base'>{blog.authorInitial}</span>
                                </div>

                                {/* author name*/}
                                <span className='font-semibold opacity-85 text-sm md:text-base'>{blog.authorName}</span>
                            </div>

                            {/* forward icon*/}
                            <IoArrowForwardCircle size={24} className='hover:text-[#79B900] cursor-pointer w-7 h-7' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}