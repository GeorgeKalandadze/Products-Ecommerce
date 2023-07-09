import {useState} from "react";

const ImagesSection = ({images}) => {
    const [productImage, setProductImage] = useState(images[0].name);
    console.log(images)
    return (
        <div className="flex gap-4">
            <div className="flex flex-col justify-between">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={`${image.name}`}
                        className="min-w-[90px] h-[90px] cursor-pointer rounded"
                        onClick={() => setProductImage(image.name)}
                    />
                ))}
            </div>
            <div>
                <img  src={productImage} className="rounded min-w-[700px] h-[500px]"/>
            </div>
        </div>
    );
};

export default ImagesSection
