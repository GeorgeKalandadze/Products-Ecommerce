import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from "@inertiajs/react";
import {useState} from "react";

const ProductCard = ({ props }) => {
    const [isCartClicked, setIsCartClicked] = useState(false);
    console.log(props.product_images[0]?.name, 'props');

    const handleCartClick = () => {
        setIsCartClicked(!isCartClicked);
    };

    return (
        <div className="p-4 transition duration-300 shadow-lg w-[350px] rounded relative" onClick={() => console.log(props.id)}>
            {props.product_images && props.product_images.length > 0 && (
                <img
                    src={props.product_images[0]?.name}
                    className="w-full h-[20.63rem] cursor-pointer"
                />
            )}
            <p className="text-[1.17rem] mt-4 opacity-90">{props.name}</p>
            <div className="mt-4 flex justify-between">
                <h2 className="font-bold text-[1.17rem]">${props.price}</h2>
                <Link href={`/products/${props.id}`}>
                    <PrimaryButton
                        className={`rounded-none p-2 bg-[#008bd2]`}
                        onClick={handleCartClick}
                    >
                        See Product
                    </PrimaryButton >
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
