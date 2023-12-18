import Link from "next/link";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
    return (
         <div className="pb-10 container">
             <div className="text-center md:text-5xl text-4xl 
        bg-gradient-to-r
        from-blue-500 to-green-500
        bg-clip-text
        text-transparent
        pb-5
        font-bold
        
        ">
            Perangkap Hama Dan Monitoring Berbasis Internet of Things
        </div>
           

            <div className="border-[1px] mx-auto p-10 rounded-xl flex gap-4 lg:flex-row flex-col-reverse justify-between items-center overflow-hidden">
        <div className="md:w-1/2">
        <div className="text-4xl font-bold mb-5">
                    Solusi Terbaik untuk Pengendalian Hama dan Monitoring Lahan 


                </div>
                <div>
                   Hubungi kami Sekarang Untuk Pemasangan!
                </div>
              <div className="sm:flex-row flex-col gap-4">
                <button className="bg-primary text-white px-6 py-3 md:w-1/4 mt-5 rounded-lg">
                    Hubungi Kami  

                </button>
                <button className="bg-secondary text-dark px-6 py-3 md:w-1/4 mt-5 rounded-lg">
                    Detail Alat

                </button>
                </div>
        </div>
        <div className="flex-none">
          <Image
            className="rounded-xl w-fill  "
            src="/images/perangkap.jpg"
            
            width={500}
            height={500}
            alt="logo"
          />
        </div>
      </div>

    </div> );
}
 
export default ContactSection;