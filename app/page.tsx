'use client'

import AppSection from './app-section/page';
import Footer from './footer/page';
import HeroSection from './hero-section/page';
import Navbar from './navbar/page';
import ProfileSection from './profile-section/page';
import ContactSection from './contact-section/page';
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import FaqSection from './faq-section/page';
import ActivitySection from './activity-section/page';
import { useEffect } from "react";
import TestimonialSection from './testimonial-section/page';
export default function Home() {
  const control = useAnimation()
  const [ref, inView] = useInView()
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
      // else {
      //   control.start("hidden");
      // }
    }, [control, inView]);
  return (
  <>
  <Navbar/>
  <HeroSection control={control} ref={ref}/>
  <ProfileSection control={control}/>
  <AppSection control={control}/>
  <ContactSection control={control}/>
  <ActivitySection/>
  <TestimonialSection/>
  <FaqSection/>
  <Footer/>
  </>
  )
}
