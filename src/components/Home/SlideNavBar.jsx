import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

const SlideNavBar = () => {
    return (
        <main className='hidden sm:block h-[350px] ' >
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide className=' '>
                    <div className=' '>
                        <img className=' ' src="./img/SliderHome/slidersm1.jpg" alt="Slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='' src="./img/SliderHome/slidersm2.jpg" alt="Slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./img/SliderHome/slider3.png" alt="Slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./img/SliderHome/slider2.jpg" alt="Slide" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src="./img/SliderHome/slider5.webp" alt="Slide" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default SlideNavBar