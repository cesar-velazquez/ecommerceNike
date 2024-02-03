import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/Tennis.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ChildSlide = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <main className='max-w-[600px] w-[260px] sm:w-[450px] bg-black/70 m-auto '>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide className='bg-transparent h-[120px]
                sm:h-[190px] ' >
                    <div className='bg-red-500 h-[100%] w-[50%]  '>
                        <img className=' ' src="./img/child/tenni3.png" alt="Product Tennni" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent h-[120px]
                sm:h-[190px] ' >
                    <div className='h-[100%] w-[50%]  '>
                        <img className=' ' src="./img/child/sandalia1.png" alt="Product Tennni" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent h-[120px]
                sm:h-[190px] ' >
                    <div className='h-[100%] w-[50%]  '>
                        <img className=' ' src="./img/child/tenni11.png" alt="Product Tennni" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent h-[120px]
                sm:h-[190px] ' >
                    <div className='h-[100%] w-[50%]  '>
                        <img className=' ' src="./img/child/sandalia2.png" alt="Product Tennni" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-transparent h-[120px]
                sm:h-[190px] ' >
                    <div className='h-[100%] w-[50%]  '>
                        <img className=' ' src="./img/child/tenni5.png" alt="Product Tennni" />
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress  rounded-full 
                absolute right-0  
                bottom-0 " slot="container-end">
                    <svg viewBox="0 0 100 100" ref={progressCircle}>
                        <circle className='absolute bottom-0 ' cx="50" cy="50" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </main>
    )
}

export default ChildSlide