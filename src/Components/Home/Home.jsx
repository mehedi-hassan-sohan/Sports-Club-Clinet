import React, { useState } from 'react';
import Slider from '../Silder/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructors from '../PopularInistactor/PopularInstructors';
import About from '../About/About';
import DarkModeToggle from 'react-dark-mode-toggle';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Slider></Slider>
      <PopularClass></PopularClass>
      <PopularInstructors></PopularInstructors>
      <About></About>
    </div>
  );
};

export default Home;
