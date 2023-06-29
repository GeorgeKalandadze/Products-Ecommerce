import React, { useRef, useState } from 'react';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import ClearIcon from '@mui/icons-material/Clear';

const UploadImages = () => {
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFiles = Array.from(e.target.files);
        if (newFiles.length > 0) {
            const updatedList = [...fileList, ...newFiles];
            setFileList(updatedList);
        }
    };

    const fileRemove = (file) => {
        const updatedList = fileList.filter((item) => item !== file);
        setFileList(updatedList);
    };

    return (
        <>
            <label className="font-medium text-[18px] ">Upload Product Images</label>
            <div
                ref={wrapperRef}
                className=" relative w-full h-48 border-2 border-dashed border-gray-500 rounded-md flex items-center justify-center bg-gray-100 hover:opacity-60 mt-2"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="drop-file-input__label text-center text-gray-600 font-semibold p-2 flex flex-col items-center">
                    <img src={uploadImg} alt="" className="w-24 rounded-full" />
                    <p>Drag & Drop your files here</p>
                </div>
                <input
                    type="file"
                    value=""
                    onChange={onFileDrop}
                    className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                    multiple
                />
            </div>
            {fileList.length > 0 ? (
                <div className="drop-file-preview mt-8">
                    <p className="drop-file-preview__title font-semibold mb-4">Ready to upload</p>
                    {fileList.map((item, index) => (
                        <div
                            key={index}
                            className=" border-lime-600 border-2 flex items-center mb-2 bg-gray-100 rounded-md p-4 gap-4 justify-between"
                        >
                            <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded overflow-hidden">
                                <img
                                    src={URL.createObjectURL(item)}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="drop-file-preview__item__info flex flex-col gap-2">
                                <p>{item.name}</p>
                                <p>{item.size}B</p>
                            </div>
                            </div>
                            <div>
                            <ClearIcon sx={{color:"red", cursor:"pointer"}} onClick={() => fileRemove(item)}/>
                            </div>
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default UploadImages;


