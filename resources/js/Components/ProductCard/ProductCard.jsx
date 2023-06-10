import { useState } from 'react';
import ProductImage from '../../assets/laptop.jpg';
import PrimaryButton from '@/Components/PrimaryButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductCard = () => {
    const [isCartClicked, setIsCartClicked] = useState(false);

    const handleCartClick = () => {
        setIsCartClicked(!isCartClicked);
    };

    return (
        <div className="p-4 transition duration-300 shadow-lg w-[350px] rounded relative">
            <img
                src={ProductImage}
                className="w-full h-[20.63rem] cursor-pointer"
            />
            <p className="text-[1.17rem] mt-4 opacity-90">MackBook Air 77</p>
            <div className="mt-4 flex justify-between">
                <h2 className="font-bold text-[1.17rem]">$3500.99</h2>
                <PrimaryButton
                    className={`rounded-none p-2 bg-[#008bd2]`}
                    onClick={handleCartClick}
                >
                    Add to Cart
                </PrimaryButton >
                {isCartClicked && (
                    <div className="absolute bottom-[85px] right-[30px] transform  bg-[#008bd2] rounded-full h-8 w-8 shadow-lg flex items-center justify-center p-[30px]">
                        <ShoppingCartOutlinedIcon style={{ color: 'white' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard
