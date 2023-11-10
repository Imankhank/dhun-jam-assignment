import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assets/assiduus-log.webp"
import Sidebar from '../layout/sidebar';

const MenuOffcanvas = ({ show, handleClose = () => { } }) => {
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <img height={50} src={logo} alt='logo' />
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* <div className='fw_500  d-flex gap-2'>
                    <img width={25} height={25} className='rounded-circle' src={profile} alt='logo' />
                    <span className='fw_500'>  My Profile</span>
                </div>
                <div style={{ width: "fit-content" }} className='mt-4 d-flex align-items-center gap-2'>
                    <div className='position-relative'>
                        <NotificationIcon />
                        <div className='rounded-circle position-absolute' style={{ height: "6px", width: "6px", backgroundColor: "#55BC55", top: "3px", right: "2px" }}>
                        </div>
                    </div>
                    <span className='fw_500'>Notifications</span>
                </div>
                <div className='px-2 py-1 rounded-3 mt-4' style={{ backgroundColor: "#effcef" }}>
                    <SearchIcon className="pb-1" />
                    <input style={{ backgroundColor: "#effcef" }} className='border-0 input-field' type='text' />
                </div> */}
                <Sidebar />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default MenuOffcanvas