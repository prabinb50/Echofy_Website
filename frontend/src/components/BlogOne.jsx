import React from 'react'
import { IoArrowForwardCircle } from 'react-icons/io5'

export default function BlogOne() {
    return (
        <div>
            <img
                src="/blog-thumb1.jpg"
                alt="Blog Thumbnail"
                className='object-cover w-full h-full'
            />

            <span>24 Mar, 2024</span>

            <h2>Top 10 Recycling Tips for Environment</h2>

            <p>Competently cultivate worldwide to e-tailers professionally engineer high-quality materials.</p>

            <hr />

            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='rounded-full bg-[#79B900] text-white px-4 py-2'>
                        <span>J</span>
                    </div>
                    <span>John D. Alexon</span>
                </div>

                <IoArrowForwardCircle size={20} color='black' />
            </div>
        </div>
    )
}
