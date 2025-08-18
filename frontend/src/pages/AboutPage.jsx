import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import StatsOverview from "../components/StatsOverview";
import WorkProcess from "../components/WorkProcess";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoEarthOutline, IoHome } from "react-icons/io5";
import { GiMapleLeaf } from "react-icons/gi";
import { MdOutlineRecycling } from "react-icons/md";
import { BiSolidLeaf } from "react-icons/bi";

// static data for features
const features = [
    {
        icon: <MdOutlineRecycling className="w-12 h-12 text-[#79B900] bg-lime-100 rounded p-2" />,
        title: "Dust Recycling",
        desc: "Alternative innovation for sustainable environment.",
    },
    {
        icon: <IoEarthOutline className="w-12 h-12 text-[#79B900] bg-lime-100 rounded p-3" />,
        title: "Safe Environment",
        desc: "Promoting eco-friendly practices for future generations.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* hero section */}
            <div className="relative">
                <img
                    src="/breadcrumb-bg.jpg"
                    alt="Green nature background"
                    draggable="false"
                    loading="lazy"
                    className="object-cover w-full h-[440px]"
                />

                <div className="absolute inset-0">
                    <Navbar />
                    <hr className="text-white opacity-20" />
                </div>

                {/* page title + breadcrumb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center z-20 mt-4">
                    <h1 className="text-white font-bold text-5xl">About Us</h1>

                    <nav aria-label="breadcrumb" className="flex items-center gap-2 mt-4">
                        <NavLink to="/" className="flex items-center gap-2 hover:text-lime-500 transition-colors duration-300">
                            <IoHome className="text-lime-500" aria-hidden="true" />
                            <span className="text-white">Echofy</span>
                        </NavLink>

                        <IoIosArrowRoundForward
                            className="text-white"
                            size={28}
                            aria-hidden="true"
                        />
                        <span className="text-white opacity-80">About Us</span>
                    </nav>
                </div>
            </div>

            {/* about section */}
            <div className="relative">
                <img
                    src="/about-bg.jpg"
                    alt="Eco-friendly environmental background"
                    draggable="false"
                    loading="lazy"
                    className="object-cover w-full min-h-[830px]"
                />

                <div className="absolute inset-0 w-11/12 mx-auto py-12 md:py-16 lg:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                        {/* image */}
                        <img
                            src="/about-1.png"
                            alt="Team working for environmental protection"
                            draggable="false"
                            loading="lazy"
                            className="object-cover w-full h-full rounded-lg"
                        />

                        {/* content */}
                        <div className="space-y-4 md:space-y-5">
                            {/* section heading */}
                            <div className="flex items-center space-x-2">
                                <GiMapleLeaf color="#79B900" className="w-6 h-6" />
                                <span className="text-[#79B900] font-medium uppercase text-sm md:text-base">
                                    About Echofy
                                </span>
                            </div>

                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight opacity-85">
                                Protecting Environment <br /> For Green Future
                            </h2>

                            <p className="opacity-40 leading-relaxed text-sm md:text-base">
                                We reinvent front-end deliverables with sustainable solutions.
                                Our focus is on building eco-friendly ecosystems that support
                                communities and businesses alike while reducing the environmental impact.
                            </p>

                            <hr className="opacity-10" />

                            {/* features */}
                            <div className="flex flex-col gap-7">
                                {features.map((f, index) => (
                                    <div key={index} className="flex items-center gap-6">
                                        {f.icon}
                                        <div>
                                            <h5 className="text-gray-900 text-2xl font-semibold">
                                                {f.title}
                                            </h5>
                                            <p className="opacity-50 leading-relaxed text-sm md:text-base">
                                                {f.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="opacity-10" />

                            {/* button */}
                            <NavLink to="/about" className="inline-block mt-6">
                                <div className="relative group inline-flex items-center gap-2 py-3 px-7 rounded-full cursor-pointer text-white bg-lime-500 border border-lime-500 shadow-md overflow-hidden">
                                    <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out rounded-full z-0"></span>

                                    <div className="flex items-center gap-2 relative z-10 transition-all duration-300 group-hover:text-white">
                                        <span className="font-semibold text-sm md:text-base">
                                            More About
                                        </span>
                                        <BiSolidLeaf className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Sections */}
            <StatsOverview />
            <WorkProcess />
            <Partners />
            <Testimonials />
        </>
    );
}
