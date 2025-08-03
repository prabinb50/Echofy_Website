import React from 'react'
import { TbUsersGroup } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaAward, FaRegStar } from 'react-icons/fa';

const stats = [
    {
        icon: <TbUsersGroup color='#79B900' className='animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 bg-white rounded-full h-30 w-30 p-8 shadow-lg' />,
        count: "100+",
        label: 'Team Member'
    },
    {
        icon: <IoMdCheckmarkCircleOutline color='#79B900' className='animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 bg-white rounded-full h-30 w-30 p-8 shadow-lg' />,
        count: "960+",
        label: 'Complete Works'
    },
    {
        icon: <FaAward color='#79B900' className='animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 bg-white rounded-full h-30 w-30 p-8 shadow-lg' />,
        count: 38,
        label: 'Awards Winning'
    },
    {
        icon: <FaRegStar color='#79B900' className='animate-pulse transition-transform duration-500 ease-in-out hover:scale-110 bg-white rounded-full h-30 w-30 p-8 shadow-lg' />,
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
                className='w-full h-100 object-cover'
            />

            <div className='absolute top-0 left-0 flex items-center justify-center gap-25 w-full h-full'>
                {/* loop through stats */}
                {stats.map((stat, index) => (
                    <div key={index} className='space-y-6 text-center'>
                        {/* icon */}
                        {stat.icon}

                        {/* count */}
                        <span className='text-white text-5xl font-bold'>{stat.count}</span>

                        {/* label */}
                        <p className='text-white text-xl mt-2'>{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
