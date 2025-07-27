import React from 'react'
import { BiSolidLeaf } from 'react-icons/bi'
import { MdOutlinePlayCircle } from 'react-icons/md'

export default function BannerContent() {
    return (
        <>
            <p className='text-lime-500'>NATURAL ENVIRONMENT</p>

            <h1 className='text-white font-AlbertSans text-6xl font-bold mt-3'>Be Safe Controls</h1>

            <h1 className='text-white text-6xl font-bold mt-2'>Environments</h1>

            <p className='text-white mt-5'>Professionally optimize interdependent intellectual interoperable <br />connect best practices.</p>

            <div className='flex items-center gap-6 mt-10'>
                <div className="relative group inline-flex items-center gap-2 py-3 px-10 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500">
                    <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0 "></span>

                    <div className='flex items-center gap-2 relative z-10 transition-all duration-300 text-white group-hover:text-white'>
                        <p className="font-medium ">
                            Let's Talk
                        </p>

                        {/* leaf icon */}
                        <BiSolidLeaf size={18} />
                    </div>
                </div>

                <div className='flex items-center gap-3 '>
                    <div className='border rounded-full bg-[#355250] px-2.5 py-2.5 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#355250] before:opacity-50 before:-z-10 before:rounded-full before:animate-ping cursor-pointer'>
                        <MdOutlinePlayCircle
                            color='#79B900'
                            size={30}
                        />
                    </div>

                    <p className='text-white'>Watch Video</p>
                </div>
            </div>
        </>
    )
}
