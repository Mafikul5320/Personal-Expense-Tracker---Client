import React from 'react';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';
import HeroSection from '../Home/HeroSection';

const HomeLayout = () => {
    return (
        <div>
            <Navber />
            <HeroSection/>
            <Footer/>
        </div>
    );
};

export default HomeLayout;