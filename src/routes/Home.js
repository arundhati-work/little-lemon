import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection.js';
import Specials from '../components/Specials';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import About from '../components/AboutUs';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <Testimonials/>
      <About/>
      <Footer />
    </>
  )
}

export default Home