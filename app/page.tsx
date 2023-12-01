
import AppSection from './app-section/page';
import Footer from './footer/page';
import HeroSection from './hero-section/page';
import Navbar from './navbar/page';
import ProfileSection from './profile-section/page';
import ContactSection from './contact-section/page';

export default function Home() {
  return (
  <>
  <Navbar/>
  <HeroSection/>
  <ProfileSection/>
  <AppSection/>
  <ContactSection/>
  <Footer/>
  </>
  )
}
