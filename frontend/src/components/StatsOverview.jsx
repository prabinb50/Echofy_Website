import React from 'react'
import { TbUsersGroup } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaAward, FaRegStar } from 'react-icons/fa';

// statistics data for easy maintenance
const stats = [
    {
        icon: <TbUsersGroup />,
        count: "100+",
        label: 'Team Member'
    },
    {
        icon: <IoMdCheckmarkCircleOutline />,
        count: "960+",
        label: 'Complete Works'
    },
    {
        icon: <FaAward />,
        count: 38,
        label: 'Awards Winning'
    },
    {
        icon: <FaRegStar />,
        count: 4.7,
        label: 'Avg. Ratings'
    }
];

export default function StatsOverview() {
    return (
        <div className='relative z-0'>
            {/* background image */}
            <img
                src="/counter-bg.png"
                alt="Counter Background"
                draggable="false"
                className='w-full h-[450px] md:h-[400px] lg:h-[500px] object-cover'
            />

            {/* overlay container for stats */}
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center '>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-25 w-11/12 max-w-7xl'>
                    {/* loop through stats */}
                    {stats.map((stat, index) => (
                        <div key={index} className='space-y-2 md:space-y-4 lg:space-y-6 text-center py-5 md:py-0'>
                            {/* icon */}
                            <div className='inline-flex items-center justify-center animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 bg-white rounded-full p-6 lg:p-8 shadow-lg mx-auto'>
                                {React.cloneElement(stat.icon, {
                                    color: '#79B900',
                                    size: 24,
                                    className: 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10'
                                })}
                            </div>

                            {/* count */}
                            <span className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold block'>{stat.count}</span>

                            {/* label */}
                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl'>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}