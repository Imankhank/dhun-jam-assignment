import { Button } from 'bootstrap';
import React from 'react'
import Modal from 'react-bootstrap/Modal';
import ImageUpload from '../forms/image-upload';

const InvoiceModal = ({ show, handleClose }) => {
    return (
        <Modal centered show={show} onHide={handleClose} animation={true}>
            <Modal.Header closeButton>
                <span className='primar-color fs_18 fw_500'>Upload Invoive</span>
            </Modal.Header>
            <Modal.Body>
                {/* <h2 className='fw_500 fs_15'>Upload file</h2> */}
                <ImageUpload />
            </Modal.Body>
            <Modal.Footer>
                <button className='bg_red text-white py-2 px-3 me-3 border-0 rounded-2' onClick={handleClose}>
                    Close
                </button>
                <button className='border-0 bg-primar text-white py-2 px-3 rounded-2' onClick={handleClose}>
                    Submit
                </button>
            </Modal.Footer>
        </Modal>
    )
}

export default InvoiceModal