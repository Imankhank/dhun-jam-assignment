import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import "./layout.css"

const Layout = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className='d-flex'>
                    <div className='position-fixed d-lg-block d-none'>
                        <Sidebar />
                    </div>
                    <div className='main-section ms-auto px-sm-5 px-2 py-sm-5 py-3'>
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout