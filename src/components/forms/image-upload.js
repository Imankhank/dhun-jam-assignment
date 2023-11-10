import React, { useState } from 'react';
import DeleteIconWithBg from '../../assets/products-delete';
import UploadIcon from '../../assets/uploadIcon';
import UplaodImgLogo from "../../assets/Upload_image_logo.svg"
function ImageUpload() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (event) => {
                setSelectedImage(event.target.result);
            };

            reader.readAsDataURL(file);
        } else {
            setSelectedImage(null);
        }
    };

    return (
        <>
            {
                (selectedImage ?
                    <>
                        <div style={{ height: "12rem" }} className='rounded-3  position-relative w-100'>
                            <img style={{ width: "100%", height: "11.9rem", objectFit: "cover" }} src={selectedImage} alt="Uploaded Image" />
                            <span onClick={() => setSelectedImage(null)} className='position-absolute bottom-0 end-0 pe-4 pb-2'>
                                <DeleteIconWithBg fill="#F24444" bgFill="#FFFFFF" />
                            </span>
                        </div>

                    </>
                    :
                    <>
                        <label className='w-100' htmlFor='image'>
                            <span className='position-absolute bottom-0 end-0'>
                                <UploadIcon />
                            </span>
                            <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                                <img alt='logo' style={{ height: "12rem" }} src={UplaodImgLogo} />
                            </div>
                            <div className='d-none'>
                                <input id='image' type="file" accept="image/*" onChange={handleImageChange} />
                            </div>
                        </label>
                    </>
                )}
        </>
    )
}

export default ImageUpload;
