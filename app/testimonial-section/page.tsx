'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '../style-testi.css';

// import required modules
import { EffectCreative } from 'swiper/modules';
const testi =[
    {
        nama:"Bapak Ali (Petani Cabai) - Cisarua, Bandung",
        testi:" Saya, Bapak Ali, merasa sangat bersyukur dengan kehadiran Taniland di wilayah kami. Mereka membawa inovasi besar dalam manajemen lahan, memberikan pemahaman yang lebih baik tentang cara efektif mengelola tanah pertanian kami. Taniland membantu meningkatkan produktivitas dan kesejahteraan petani cabai di Bandung.",
       
    },
    {
        nama:"Ibu Siti (Petani Cabai) - Lembang, Bandung",
        testi:" Sebagai petani cabai di Lembang, saya merasa terbantu dengan adanya Taniland. Mereka tidak hanya memberikan solusi monitoring lahan yang canggih, tetapi juga memberikan pelatihan yang membantu kami memahami perubahan lingkungan sekitar. Sekarang, kami dapat mengoptimalkan hasil panen kami dengan lebih baik.",
       
    },
    {
        nama:"Pak Joko (Petani Cabai) - Cimahi, Bandung",
        testi:" Saya, Pak Joko, sangat mengapresiasi upaya Taniland dalam penanganan hama di kebun cabai kami. Mereka memberikan solusi yang efektif dan ramah lingkungan, membantu kami mengurangi kerugian akibat serangan hama. Kini, kebun cabai kami tumbuh lebih sehat dan produktif.",
       
    },
    {
        nama:"Ibu Yanti (Petani Cabai) - Rancaekek, Bandung",
        testi:" Taniland benar-benar membawa perubahan positif dalam cara kami mengelola lahan pertanian. Mereka tidak hanya memberikan teknologi canggih untuk monitoring lahan, tetapi juga memberikan dukungan aktif dalam pengembangan pengetahuan kami. Saya, Ibu Yanti, merasa lebih percaya diri dan mampu menghadapi tantangan di kebun cabai saya",
       
    },
    {
        nama:"Pak Udin (Petani Cabai) - Arcamanik, Bandung",
        testi:" Kehadiran Taniland benar-benar memberikan solusi lengkap untuk petani cabai di Bandung. Dari manajemen lahan hingga penanganan hama, mereka hadir sebagai mitra terpercaya. Saya, Pak Udin, melihat peningkatan signifikan dalam hasil panen dan kesejahteraan kami sejak bekerja sama dengan Taniland.",
       
    },
]

const TestimonialSection = () => {
    return ( 
        <>
        <div className="pb-10 container my-20">
         
           

            <div className="mx-auto  rounded-xl flex md:flex-row-reverse flex-col gap-4 sm:justify-between items-center overflow-visible ">
        <div className=" mx-2">
        <div className="text-4xl font-bold mb-5">
        Transformasi Hidup Melalui TaniLand


                </div>
                <div>
                Dengarkan Langsung Kisah Penuh Inspirasi dari Klien yang Telah Mencapai Perubahan Positif dalam Hidup Mereka Berkat TaniLand.
                </div>
            
           
           
             
        </div>
        {/* <div className="  px-10">
        <figure className=" border-[1px] rounded-xl  shadow-xl overflow-hidden rotate-0 hover:rotate-1 translation duration-200">
                    <blockquote className="p-8">
                        <div className="mb-5">
                        <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                        </div>
                        <p className="font-bold text-lg">Saya, Bapak Ali, merasa sangat bersyukur dengan kehadiran Taniland di wilayah kami. Mereka membawa inovasi besar dalam manajemen lahan, memberikan pemahaman yang lebih baik tentang cara efektif mengelola tanah pertanian kami. Taniland membantu meningkatkan produktivitas dan kesejahteraan petani cabai di Bandung.</p>  
                    </blockquote>
                    <div className=" flex items-center jsutify-between px-8 py-4 bg-green-400">
                        <div className="flex items-center gap-5">
                        Bapak Ali (Petani Cabai) - Cisarua, Bandung
                        </div>
                    </div>
                </figure>
        </div> */}
        <Swiper
        grabCursor={true}
        loop={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper lg:w-fill w-full"
      >
      {  testi.map((i,index)=>(
         <SwiperSlide className="w-24"  key={index}>
         <div className="  px-10">
     <figure  className=" border-[1px] rounded-xl dark:bg-black bg-white shadow-xl overflow-hidden rotate-0 hover:rotate-1 translation duration-200">
                 <blockquote className="p-8">
                     <div className="mb-5">
                     <svg width="45" height="36" className="fill-current"><path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path></svg>
                     </div>
                     <p className="font-bold text-lg">{i.testi}</p>  
                 </blockquote>
                 <div className=" flex items-center jsutify-between px-8 py-4 bg-green-400">
                     <div className="flex items-center gap-5">
                    {i.nama}
                     </div>
                 </div>
             </figure>
     </div>
     </SwiperSlide>
      )

        )}
       
      
      </Swiper>
      </div>

    </div> 

       
        </>
     );
}
 
export default TestimonialSection;