import Image from "next/image";
import React from "react";
import Link from "next/link";
const AppSection = () => {
  return (
    <div className=" container pt-10 mb-10" id="product">
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
        Aplikasi Manajemen Pertanian Berbasis Teknologi
      </div>

      <div className="border-[1px] mx-auto p-10 rounded-xl flex justify-between items-center overflow-hidden">
        <div className="w-1/2">
          <div className="text-4xl font-bold mb-5">
            Unduh aplikasi TaniLand untuk pengalaman terbaik dalam pertanian
          </div>
          <Link
            href="/download"
            className="bg-primary text-white  px-6 py-3 rounded-md md:text-lg text-sm "
          >
            Download App
          </Link>
        </div>
        <div className="flex-none">
          <Image
            className="rounded-xl w-fill  "
            src="/content/Frame1.png"
            
            width={500}
            height={500}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default AppSection;
