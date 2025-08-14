import React from 'react'

export default function Partners() {
    // partner brand data for easy maintenance
    const partnerLogos = [
        { src: "/brand-1.png", alt: "Brand 1", className: "mb-1" },
        { src: "/brand-2.png", alt: "Brand 2", className: "" },
        { src: "/brand-3.png", alt: "Brand 3", className: "mb-4" },
        { src: "/brand-4.png", alt: "Brand 4", className: "mt-1" }
    ];

    return (
        <div className='relative z-10'>
            {/* background image */}
            <img
                src="/brand-bg.jpg"
                alt="Partners Background"
                className='w-full object-cover h-50'
            />

            {/* container for all content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center mt-4 md:mt-0'>
                {/* heading with decorative lines */}
                <div className='flex items-center justify-center gap-1 md:gap-2 mb-6 md:mb-8 px-4 text-center'>
                    <div className='w-6 md:w-10 h-[0.5px] bg-white opacity-80'></div>

                    <span className='font-semibold text-base sm:text-lg md:text-2xl text-white'>All over the world 100,000+ Customers</span>

                    <div className='w-6 md:w-10 h-[0.5px] bg-white opacity-80'></div>
                </div>

                {/* partner logos container */}
                <div className='grid grid-cols-2 md:grid-cols-4 md:items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-4'>
                    {partnerLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            className={`object-contain max-w-[100px] md:max-w-[120px] lg:max-w-[150px] ${logo.className}`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}