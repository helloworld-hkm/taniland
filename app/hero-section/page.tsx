"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";
import { Motion } from "@/components/Motion";
const HeroSection = () => {
  return (
    <section className="pt-32  md:px-24  px-5 ">
      <div className=" text-center">
        <Motion direction={'down'}  transition={{ delay: 0.3, duration: 0.5 }}>
        <h1
          className="sm:text-6xl text-5xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        >
          Menciptakan Masa depan Pertanian Indonesia yang Berkelanjutan dan
          Sejahtera
        </h1>
        </Motion>
        <Motion direction={'down'}  transition={{ delay: 0.2, duration: 0.5 }}>
        <p 
        
        //   viewport={{ once:false,amount:0.6 }}
         className="text-lg md:text-xl md-10  bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent dark:text-white font-bold">
          Temukan Solusi Inovatif Untuk Manajemen Lahan Pertanian Anda . Ayo
          Mulai Kerja Cerdas Bersama TaniLand !
        </p>
        </Motion>
        <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
        <div
        className=" flex gap-4 justify-center pt-10 items-center ">
        <motion.div
        whileHover={{ scale: 1.2 }}>
          <Link
          
            href="#"
            className="bg-primary text-white  px-10 py-4 rounded-md md:text-lg text-sm font-bold"
          >
            Download App
          </Link>
          </motion.div>
          <motion.div
        whileHover={{ scale: 1.2 }}>
          <Link href="#aplikasi" className="bg-secondary px-10 py-4 rounded-md md:text-lg text-sm font-bold">
            Learn More
          </Link>
          </motion.div>
        </div>
        </Motion> 
        <Motion direction={'up'}  transition={{ delay: 0.2, duration: 0.5 }}>
        <div className="pt-10 flex justify-center ">
            <Image className="rounded-xl dark:grayscale dark:invert  " src="/images/hero.png"   width={800} height={800}    alt="logo" />
            {/* <Image className="rounded-xl dark:block hidden invert " src="/images/hero.jpg"   width={800} height={800}    alt="logo" /> */}
            </div>
            <div className="text-3xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent font-bold pt-5">
            #Growing Together, greening the future
            </div>
      </Motion >
      </div>
    </section>
  );
};

export default HeroSection;
