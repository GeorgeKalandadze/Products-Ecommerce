import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ImagesSection = ({ images }) => {
    const [productImage, setProductImage] = useState(images[0].name);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check initial screen width
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleNext = () => {
        const currentIndex = images.findIndex((image) => image.name === productImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setProductImage(images[nextIndex].name);
    };

    const handlePrevious = () => {
        const currentIndex = images.findIndex((image) => image.name === productImage);
        const previousIndex = (currentIndex - 1 + images.length) % images.length;
        setProductImage(images[previousIndex].name);
    };

    if (isMobile) {
        return (
            <div className="relative w-full">
                <div className="carousel">
                    {images.length > 1 && (
                        <>
                            <button className="absolute top-[50%] translate-y-[-50%] ml-3 rounded-full  hover:bg-gray-200  duration-300" onClick={handlePrevious}>
                                <KeyboardArrowLeftIcon />
                            </button>

                            <button className="absolute  top-[50%] right-0 translate-y-[-50%] mr-3 rounded-full  hover:bg-gray-200 transition-colors duration-300" onClick={handleNext}>
                                <ChevronRightIcon />
                            </button>

                        </>
                    )}
                </div>
                <img
                    src={productImage}
                    className="rounded  h-[500px] mx-auto w-full transition duration-500"
                    style={{ opacity: 1 }}
                    alt="Product"
                />
            </div>
        );
    }

    return (
        <div className="flex gap-4">
            <div className="flex flex-col justify-between">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.name}
                        className="min-w-[90px] h-[90px] cursor-pointer rounded"
                        onClick={() => setProductImage(image.name)}
                    />
                ))}
            </div>
            <div>
                <div className="carousel-container">
                    <img
                        src={productImage}
                        className="rounded w-[700px] h-[500px] mx-auto "
                        style={{ opacity: 1 }}
                        alt="Product"
                    />

                </div>
            </div>
        </div>
    );
};

export default ImagesSection;
