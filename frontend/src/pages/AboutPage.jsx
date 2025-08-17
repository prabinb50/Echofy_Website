import React from 'react'
import Navbar from '../components/Navbar'
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoHome } from 'react-icons/io5';

export default function AboutPage() {
    return (
        <>
            <div className='relative'>
                {/* background image */}
                <img
                    src="/breadcrumb-bg.jpg"
                    alt="Breadcrumb Background"
                    draggable="false"
                    loading='lazy'
                    className="object-cover w-full h-[440px]"
                />

                <div className='absolute inset-0'>
                    {/* navbar */}
                    <Navbar />

                    {/* horizontal line */}
                    <hr className='text-white opacity-20' />
                </div>

                {/* centered text */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-20 mt-4'>
                    <h1 className='text-white font-bold text-5xl'>About Us</h1>

                    {/* breadcrumb */}
                    <nav aria-label='breadcrumb' className='flex items-center justify-between gap-2 mt-4'>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <IoHome
                                color='#79B900'
                                aria-hidden="true"
                            />

                            <span className="text-white hover:text-[#79B900] transition-colors duration-300">Echofy</span>
                        </div>

                        <IoIosArrowRoundForward
                            color='white'
                            size={28}
                            aria-hidden="true"
                        />
                        <span className='text-white opacity-80 cursor-pointer'>About Us</span>
                    </nav>
                </div>
            </div>
        </>
    )
}
