import React, { useState } from 'react'
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
    // state to manage active links
    const [activeLinks, setActiveLinks] = useState("Home");

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
                {navLinks.map((link) => (
                    <div
                        key={link.name}
                        href={link.path}
                        onClick={() => setActiveLinks(link.name)}
                        className="relative group cursor-pointer"
                    >
                        <a
                            className={`transition-colors duration-300 ${activeLinks === link.name ? 'text-lime-500' : 'text-white '}`}
                        >
                            {link.name}
                        </a>

                        {/* underline effect */}
                        <span
                            className={`absolute bottom-0 left-0 w-full h-[2px] bg-lime-500 transition-all duration-300 ${activeLinks === link.name ? 'scale-x-100' : 'scale-x-0'}`}
                        />
                    </div>
                ))}
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
