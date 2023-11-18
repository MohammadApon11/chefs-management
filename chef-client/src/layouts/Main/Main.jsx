import React, { Suspense, lazy } from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const Main = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;