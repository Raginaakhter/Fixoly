import React from 'react';
import Navber from '../Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>

       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
       
        </div>
    );
};

export default Root;