import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

// navbar links
const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
];

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
                {navLinks.map((eachLink, index) => (
                    <div key={index} className="relative group cursor-pointer">
                        <NavLink
                            to={eachLink.path}
                            className={({ isActive }) =>
                                `transition-colors duration-300 ${isActive ? 'text-lime-500' : 'text-white'}`
                            }
                        >
                            {eachLink.name}
                        </NavLink>

                        {/* underline effect */}
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-lime-500 scale-x-0 group-hover:scale-x-100 transition-all duration-300" />
                    </div>
                ))}
            </div>

            {/* search icon and quote button */}
            <div className='flex items-center justify-between gap-6'>
                {/* search icon */}
                <IoSearch
                    color="#79B900"
                    size={25}
                    className="cursor-pointer"
                />

                {/* get a quote button */}
                <div className="relative group inline-flex items-center gap-2 py-3 px-6 rounded-full cursor-pointer text-white overflow-hidden bg-lime-500 border border-lime-500">
                    {/* animated background */}
                    <span className="absolute inset-0 bg-[#001819] w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                    {/* button text */}
                    <p className="relative z-10 transition-all duration-300 text-white group-hover:text-white">
                        Get A Quote
                    </p>
                </div>
            </div>
        </div>
    )
}
