import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            This is main page
            <Outlet></Outlet>
        </div>
    );
};

export default Main;