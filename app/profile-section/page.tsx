'use client'
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from "../variant";
import { Motion } from "@/components/Motion";
const alasan =[
    {
        name:"Teknologi IoT yang canggih",
        deskripsi:" TaniLand menggunakan teknologi Internet of Things (IoT) yang canggih untuk memberikan pemantauan lahan pertanian yang akurat dan real-time. ",
        image:"/content/icon-cloud.png",
        alt:"IOT"
    },
    {
        name:"Solusi Terpadu untuk Pertanian",
        deskripsi:"Tidak hanya sekadar alat pemantauan, tetapi juga sebuah solusi terpadu yang mencakup deteksi serangan hama, prediksi cuaca, monitoring pertumbuhan tanaman ",
        image:"/content/icon-analytics.png",
        alt:"pertnian"
    },
    {
        name:"Jejaring Komunitas yang Kuat",
        deskripsi:"Dengan fitur seperti forum diskusi dan berbagi informasi, TaniLand memfasilitasi kolaborasi antarpetani dan memungkinkan pertukaran pengetahuan. ",
        image:"/content/icon-signal.png",
        alt:"forum"
    },
    {
        name:"Harga terjangkau dengan kemudahan akses dan penggunaan",
        deskripsi:"Dirancang dengan antarmuka yang ramah pengguna, memastikan bahwa petani dari berbagai latar belakang dapat dengan mudah mengakses dan menggunakan aplikasi ini. ",
        image:"/content/icon-dollar.png",
        alt:"forum"
    }
]
const ProfileSection = ({control}) => {
  return (
    <div className="container mx-auto " id="about" >
      <div
        className="
        lg:flex-row
        flex
        flex-col
       items-center
        justify-center
        pb-10
        md:h-screen
        "
      >
        <div className="p-5 justify-center  items-center  " id="about">
        <Motion direction={'down'}  transition={{ delay: 0.2, duration: 0.5 }}>
          <div
           className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pb-5 text-4xl md:text-6xl font-bold ">
          Agritectech Pilihan untuk Solusi Pengendalian Hama
          </div>
          </Motion>
          <Motion direction={'down'}  transition={{ delay: 0.2, duration: 0.5 }}>
          <div
          className=" text-2xl pb-10 font-bold">
          Menghadirkan Solusi Holistik yang Menggabungkan Kepakaran Pertanian dan Keunggulan Teknologi IoT
          </div>
          </Motion>
           <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
          <div 
          className="text-2xl ">
            Dengan latar belakang yang berbeda-beda tidak menjadi sebuah
            hambatan bagi tim untuk membangun sebuah perusahaan bernama{" "}
            <span className="text-green-600 font-bold">TaniLand</span>
          </div>
          </Motion>
        </div>
        <div>
        <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
          
          <Image
            className="rounded-xl w-fill  "
            src="/content/img1.jpg"
            sizes="100vw"
      style={{
        height: '100%',
        width: 'auto',
      }}
      width={500}
      height={300}
           
            alt="logo"
          />
             </Motion>
        </div>
      </div>
      <div className="flex-col items-center justify-center">
      <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
          
        <div
         
         className="text-center text-3xl md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 text-transparent">
          Segera Wujudkan Pertanian Efisien Anda dengan Taniland
        </div>
        </Motion>
        <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-2 gap-4 md:px-40">
                    {alasan.map((item, index) => (
                        
                          <div
                        key={index}
                        className="flex-col space-y-6 pb-10 border
                        
                        p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out
                        "
                        >
                            <div className="
                            text-gray-600 text-3xl font-bold
                            ">
                                <Image
                                src={item.image}
                                alt={item.alt}
                                width={300}
                                height={300}
                                className="object-contain h-20 w-20 items-center justify-center flex mb-10"
                                />
                                <div>
                                    <div className="text-2xl pb-4 bg-gradient-to-t
                                    from-black
                                    to-gray-400
                                    bg-clip-text
                                    text-transparent
                                    dark:text-green-300
                                    ">{
                                    item.name}
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent dark:text-white text-lg">
                                        {item.deskripsi}




                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                </div>
                </Motion>
      </div>
    </div>
  );
};

export default ProfileSection;
