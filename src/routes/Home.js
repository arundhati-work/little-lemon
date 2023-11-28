import React from 'react';
import HeroSection from '../components/HeroSection.js';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/AboutUs';
import Navbar from '../components/Navbar.js';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Specials />
      <Testimonials/>
      <About/>
      <Footer />
    </>
  )
}

export default Home