import React from 'react';
import Details from '../../Pages/Details/Details';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const DetailsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default DetailsLayout;