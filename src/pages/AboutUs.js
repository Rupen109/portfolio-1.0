import React from 'react';
import AboutSection from '../Components/AboutSection';
import FaqSection from '../Components/FaqSection';
import Intro from '../Components/Intro';
import ServicesSection from '../Components/ServicesSection';
import { motion } from 'framer-motion';
import { pageAnimation } from './Animation';

const AboutUs = () => {
  return (
    <>
      <motion.div variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <Intro />
      <FaqSection />
      </motion.div>

    </>
  );
}

export default AboutUs;