import Link from "next/link";
import Image from "next/image";
import React from "react";
import YouTube from 'react-youtube';
const ContactSection = () => {

  return (
    <div className="pb-10 container"  id="iot">
      <div
        className="text-center md:text-5xl text-4xl 
        bg-gradient-to-r
        from-blue-500 to-green-500
        bg-clip-text
        text-transparent
        pb-5
        font-bold
        
        "
      >
        Perangkap Hama Dan Monitoring Berbasis Internet of Things
      </div>
      <div>
      </div>
      <div className="border-[1px] mx-auto p-10 rounded-xl flex gap-4 lg:flex-row flex-col-reverse justify-between items-center overflow-hidden">
        <div className="md:w-1/2">
          <div className="text-4xl font-bold mb-5">
            Solusi Terbaik untuk Pengendalian Hama dan Monitoring Lahan
          </div>
          <div>Hubungi kami Sekarang Untuk Pemasangan!</div>
          <div className="sm:flex-row flex-col gap-4">
            <button className="bg-primary text-white px-6 py-3 md:w-1/2 mt-5 rounded-lg">
              Pesan Sekarang
            </button>
           
          </div>
       
   
        </div>
        <div className="flex-none">
          <Image
            className="rounded-xl w-fill shadow-lg  "
            src="/content/trapping.png"
            width={500}
            height={500}
            alt="logo"
          />
        </div>
      </div>
      <div className=" mx-auto py-10 rounded-xl flex gap-4 lg:flex-row flex-col justify-between items-center overflow-hidden">
        <div className="lg:w-1/2 w-full ">
          <span className="border-[2px] rounded-full w-contain px-2  mb-5">Optimalkan Pertanian dengan TaniLand</span>
          <div className="text-4xl font-bold mb-5">
          Pelindung Tanaman dan Pemantau Lahan Terbaikmu
          </div>
         
        </div>
        <div className="lg:w-1/2 ">
        <div className="text-xl"><span className="font-bold ">TANILAND TRAP</span>  bukan hanya alat perangkap hama, tapi juga sahabat setiamu yang memastikan keberlanjutan tanaman dan memberikan informasi monitoring lahan dengan cermat. Seperti pengawal yang melindungi tubuhmu, <span className="font-bold ">TANILAND TRAP</span> siap menjaga pertanianmu dan memberikan banyak manfaat untuk kesuksesan bisnismu di ladang</div>
        </div>
       
      </div>
      {/* <video className="rounded-xl mx-auto" controls poster="/content/img8.jpg">
                <source src="https://youtu.be/mKSPmJtfKJw" type="video/mp4" />
      </video> */}
         <div className="container relative w-full overflow-hidden pt-[56.25%] ">
          <iframe
        src="https://www.youtube.com/embed/TkTMEpLd27I?si=mWtsSXRWMM7TTeXU"
        title="YouTube video player"
        className=" inset-0 rounded-xl responsive-iframe absolute  border-none w-full h-full   "
        
      ></iframe>
          </div>

      <div
        className="
        lg:flex-row
        flex
        flex-col
       items-center
        justify-center
        py-5
        gap-5
        "
      >
             <div className="lg:w1/2">         
          <Image
            className="rounded-xl lg:w-fill w-full shadow-lg  "
            src="/content/img7.JPG"
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
        <div className=" flex flex-col  " >
          <div className=" text-xl md:text-2xl md:pb-10 pb-5 font-bold">
          Metode Terkini dalam Pengendalian Hama untuk Lingkungan yang Lebih Sehat dan Produktivitas yang Maksimal
          </div>
        
          <div 
          className="text-lg md:text-xl ">
            <ul className="list-inside list-disc">
              <li>
              Perlindungan Terus-Menerus

              </li>
              <li>
              Optimalisasi Hasil Panen


              </li>
              <li>
              Efisiensi Biaya

              </li>
              <li>
              Ramah Lingkungan

              </li>
              <li>Pemantauan Real-Time</li>
            </ul>
          </div>
         
        </div>
   
      </div>
    </div>
  );
};

export default ContactSection;
