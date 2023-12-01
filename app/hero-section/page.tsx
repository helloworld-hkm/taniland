import { Button } from "@/components/ui/button";
import  Image  from "next/image";
import Link from "next/link"
const HeroSection = ()=>{
    return(
    <section className="md:py-20 py-10 md:px-20 px-5 ">
        <div className=" text-center">
            <div className="sm:text-6xl text-5xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            Menciptakan Masa depan Pertanian Indonesia yang Berkelanjutan dan Sejahtera
            </div>
            <p className="text-lg md:text-xl md-10  bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent dark:text-white font-bold">Temukan Solusi Inovatif Untuk Manajemen Lahan Pertanian Anda . Ayo Mulai Kerja Cerdas Bersama TaniLand !</p>
            <div className=" flex gap-4 justify-center pt-10 ">
               
                <Link href="/download" className="bg-primary text-white  px-10 py-4 rounded-md text-lg font-bold">Download App</Link>
                <button className="bg-secondary px-10 py-4 rounded-md text-lg font-bold">Learn More</button>

            </div>
            {/* <div className="pt-10">
            <Image className="rounded-xl  " src="/content/landscape.jpg" layout="responsive"  width={100}   height={400} objectFit="cover" alt="logo" />
            </div>
            <div className="text-3xl bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent font-bold pt-5">
            #Growing Together, greening the future
            </div> */}
        </div>
           
           
    </section>
    )

}

export default HeroSection;