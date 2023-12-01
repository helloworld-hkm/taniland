'use client'
import React from "react";
import Image from "next/image";

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
        name:"Solusi Terpadu untuk Pertanian",
        deskripsi:"Dengan fitur seperti forum diskusi dan berbagi informasi, TaniLand memfasilitasi kolaborasi antarpetani dan memungkinkan pertukaran pengetahuan. ",
        image:"/content/icon-signal.png",
        alt:"forum"
    },
    {
        name:"Harga terjangkau dengan kemudahan akses dan penggunaan",
        deskripsi:"Dirancang dengan antarmuka pengguna yang ramah pengguna, memastikan bahwa petani dari berbagai latar belakang dapat dengan mudah mengakses dan menggunakan aplikasi ini. ",
        image:"/content/icon-dollar.png",
        alt:"forum"
    }
]
const ProfileSection = () => {
  return (
    <div className="container mx-auto">
      <div
        className="
        lg:flex-row
        flex
        flex-col
       items-center
        justify-center
        pb-10
        "
      >
        <div className="p-5 justify-center  items-center ">
          <div className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pb-5 text-4xl md:text-6xl font-bold ">
            Agritech Yang Lahir Dari Program Bangkit 2023 Batch 1
          </div>
          <div className=" text-2xl pb-10 font-bold">
            Top-20 capstone project yang mendaptakan pendanaan 140 Juta{" "}
          </div>
          <div className="text-2xl ">
            Dengan latar belakang yang berbeda-beda tidak menjadi sebuah
            hambatan bagi tim untuk membangun sebuah perusahaan bernama{" "}
            <span className="text-green-600 font-bold">TaniLand</span>
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="text-center text-3xl md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r bg-clip-text from-black to-green-500 text-transparent">
          Kenapa harus TaniLand?
        </div>
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
      </div>
    </div>
  );
};

export default ProfileSection;
