import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';



// import required modules
import {EffectCube, Pagination } from 'swiper/modules';


const Image = () => {
    return (
        <main className='w-[270px] m-auto sm:hidden px-4 '>
            <section className='w-full m-auto '>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='w-full h-[300px] '>
                            <img className='h-[300px] w-full ' src="./img/SliderHome/slider1.webp" alt="Product" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='w-full h-[300px] '>                            
                            <img className='h-[300px] w-full ' src="./img/SliderHome/slider2.jpg" alt="Product" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='w-full h-[300px] '>                            
                            <img className='h-[300px] w-full ' src="./img/SliderHome/slider3.png" alt="Product" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='w-full h-[300px] '>                            
                            <img className='h-[300px] w-full ' src="./img/SliderHome/slider4.jpg" alt="Product" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>                        
                        <div className='w-full h-[300px] '>                            
                            <img className='h-[300px] w-full ' src="./img/SliderHome/slider5.webp" alt="Product" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </main>
    )
}

export default Image