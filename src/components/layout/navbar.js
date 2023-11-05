import React, { useState } from 'react';
import logo from "../../assets/assiduus-log.webp"
import moblogo from "../../assets/mobile-logo.png"
import "./layout.css"
import SearchIcon from '../../assets/search-line';
import NotificationIcon from '../../assets/notification';
import profile from "../../assets/profile-image.JPG"
import DropDown from '../../assets/drop-down';
import MenuIcon from '../../assets/menu-line';
import MenuOffcanvas from '../modals/menu-offcanvas';

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <nav className='navbarContainer d-flex justify-content-between align-items-center px-md-5 px-1 py-2 position-sticky top-0'>
            <div>
                <img className='d-md-block d-none' height={50} src={logo} alt='logo' />
                <img className='d-md-none' height={40} src={moblogo} alt='logo' />
            </div>
            <div className=''>
                <div className='d-flex align-items-center gap-md-4 gap-3 '>
                    <div className='px-2 py-1 rounded-3 d-flex align-items-center' style={{ backgroundColor: "#effcef" }}>
                        <SearchIcon className="" />
                        <input className='border-0 input-field bg-effcef' type='text' />
                    </div>
                    <div className='position-relative d-sm-block d-none'>
                        <NotificationIcon />
                        <div className='rounded-circle position-absolute  ' style={{ height: "6px", width: "6px", backgroundColor: "#55BC55", top: "3px", right: "2px" }}>
                        </div>
                    </div>
                    <div className='d-flex align-items-center d-sm-block d-none'>
                        <img width={35} height={35} className='rounded-circle' src={profile} alt='logo' />
                        <DropDown />
                    </div>
                </div>
            </div>
            <div className='d-lg-none'>
                <button className='border-0 bg-transparent' onClick={() => setShow(true)}>
                    <MenuIcon />
                </button>
            </div>
            <MenuOffcanvas show={show} handleClose={() => setShow(false)} />
        </nav>
    )
}
export default Navbar