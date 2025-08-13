import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BannerOverlay from './BannerOverlay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerImage() {
    // refs for progress indicator
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    // callback function for Swiper's autoplay progress
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className='relative w-full h-[85vh] sm:h-[90vh] md:h-screen overflow-hidden'>
            {/* custom styles for pagination bullets */}
            <style>
                {`
                .swiper-pagination-bullet {
                    width: 20px;
                    height: 20px;
                    background: transparent !important;
                    border: none;
                    opacity: 1;
                    margin: 0 2px !important;
                    box-sizing: border-box;
                    transition: all 0.3s;
                    position: relative;
                }
                @media (min-width: 640px) {
                    .swiper-pagination-bullet {
                        width: 26px;
                        height: 26px;
                    }
                }
                @media (min-width: 768px) {
                    .swiper-pagination-bullet {
                        width: 32px;
                        height: 32px;
                    }
                }
                .swiper-pagination-bullet::after {
                    content: "";
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #79B900;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: width 0.3s, height 0.3s;
                }
                @media (min-width: 640px) {
                    .swiper-pagination-bullet::after {
                        width: 10px;
                        height: 10px;
                    }
                }
                @media (min-width: 768px) {
                    .swiper-pagination-bullet::after {
                        width: 12px;
                        height: 12px;
                    }
                }
                .swiper-pagination-bullet-active {
                    border: 2px solid #79B900;
                    box-shadow: 0 0 0 2px rgba(121,185,0,0.2);
                }
                @media (min-width: 640px) {
                    .swiper-pagination-bullet-active {
                        border-width: 2.5px;
                        box-shadow: 0 0 0 3px rgba(121,185,0,0.2);
                    }
                }
                @media (min-width: 768px) {
                    .swiper-pagination-bullet-active {
                        border-width: 3px;
                        box-shadow: 0 0 0 4px rgba(121,185,0,0.2);
                    }
                }
                .swiper-pagination-bullet-active::after {
                    width: 10px;
                    height: 10px;
                }
                @media (min-width: 640px) {
                    .swiper-pagination-bullet-active::after {
                        width: 13px;
                        height: 13px;
                    }
                }
                @media (min-width: 768px) {
                    .swiper-pagination-bullet-active::after {
                        width: 16px;
                        height: 16px;
                    }
                }
                
                /* progress indicator styles */
                .autoplay-progress {
                    position: absolute;
                    right: 10px;
                    bottom: 10px;
                    z-index: 10;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #79B900;
                    opacity: 0.8;
                }
                @media (min-width: 640px) {
                    .autoplay-progress {
                        width: 42px;
                        height: 42px;
                        right: 15px;
                        bottom: 15px;
                    }
                }
                @media (min-width: 768px) {
                    .autoplay-progress {
                        width: 48px;
                        height: 48px;
                        right: 20px;
                        bottom: 20px;
                    }
                }
                
                .autoplay-progress svg {
                    --progress: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: 10;
                    width: 100%;
                    height: 100%;
                    stroke-width: 3px;
                    stroke: #79B900;
                    fill: none;
                    stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
                    stroke-dasharray: 125.6;
                    transform: rotate(-90deg);
                }
                
                .autoplay-progress span {
                    font-size: 10px;
                }
                @media (min-width: 640px) {
                    .autoplay-progress span {
                        font-size: 12px;
                    }
                }
                @media (min-width: 768px) {
                    .autoplay-progress span {
                        font-size: 14px;
                    }
                }
                `}
            </style>

            {/* background image slider */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="w-full h-full"
            >
                {/* first slide */}
                <SwiperSlide>
                    {/* background image */}
                    <img
                        src="/background_image.jpg"
                        alt="Banner showing environmental scene"
                        className="object-cover w-full h-full"
                        loading="eager" // load first image immediately
                    />

                    {/* navbar and banner content overlay */}
                    <BannerOverlay />
                </SwiperSlide>

                {/* second slide */}
                <SwiperSlide>
                    {/* background image  */}
                    <img
                        src="/background-image-2.jpg"
                        alt="Second banner showing environmental scene"
                        className="object-cover w-full h-full"
                        loading="lazy" 
                    />

                    {/* navbar and banner content overlay */}
                    <BannerOverlay />
                </SwiperSlide>

                {/* progress indicator */}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}