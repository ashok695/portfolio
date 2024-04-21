import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Explorer from './Explorer';
import Open from './Open';
import Bottombar from './Bottombar';

const Layout = () => {
    return (
        <div className='h-screen'>
            <Topbar />
            <div className='flex'>
                <div className='flex'>
                    <Explorer />
                </div>
                <div className='flex flex-col w-screen'>
                    <Open />
                    <Outlet /> {/* This is where the page-specific content will be rendered */}
                </div>
            </div>
            <div className='absolute bottom-0 left-0 w-full z-10'>
                <Bottombar />
            </div>
        </div>
    );
};

export default Layout;
