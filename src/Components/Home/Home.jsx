import React, { useState } from 'react';
import Slider from '../Silder/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructors from '../PopularInistactor/PopularInstructors';
import About from '../About/About';

import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Slider></Slider>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <About></About>
    </div>
  );
};

export default Home;
