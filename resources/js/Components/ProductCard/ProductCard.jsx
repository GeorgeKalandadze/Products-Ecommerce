import { useState } from 'react';
import ProductImage from '../../assets/laptop.jpg';
import PrimaryButton from '@/Components/PrimaryButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "@inertiajs/react";

const ProductCard = ({props}) => {
    const [isCartClicked, setIsCartClicked] = useState(false);

    const handleCartClick = () => {
        setIsCartClicked(!isCartClicked);
    };

    return (
        <div className="p-4 transition duration-300 shadow-lg w-[350px] rounded relative" onClick={() => console.log(props.id)}>
            <img
                src={props.cart_image}
                className="w-full h-[20.63rem] cursor-pointer"
            />
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

export default ProductCard
