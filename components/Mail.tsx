"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  return (
    <div className="bg-green-500 mx-auto mb-0">
        <section
      id="contact"
      className="container grid md:grid-cols-2  py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Mari Terhubung dengan Taniland
        </h5>
        <p className="text-white mb-4 max-w-md">
          {" "}
          Bergabunglah dalam Komunitas Taniland dan Wujudkan Potensi Bersama!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="">
            <Image src="/images/logo-white.png" width={100} height={100} alt="Github Icon" />
          </Link>
        
        </div>
      </div>
      <div>
        
          <form className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className=" bg-white border border-black placeholder-[#9CA2A9] text-blacktext-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-black placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-200 hover:bg-white hover:text-black text-primary font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
       
      </div>
    </section>
    </div>
    
  );
};

export default EmailSection;