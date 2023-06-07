import React from 'react';
import Slider from '../Silder/Slider';
import PopularClass from '../PopularClasses/PopularClass';
import PopularInstructors from '../PopularInistactor/PopularInstructors';
import About from '../About/About';

const Home = () => {
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