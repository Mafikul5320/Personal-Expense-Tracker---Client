import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Components/Navber';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <Navber />
            <div className='min-h-[calc(100vh-357px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;