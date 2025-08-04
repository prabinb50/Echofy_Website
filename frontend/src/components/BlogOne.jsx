import React from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'

// static data for latest blogs
const latestBlogData = [
    {
        title: "Top 10 Recycling Tips for Environment",
        authorInitial: "J",
        authorName: "John D. Alexon",
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
        <div className='grid grid-cols-3 gap-5'>
            {
                latestBlogData.map((blog, index) => (
                    <div key={index} className='border border-gray-300 rounded-b-lg overflow-hidden space-y-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                        {/* image */}
                        <img
                            src={blog.imageUrl}
                            alt="Blog Thumbnail"
                            className="w-full object-cover"
                            draggable="false"
                        />

                        {/* content section */}
                        <div className='px-5 space-y-3'>
                            {/* date and author section */}
                            <div className='flex items-center gap-2'>
                                <div className='w-2.5 h-2.5 rounded-full bg-[#79B900] animate-pulse' />
                                <span className='opacity-50'>24 Mar, 2024</span>
                            </div>

                            {/* blog title */}
                            <h2 className='font-semibold opacity-85 text-2xl hover:text-[#79B900] cursor-pointer'>{blog.title}</h2>

                            {/* blog description */}
                            <p className='opacity-50 leading-relaxed'>Competently cultivate worldwide to e-tailers professionally engineer high</p>
                        </div>

                        {/* horizontal line */}
                        <hr className='opacity-20' />

                        {/* author section */}
                        <div className='flex items-center justify-between px-5 pb-4'>
                            {/* author initials and name */}
                            <div className='flex items-center justify-between gap-3 hover:text-[#79B900] cursor-pointer'>
                                {/* author initials */}
                                <div className='rounded-full bg-[#79B900] text-white px-4 py-2'>
                                    <span className='font-semibold'>{blog.authorInitial}</span>
                                </div>

                                {/* author name */}
                                <span className='font-semibold opacity-85'>{blog.authorName}</span>
                            </div>

                            {/* forward icon */}
                            <IoArrowForwardCircle size={28} className='hover:text-[#79B900] cursor-pointer' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

