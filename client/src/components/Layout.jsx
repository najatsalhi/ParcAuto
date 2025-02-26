import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import '../index.css';
import { Outlet } from 'react-router-dom';



function Layout() {
  return (
    <div>
        <div className='flex'>
            <Sidebar/>
            <div className='layo w-full ml-18 md:ml-59'>
                <Header/>
                <Outlet />
                
            </div>
        </div>
    </div>
  );
};

export default Layout;