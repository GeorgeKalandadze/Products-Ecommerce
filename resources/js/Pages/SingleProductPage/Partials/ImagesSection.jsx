import {useState} from "react";

const ImagesSection = ({images}) => {
    const [productImage, setProductImage] = useState(images[0].path);
    console.log(images)
    return (
        <div className="flex gap-4">
            <div className="flex flex-col justify-between">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={`http://localhost:8000/storage/app/public/${image.path}`}
                        className="w-[90px] h-[90px] cursor-pointer rounded"
                        onClick={() => setProductImage(image.path)}
                    />
                ))}
            </div>
            <div>
                <img src={productImage} className="rounded"/>
            </div>
        </div>
    );
};

export default ImagesSection
