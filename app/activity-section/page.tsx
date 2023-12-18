'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../style.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import 'swiper/css';

const ActivitySection = () => {
    return (
         <div className="pb-10 container my-20">
             <div className="text-center md:text-5xl text-4xl 
        bg-gradient-to-r
        from-blue-500 to-green-500
        bg-clip-text
        text-transparent
        pb-10
        font-bold
        
        ">
           Keajaiban IoT untuk Pertumbuhan Pertanian yang Berkelanjutan
        </div>
           

            <div className="mx-auto  rounded-xl flex lg:flex-row flex-col-reverse gap-8 justify-between items-center overflow-hidden md:overflow-visible">
        <div className="mx-5">
        <div className="text-4xl font-bold mb-5">
        Melangkah maju dalam pertanian modern


                </div>
                <div>
                TaniLand menyusun cerita sukses dengan mencampurkan kecerdasan buatan, sensor pintar, dan teknologi terkini, menciptakan pertanian yang pintar dan efisien.
                </div>
            
                <button className="bg-primary text-white px-6 py-3 lg:w-full w-1/4 mt-5 rounded-lg">
                    Tentang Kami

                </button>
           
             
        </div>
       
        <Swiper
        effect={'cards'}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper swiper-activity lg:w-fill w-full "
      >
        <SwiperSlide> 
          <Image
            className=" w-full  "
            src="/content/img1.jpg"
           fill={true}
            alt="logo"
          /></SwiperSlide>
        <SwiperSlide> 
          <Image
            className="w-full "
            src="/content/img2.jpg"
            fill={true}
            alt="logo"
          /></SwiperSlide>
        <SwiperSlide> 
          <Image
            className="w-full"
            src="/images/perangkap.jpg"
            fill={true}
            alt="logo"
          /></SwiperSlide>
   
      </Swiper>
        
      </div>

    </div> );
}
 
export default ActivitySection;