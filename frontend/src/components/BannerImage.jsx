import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import BannerOverlay from './BannerOverlay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerImage() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            {/* custom styles for pagination bullets */}
            <style>
                {`
                .swiper-pagination-bullet {
                    width: 32px;
                    height: 32px;
                    background: transparent !important;
                    border: none;
                    opacity: 1;
                    margin: 0 2px !important;
                    box-sizing: border-box;
                    transition: all 0.3s;
                    position: relative;
                }
                .swiper-pagination-bullet::after {
                    content: "";
                    display: block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #79B900;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    transition: width 0.3s, height 0.3s;
                }
                .swiper-pagination-bullet-active {
                    border-width: 4px;
                    border: 3px solid #79B900;
                    box-shadow: 0 0 0 4px rgba(121,185,0,0.2);
                }
                .swiper-pagination-bullet-active::after {
                    width: 16px;
                    height: 16px;
                }
                `}
            </style>

            {/* background image slider */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
                <SwiperSlide>
                    {/* background image 1*/}
                    <img
                        src="/background_image.jpg"
                        alt="Banner"
                        className="object-cover w-full h-full"
                    />

                    {/* navbar and banner content */}
                    <BannerOverlay />
                </SwiperSlide>

                <SwiperSlide>
                    {/* background image 2 */}
                    <img
                        src="/background-image-2.jpg"
                        alt="Banner"
                        className="object-cover w-full h-full"
                    />

                    {/* navbar and banner content */}
                    <BannerOverlay />
                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div >
    );
}




