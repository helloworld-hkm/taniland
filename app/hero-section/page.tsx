"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { fadeIn } from "../variant";
import { motion } from "framer-motion";

const HeroSection = ({ control }) => {
  return (
    <section className="md:py-20 2xl:py-52 py-10 md:px-24 px-5 md:h-screen">
      <div className=" text-center">
        <motion.h1
          variants={fadeIn('down', 0.1)}
          initial="hidden"
          animate={{ control }}
          //   transition={{ duration: 1 }}
          whileInView={"visible"}
          //   viewport={{ once:false,amount:0.6 }}
          className="sm:text-6xl text-5xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
        >
          Menciptakan Masa depan Pertanian Indonesia yang Berkelanjutan dan
          Sejahtera
        </motion.h1>
        <motion.p 
        variants={fadeIn('down', 0.4)}
        initial="hidden"
        animate={{ control }}
        //   transition={{ duration: 1 }}
        whileInView={"visible"}
        //   viewport={{ once:false,amount:0.6 }}
         className="text-lg md:text-xl md-10  bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent dark:text-white font-bold">
          Temukan Solusi Inovatif Untuk Manajemen Lahan Pertanian Anda . Ayo
          Mulai Kerja Cerdas Bersama TaniLand !
        </motion.p>
        <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate={{ control }}
        //   transition={{ duration: 1 }}
        whileInView={"visible"}
        
        className=" flex gap-4 justify-center pt-10 items-center ">
        <motion.div
        whileHover={{ scale: 1.2 }}>
          <Link
          
            href="/download"
            className="bg-primary text-white  px-10 py-4 rounded-md md:text-lg text-sm font-bold"
          >
            Download App
          </Link>
          </motion.div>
          <motion.div
        whileHover={{ scale: 1.2 }}>
          <button className="bg-secondary px-10 py-4 rounded-md md:text-lg text-sm font-bold">
            Learn More
          </button>
          </motion.div>
        </motion.div>
        {/* <div className="pt-10">
            <Image className="rounded-xl  " src="/content/landscape.jpg" layout="responsive"  width={100}   height={400} objectFit="cover" alt="logo" />
            </div>
            <div className="text-3xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent font-bold pt-5">
            #Growing Together, greening the future
            </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
