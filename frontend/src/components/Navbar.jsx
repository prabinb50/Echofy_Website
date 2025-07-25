import React from 'react'
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className='w-11/12 mx-auto flex items-center justify-between py-6 text-white'>
            {/* logo */}
            <img
                src="/logo.png"
                alt="Logo"
                className="cursor-pointer"
            />

            {/* navigation links */}
            <div className="flex items-center justify-between gap-6 font-semibold">
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Service</p>
                <p className='cursor-pointer'>Pages</p>
                <p className='cursor-pointer'>Blog</p>
                <p className='cursor-pointer'>Contact</p>
            </div>

            {/* search and quote button */}
            <div className='flex items-center justify-between gap-6'>
                <IoSearch
                    color="#79B900"
                    size={25}
                    className="cursor-pointer"
                />

                <button className="bg-lime-500 text-white py-3 px-6 rounded-full cursor-pointer">
                    Get A Quote
                </button>
            </div>
        </div>
    )
}
