import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Headers from '../components/Headers';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;